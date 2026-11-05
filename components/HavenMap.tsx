"use client";

import { useEffect, useRef, useState } from "react";
import type { City } from "@/site/map";
import "maplibre-gl/dist/maplibre-gl.css";

/**
 * The map's pin icon loaded as an image, so it can be passed to MapLibre's
 * `addImage` (which wants a bitmap, not a URL).
 */
function pinImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * The interactive map of Haven events. The haven/* site builds this with
 * MapLibre directly; here the same stack (maplibre-gl + pmtiles + Protomaps
 * basemap) runs client-side, with the worker served from `public/`.
 */
export default function HavenMap({
  cities,
  pinImageUrl,
  height = "min(70vh, 640px)",
}: {
  cities: City[];
  pinImageUrl?: string;
  height?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let disposed = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let map: any = null;

    Promise.all([
      import("maplibre-gl"),
      import("@protomaps/basemaps"),
      import("pmtiles"),
    ])
      .then(([maplibregl, basemaps, pmtiles]) => {
        if (disposed) return;

        const { Map: MaplibreMap, NavigationControl, Popup, addProtocol } =
          maplibregl;
        const { layers, namedFlavor } = basemaps;
        const protocol = new pmtiles.Protocol();
        addProtocol("pmtiles", protocol.tile);

        map = new MaplibreMap({
          container,
          style: {
            version: 8,
            glyphs: "https://protomaps.github.io/basemaps-assets/fonts/{fontstack}/{range}.pbf",
            sprite: "https://protomaps.github.io/basemaps-assets/sprites/v4/light",
            sources: {
              protomaps: {
                type: "vector",
                url: "pmtiles://https://haven.hackclub-assets.com/planet_z7.pmtiles",
                attribution:
                  '<a href="https://protomaps.com">Protomaps</a> © <a href="https://openstreetmap.org">OpenStreetMap</a>',
              },
            },
            layers: layers("protomaps", namedFlavor("light"), { lang: "en" }),
          },
          center: [10, 25],
          zoom: 1.4,
          // The archive stops at z6; past z7 MapLibre upscales and the basemap blurs.
          maxZoom: 7,
          minZoom: 1,
          // Stops the world repeating sideways, which would strand pins on
          // copies of the earth that fitBounds never visits.
          renderWorldCopies: false,
          attributionControl: { compact: true },
        });

        map.addControl(new NavigationControl({ showCompass: false }), "top-right");

        const toFeatureCollection = {
          type: "FeatureCollection",
          features: cities.map((city) => ({
            type: "Feature",
            id: city.id,
            geometry: { type: "Point", coordinates: [city.lng, city.lat] },
            properties: {
              id: city.id,
              name: city.name,
              organizer: city.organizer ?? "",
              href: city.href,
            },
          })),
        };

        const bounds = new maplibregl.LngLatBounds();
        for (const city of cities) bounds.extend([city.lng, city.lat]);

        map.on("load", async () => {
          if (disposed) return;
          const PIN_IMAGE_ID = "haven-pin";
          if (pinImageUrl) {
            try {
              map.addImage(PIN_IMAGE_ID, await pinImage(pinImageUrl), {
                pixelRatio: 2,
              });
            } catch {
              // Fall through: the symbol layer degrades to its text label.
            }
          }

          map.addSource("cities", {
            type: "geojson",
            data: toFeatureCollection,
            cluster: false,
            clusterRadius: 24,
            clusterMaxZoom: 6,
          });

          const accent = "#FC8616";
          map.addLayer({
            id: "clusters",
            type: "circle",
            source: "cities",
            filter: ["has", "point_count"],
            paint: {
              "circle-color": accent,
              "circle-opacity": 0.92,
              "circle-radius": [
                "step",
                ["get", "point_count"],
                17,
                10,
                22,
                30,
                28,
              ],
              "circle-stroke-width": 2,
              "circle-stroke-color": "#fff",
            },
          });

          map.addLayer({
            id: "cluster-count",
            type: "symbol",
            source: "cities",
            filter: ["has", "point_count"],
            layout: {
              "text-field": ["get", "point_count_abbreviated"],
              "text-font": ["Noto Sans Medium"],
              "text-size": 13,
            },
            paint: { "text-color": "#fff" },
          });

          map.addLayer({
            id: "pins",
            type: "symbol",
            source: "cities",
            filter: ["!", ["has", "point_count"]],
            layout: {
              "icon-image": PIN_IMAGE_ID,
              "icon-size": 0.8,
              "icon-anchor": "bottom",
              "icon-allow-overlap": true,
              "text-field": ["get", "name"],
              "text-font": ["Noto Sans Regular"],
              "text-size": 11,
              "text-offset": [0, 0.4],
              "text-anchor": "top",
              "text-optional": true,
            },
            paint: {
              "text-color": "#33333d",
              "text-halo-color": "#fff",
              "text-halo-width": 1.5,
            },
          });

          if (!bounds.isEmpty()) {
            map.fitBounds(bounds, { padding: 56, maxZoom: 4, animate: false });
          }
        });

        // Only gestures carry an `originalEvent`; our own camera moves don't.
        const popup = new Popup({
          closeButton: true,
          closeOnClick: true,
          offset: 30,
          maxWidth: "260px",
        });

        const escapeHtml = (value: string) =>
          value
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");

        map.on("click", "pins", (e: unknown) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const feature = (e as any).features?.[0];
          if (!feature) return;
          const [lng, lat] = feature.geometry.coordinates;
          const props = feature.properties as Record<string, string>;
          const meta = props.organizer
            ? `<p>${escapeHtml(props.organizer)}</p>`
            : "";
          popup
            .setLngLat([lng, lat])
            .setHTML(
              `<div class="haven-popup"><h3>${escapeHtml(props.name)}</h3>${meta}<a href="${escapeHtml(props.href)}">See this event</a></div>`,
            )
            .addTo(map);
        });

        map.on("error", () => setFailed(true));
      })
      .catch((error) => {
        console.error("[haven-map]", error);
        setFailed(true);
      });

    return () => {
      disposed = true;
      if (map) map.remove();
    };
  }, [cities, pinImageUrl]);

  return (
    <div
      className="haven-map"
      style={{ ["--haven-map-height" as string]: height }}
    >
      <div
        ref={containerRef}
        className="haven-map__canvas"
        role="application"
        aria-label="Map of Haven events worldwide"
      />

      {failed && (
        <p className="haven-map__fallback">
          The map didn&apos;t load :( Please try again later!
        </p>
      )}

      {/* Pins live on a canvas, so they are invisible to screen readers and
           crawlers. This list is the real, navigable copy of the same data. */}
      <ul className="haven-map__cities">
        {cities.map((city) => (
          <li key={city.id}>
            <a href={city.href}>{city.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
