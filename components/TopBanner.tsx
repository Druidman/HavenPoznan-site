/**
 * Announcement banner at the top of the page: the format-and-date change.
 *
 * Rendered inside the fixed top-chrome stack (SiteHeader) so it never
 * overlaps the navigation or the page content: the bar is opaque from the
 * first paint and always reserves its own row. The message slides in with
 * pure CSS (`both` keeps it hidden until its delay elapses), so it works
 * pre-hydration and without JavaScript.
 */
export default function TopBanner() {
  return (
    <div className="banner-strip" role="status">
      <div className="banner-shine" aria-hidden="true" />
      <p className="banner-inner relative shell text-center font-display text-[clamp(0.8rem,1.8vw,1.05rem)] leading-snug px-4 py-2">
        <span className="banner-pulse" aria-hidden="true">
          !!
        </span>{" "}
        <span className="font-display tracking-[-0.01em]">
          <span className="text-haven-yellow font-bold">UWAGA:</span> format
          oraz data wydarzenia ulegają zmianie.
        </span>{" "}
        <span className="font-body text-[clamp(0.75rem,1.6vw,0.95rem)] opacity-95">
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
