"use client";

import { useEffect, useRef, useState } from "react";
import SignupForm, { useScrolled } from "./SignupForm";
import HavenMap from "./HavenMap";
import { cssUrl, havenPoznan, city, SIGNUP_URL, SIGNUP_EVENT_ID, SIGNUP_LANG, type SiteImages } from "@/site/site";

/**
 * The hero's signup URL base: the shared Haven attendee form with the event
 * and language — the same query params the haven/* site attaches server-side.
 * A `?r=` referral is added by SignupForm after hydration.
 */
function baseSignupUrl(): string {
  const url = new URL(SIGNUP_URL);
  url.searchParams.set("event", SIGNUP_EVENT_ID);
  url.searchParams.set("lang", SIGNUP_LANG);
  return url.toString();
}

export default function Hero({ images }: { images: SiteImages }) {
  const { hero, tagline, title } = havenPoznan;
  const signupUrl = baseSignupUrl();
  const scrolled = useScrolled(10);

  // A tap opens the full map; a drag pans the small one. Distinguished by how
  // far the pointer travelled between down and up.
  const [mapExpanded, setMapExpanded] = useState(false);
  const mapPointerDown = useRef<{ x: number; y: number } | null>(null);

  // The map's caption and arrow sit above SiteHeader's fixed clouds while the
  // page is at the top, then drop back under them once it scrolls.
  const mapLabelLayer = scrolled ? "z-20" : "z-35";

  useEffect(() => {
    if (!mapExpanded) return;

    document.body.style.overflow = "hidden";
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMapExpanded(false);
    };
    window.addEventListener("keydown", onKeydown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeydown);
    };
  }, [mapExpanded]);

  return (
    <section
      id="top"
      style={{ backgroundImage: cssUrl(images.heroBackground) }}
      className="rule-frame relative flex min-h-svh flex-col bg-haven-green bg-cover bg-top bg-no-repeat px-4 pb-[36vw] sm:pb-[clamp(3rem,10vw,min(8rem,8svh))] [--frame-gap:clamp(0.75rem,1.1vw,1rem)] [--frame-offset:clamp(0.5rem,1.1vw,1rem)] [--frame-weight:clamp(3px,0.35vw,5px)]"
    >
      <div className="block sm:contents">
        <div className="pointer-events-none relative z-25 flex flex-1 items-center justify-center mt-[clamp(5rem,14vw,20rem)] sm:mt-[clamp(1rem,2vw,15rem)]">
          <div className="mx-auto flex w-full flex-col items-center px-[clamp(1rem,4vw,8rem)] text-center sm:pl-[clamp(1rem,4vw,8rem)] sm:items-start sm:pr-[clamp(20rem,45vw,60rem)]">
            <div className="grid grid-cols-2 max-w-[1700px]">
              <img
                src={images.logo}
                alt="Hack Club Haven"
                width={778}
                height={445}
                className="w-[120%] max-w-none"
              />
              <h1 className="m-0 font-display text-[clamp(1rem,8vw,10rem)] leading-[clamp(1rem,6vw,8rem)] text-white translate-y-[75%] translate-x-[-10%] sm:text-hero sm:leading-[clamp(1rem,4vw,8rem)]">
                {title.join(" ")}
              </h1>
            </div>

            <p className="glow-orange mt-[clamp(1rem,10vw,10rem)] text-[clamp(1rem,4vw,8rem)] leading-[clamp(1rem,4.75vw,5rem)] font-body text-center text-white sm:ml-[clamp(1rem,3vw,8rem)] sm:mt-[clamp(1rem,5vw,10rem)] sm:text-[clamp(1.25rem,2vw,4rem)] sm:leading-[clamp(1.5rem,2.75vw,5rem)] sm:text-start">
              {tagline.map((part, i) => (
                <span
                  key={i}
                  className={i === 0 ? "whitespace-nowrap" : "block"}
                >
                  {part}
                </span>
              ))}
            </p>

            {/* The contact line: on a city page that has an inbox, the words
                 before the address and the address itself. */}
            {hero.contactEmail && (
              <a
                href={`mailto:${hero.contactEmail}`}
                className="pointer-events-auto glow-orange mt-[clamp(0.75rem,1.5vw,1.25rem)] font-body text-[clamp(0.9rem,3.5vw,1.25rem)] text-white underline decoration-from-font underline-offset-4 transition-opacity hover:opacity-80 sm:ml-[clamp(1rem,3vw,8rem)] sm:text-start sm:text-[clamp(0.9rem,1.6vw,1.75rem)]"
              >
                {hero.contact} {hero.contactEmail}
              </a>
            )}

            <SignupForm
              signup={hero.signup}
              action={signupUrl}
              className="pointer-events-auto mt-[clamp(1rem,1vw,5rem)] w-[min(90%,28rem)] sm:ml-[clamp(1rem,3vw,8rem)] sm:w-[clamp(15rem,35vw,60rem)]"
            />
          </div>
        </div>

        <div className="absolute z-10 shell left-1/2 -translate-x-1/2 bottom-[clamp(3rem,3vw,10rem)] justify-center">
          <a href="#about" className="flex-col items-center gap-1">
            <span className="font-body text-[clamp(0.5rem,4vw,3rem)] text-white/60 md:text-[clamp(0.5rem,2vw,3rem)]">
              {hero.scrollLabel}
            </span>
            <img
              src={images.scrollArrow}
              alt=""
              aria-hidden="true"
              width={207}
              height={69}
              className="w-[clamp(2rem,16vw,12rem)] -scale-y-100 md:w-[clamp(2rem,8vw,12rem)]"
            />
          </a>
        </div>

        <div
          className="panel group relative mx-auto mt-[clamp(2rem,8vw,8rem)] w-[min(85%,28rem)] h-[clamp(20rem,60vw,40rem)] sm:absolute sm:right-10 sm:top-1/2 sm:mx-[clamp(1.5rem,4vw,8rem)] sm:[--map-h:clamp(10rem,25vw,50rem)] sm:mt-[calc(clamp(2rem,4vw,8rem)_-_var(--map-h)/2)] sm:w-[clamp(15rem,35vw,52rem)] sm:h-[var(--map-h)] lg:w-[clamp(15rem,35vw,80rem)]"
          role="button"
          tabIndex={0}
          aria-label="Open full map of Haven events"
          onPointerDown={(e) => {
            mapPointerDown.current = { x: e.clientX, y: e.clientY };
          }}
          onPointerUp={(e) => {
            const down = mapPointerDown.current;
            mapPointerDown.current = null;
            if (!down) return;
            const moved = Math.hypot(
              e.clientX - down.x,
              e.clientY - down.y,
            );
            if (moved < 6) setMapExpanded(true);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setMapExpanded(true);
            }
          }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-[inherit] transition-transform group-hover:scale-[1.04] group-active:scale-100">
            <HavenMap
              cities={[city]}
              height="100%"
              pinImageUrl={images.mapPin}
            />
          </div>

          <img
            src={images.heroArrow}
            alt=""
            aria-hidden="true"
            className={`absolute rotate-24 right-[clamp(1rem,4vw,8rem)] top-[clamp(0rem,0vw,10rem)] ${mapLabelLayer} w-[clamp(2rem,12vw,6rem)] sm:right-[clamp(1rem,12vw,30rem)] sm:top-[clamp(-10rem,-3vw,0rem)] sm:w-[clamp(2rem,8vw,20rem)] hidden sm:block`}
          />
          <img
            src={images.heroArrowMobile}
            alt=""
            aria-hidden="true"
            className={`absolute rotate-24 right-[clamp(1rem,6vw,10rem)] top-[clamp(-10rem,-2vw,0rem)] ${mapLabelLayer} w-[clamp(2rem,12vw,6rem)] block sm:hidden`}
          />
          <p
            className={`relative ${mapLabelLayer} text-white text-center -translate-y-[120%] text-[clamp(0.875rem,4vw,10rem)] sm:text-haven-butter sm:-rotate-8 sm:text-[clamp(1rem,3vw,10rem)] sm:-translate-y-[120%] sm:-translate-x-[40%]`}
          >
            {hero.mapLabel}
          </p>
        </div>

        <img
          src={images.hedgehog}
          alt=""
          aria-hidden="true"
          width={422}
          height={308}
          className="pointer-events-none absolute object-contain bottom-0 right-[6%] z-20 w-[clamp(8rem,40vw,14rem)] scale-x-[-1] aspect-422/308 select-none sm:right-[9.6%] sm:max-h-[30svh] sm:w-[15%] sm:max-w-[21rem]"
        />

        <img
          src={images.heroForeground}
          alt=""
          aria-hidden="true"
          width={1414}
          height={501}
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 w-full max-w-none translate-y-[55%] select-none"
        />
      </div>

      {mapExpanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label="Map of Haven events"
          tabIndex={-1}
          onClick={(e) => {
            if (e.target === e.currentTarget) setMapExpanded(false);
          }}
        >
          <button
            type="button"
            onClick={() => setMapExpanded(false)}
            aria-label="Close map"
            className="fixed left-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-haven-orange-deep shadow-lg transition-transform hover:scale-110 active:scale-100"
          >
            <svg
              viewBox="0 0 24 24"
              width={20}
              height={20}
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <div className="panel relative h-[min(90vh,56rem)] w-[min(94vw,80rem)] overflow-hidden">
            <HavenMap
              cities={[city]}
              height="100%"
              pinImageUrl={images.mapPin}
            />
          </div>
        </div>
      )}
    </section>
  );
}
