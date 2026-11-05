import { footerLinks, havenPoznan, type SiteImages } from "@/site/site";

export default function SiteFooter({ images }: { images: SiteImages }) {
  const { footer } = havenPoznan;

  return (
    <footer className="relative pb-[clamp(2.5rem,5vw,4rem)] pt-[clamp(2rem,6vw,3rem)] text-white px-[clamp(1rem,4vw,5rem)] md:px-[clamp(3rem,8vw,8rem)]">
      <img
        src={images.footerBushes}
        alt=""
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 w-full object-cover -z-10"
      />

      <div className="relative shell z-20 grid grid-cols-1 gap-[clamp(2rem,5vw,4rem)] md:grid-cols-[minmax(0,22rem)_1fr]">
        <div>
          <img
            src={images.logo}
            alt="Hack Club Haven"
            width={778}
            height={445}
            className="w-[clamp(5rem,22vw,12rem)]"
          />

          <nav aria-label="Hack Club" className="mt-[clamp(1.5rem,3vw,2.5rem)]">
            <ul className="flex flex-wrap gap-x-6 gap-y-1 md:flex-col">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-display text-[clamp(0.75rem,3vw,1.5em)] leading-[1.1] tracking-[-0.05em] transition-colors hover:text-haven-yellow"
                  >
                    {footer.links[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4 font-body text-[clamp(0.5rem,1.65vw,1rem)] leading-[1.4] md:pt-[clamp(1rem,3vw,2rem)]">
          {footer.body.map((paragraph, i) => (
            <p key={i}>
              {paragraph.map((seg, segIndex) =>
                seg.href ? (
                  <a
                    key={segIndex}
                    className="underline decoration-from-font underline-offset-2 hover:text-haven-yellow"
                    href={seg.href}
                    target={
                      seg.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={seg.href.startsWith("http") ? "noopener" : undefined}
                  >
                    {seg.text}
                  </a>
                ) : (
                  <span key={segIndex}>{seg.text}</span>
                ),
              )}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}
