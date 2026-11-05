import type { CSSProperties } from "react";
import { cssUrl, havenPoznan, type SiteImages } from "@/site/site";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pitch from "@/components/Pitch";
import Steps from "@/components/Steps";
import Schedule from "@/components/Schedule";
import PastEvents from "@/components/PastEvents";
import Sponsors from "@/components/Sponsors";
import Faq from "@/components/Faq";
import SiteFooter from "@/components/SiteFooter";

const images: SiteImages = havenPoznan.images;

/** Convert a `--var: value; --var: value` declaration string into a style object. */
function cssStyle(declarations: string): CSSProperties {
  const style: Record<string, string> = {};
  for (const decl of declarations.split(";")) {
    const trimmed = decl.trim();
    if (!trimmed) continue;
    const sep = trimmed.indexOf(":");
    if (sep === -1) continue;
    style[trimmed.slice(0, sep).trim()] = trimmed.slice(sep + 1).trim();
  }
  return style as CSSProperties;
}

export default function Page() {
  // The two illustrated backdrops are CSS backgrounds, so they are swapped
  // through the custom properties the `.stage-*` classes read.
  const middleStage = `--stage-bg: ${cssUrl(images.stageMiddle)}; --stage-bg-mobile: ${cssUrl(images.stageMiddleMobile)}`;
  const picnicStage = `--stage-bg: ${cssUrl(images.stagePicnic)}; --stage-bg-mobile: ${cssUrl(images.stagePicnicMobile)}`;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-2xl focus:bg-white focus:px-4 focus:py-2 focus:font-display focus:text-xl focus:text-haven-orange-deep"
      >
        Skip to content
      </a>

      <SiteHeader images={images} />

      <main id="main" className="overflow-x-clip">
        <div className="relative">
          <Hero images={images} />
        </div>

        <div
          id="about"
          className="stage stage-middle z-10"
          style={cssStyle(middleStage)}
        >
          <About images={images} />
          <Pitch images={images} />
        </div>

        <div className="z-20">
          <Steps images={images} />
        </div>

        <Schedule images={images} />

        <div className="stage stage-picnic" style={cssStyle(picnicStage)}>
          <PastEvents />
        </div>

        <Sponsors images={images} />

        <Faq images={images} />
      </main>

      <SiteFooter images={images} />
    </>
  );
}
