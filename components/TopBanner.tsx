/**
 * Announcement banner at the top of the page: the format-and-date change.
 *
 * The bar itself is opaque from the very first paint (no entrance transform
 * on it — otherwise the page's green body background would show through the
 * reserved slot until the banner drops in). Only the message inside slides
 * down, and that is pure CSS (`animation-fill-mode: both`), so it also works
 * before hydration and without JavaScript.
 */
export default function TopBanner() {
  return (
    <div className="banner-strip" role="status">
      <div className="banner-shine" aria-hidden="true" />
      <p className="banner-inner relative shell text-center font-display text-[clamp(0.8rem,2vw,1.15rem)] leading-snug px-4 py-2.5">
        <span className="banner-pulse" aria-hidden="true">
          !!
        </span>{" "}
        <span className="font-display tracking-[-0.02em]">
          <span className="text-haven-yellow font-bold">UWAGA:</span> format
          oraz data wydarzenia ulegają zmianie.
        </span>{" "}
        <span className="font-body text-[clamp(0.75rem,1.7vw,1rem)] opacity-95">
          Wydarzenie odbędzie się{" "}
          <strong className="text-white">21 listopada</strong> jako{" "}
          <strong className="text-white">jednodniowy event</strong>.
        </span>{" "}
        <span className="banner-pulse" aria-hidden="true">
          !!
        </span>
      </p>
    </div>
  );
}
