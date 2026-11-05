"use client";

import TopBanner from "./TopBanner";
import { havenPoznan, type SiteImages } from "@/site/site";

/** Nav labels only; where each link goes is fixed. */
const NAV_LINKS = [
  { key: "signup", href: "#top" },
  { key: "about", href: "#about" },
  { key: "faq", href: "#faq" },
] as const;

type NavKey = (typeof NAV_LINKS)[number]["key"];

/**
 * The top chrome as one stack: the announcement banner rides along with the
 * fixed navbar inside the same pinned container, so the banner never overlaps
 * the nav or any page text — the whole stack scrolls together, in document
 * flow, and everything underneath is offset by the stack's real height.
 */
export default function SiteHeader({ images }: { images: SiteImages }) {
  const nav = havenPoznan.nav as Record<NavKey, string>;

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-30">
        <img
          src={images.navBanner}
          alt=""
          aria-hidden="true"
          width={646}
          height={260}
          className="pointer-events-none fixed right-0 top-0 -z-10 w-[min(41rem,max(46%,calc(13rem_+_8vw)))] max-w-none select-none md:w-[45%] md:right-[clamp(-3rem,-2vw,0rem)] md:top-[clamp(-3rem,-2vw,0rem)]"
        />
      </header>

      {/* The top chrome stack: banner first, navbar right below it. */}
      <div
        data-nav-bar
        className="fixed inset-x-0 top-0 z-40 flex flex-col items-center bg-haven-orange-deep/95 shadow-[0_0.15rem_0.75rem_rgb(0_0_0/0.18)] backdrop-blur-sm"
      >
        <TopBanner />

        <nav
          aria-label="Primary"
          className="w-full px-[clamp(1rem,4vw,4rem)] pb-[clamp(0.4rem,1vw,0.75rem)] pt-[clamp(0.25rem,0.6vw,0.5rem)]"
        >
          <ul className="flex items-center justify-center gap-[clamp(1.5rem,4vw,3rem)]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-block py-1 font-display text-[clamp(1rem,2.2vw,1.5rem)] leading-none tracking-[-0.02em] text-white transition-colors hover:text-haven-yellow"
                >
                  {nav[link.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
