"use client";

import { useScrolled } from "./SignupForm";
import { havenPoznan, type SiteImages } from "@/site/site";

/** Nav labels only; where each link goes is fixed. */
const NAV_LINKS = [
  { key: "signup", href: "#top" },
  { key: "about", href: "#about" },
  { key: "faq", href: "#faq" },
] as const;

type NavKey = (typeof NAV_LINKS)[number]["key"];

export default function SiteHeader({ images }: { images: SiteImages }) {
  const scrolled = useScrolled(10);
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

      <div
        data-nav-bar
        data-scrolled={scrolled ? "" : undefined}
        className="fixed inset-x-0 top-0 justify-end z-40 flex pb-3 pt-[clamp(0.5rem,1.4vw,1.5rem)] px-[clamp(1rem,4vw,4rem)] pointer-events-none transition-[background-color,backdrop-filter,box-shadow] duration-200"
      >
        <nav className="pointer-events-auto" aria-label="Primary">
          <ul className="flex items-center gap-[clamp(1.125rem,2.2vw,2.75rem)]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-block py-1 font-display text-[clamp(1rem,3.5vw,8rem)] leading-none tracking-[-0.03em] text-haven-yellow transition-colors hover:text-white"
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
