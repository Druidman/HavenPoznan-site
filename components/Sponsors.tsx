import { havenPoznan, type SiteImages } from "@/site/site";

/**
 * The sponsors section, redesigned as a thank-you letter: a paper card
 * addressed to the sponsors sits in the middle of the picnic scene, and the
 * sponsor logos hang beside it like postage stamps. The illustrated edges,
 * bushes and pumpkins from the haven/* backdrop stay, framing the letter.
 */
export default function Sponsors({ images }: { images: SiteImages }) {
  const { sponsors } = havenPoznan;

  return (
    <section className="relative z-10 overflow-x-clip bg-haven-green pb-[clamp(6rem,12vw,14rem)]">
      <img
        src={images.sponsorsEdgeTop}
        alt=""
        aria-hidden="true"
        className="absolute top-0 w-full object-cover -translate-y-[80%] md:-translate-y-[60%]"
      />
      <img
        src={images.sponsorsEdgeBottom}
        alt=""
        aria-hidden="true"
        className="absolute scale-x-[-1] bottom-0 w-full object-cover translate-y-[20%] md:translate-y-[40%]"
      />

      {/* Scene dressing: a bush on each side, pumpkins on the left. */}
      <img
        src={images.sponsorsBushSmall}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-[clamp(4rem,8vw,7rem)] left-[clamp(0.5rem,3vw,2rem)] z-10 w-[clamp(4rem,10vw,7rem)] select-none"
      />
      <img
        src={images.sponsorsBushSmall}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-[clamp(5rem,11vw,9rem)] right-[clamp(0.5rem,3vw,2rem)] z-10 w-[clamp(4rem,9vw,6rem)] -scale-x-100 select-none"
      />
      <img
        src={images.sponsorsPumpkins}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-[clamp(7rem,16vw,14rem)] -left-[clamp(2rem,8vw,6rem)] z-10 w-[clamp(7rem,16vw,13rem)] select-none"
      />
      <img
        src={images.sponsorsGrassSmall}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[clamp(3rem,8vw,8rem)] right-[clamp(1rem,6vw,5rem)] z-10 w-[clamp(5rem,12vw,10rem)] select-none"
      />

      <div className="shell relative z-20 pt-[clamp(4rem,9vw,8rem)]">
        <h2 className="text-center font-display text-[clamp(1.75rem,4vw,3rem)] leading-[0.9] text-white [text-shadow:0_0.15rem_0_rgb(0_0_0/0.15)]">
          {sponsors.heading}
        </h2>

        <div className="mx-auto mt-[clamp(2rem,5vw,4rem)] flex w-[min(92%,52rem)] flex-col items-center gap-[clamp(1.5rem,4vw,3rem)] md:flex-row md:items-stretch md:gap-[clamp(2rem,4vw,3.5rem)]">
          {/* The thank-you letter: a sheet of paper, slightly turned, with a
              wax seal. The ruled paper lines keep the handwriting honest. */}
          <article className="sponsor-letter relative flex-1 rotate-[-1.5deg] rounded-[0.75rem] bg-[#fff9ec] p-[clamp(1.25rem,3vw,2.5rem)] shadow-[0_0.5rem_1.5rem_rgb(0_0_0/0.18)] md:rotate-[-2deg]">
            <span
              aria-hidden="true"
              className="absolute -top-[clamp(0.6rem,1.5vw,1rem)] -right-[clamp(0.6rem,1.5vw,1rem)] flex h-[clamp(2rem,4vw,3rem)] w-[clamp(2rem,4vw,3rem)] items-center justify-center rounded-full bg-haven-orange-deep font-display text-[clamp(0.9rem,2vw,1.4rem)] text-white shadow-[0_0.15rem_0.4rem_rgb(0_0_0/0.25)]"
            >
              ♥
            </span>
            <h3 className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] leading-none text-haven-orange-deep">
              {sponsors.thanks.title}
            </h3>
            {sponsors.thanks.body.map((paragraph, i) => (
              <p
                key={i}
                className={
                  i === sponsors.thanks.body.length - 1
                    ? "mt-[1em] font-display text-[clamp(1rem,2vw,1.35rem)] text-haven-brown-dark"
                    : "mt-[1.25em] font-body text-[clamp(1rem,2vw,1.35rem)] leading-[1.5] text-haven-brown-dark"
                }
              >
                {paragraph}
              </p>
            ))}
          </article>

          {/* The sponsors themselves: stamps pinned next to the letter. */}
          <ul className="flex flex-1 flex-wrap items-center justify-center gap-[clamp(1rem,2.5vw,2rem)] md:max-w-[20rem] md:flex-col">
            {sponsors.items.map((sponsor, i) => (
              <li key={sponsor.href}>
                <a
                  href={sponsor.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sponsor-stamp group flex w-[clamp(10rem,22vw,13rem)] flex-col items-center gap-2 rounded-[0.75rem] bg-[#617b52] p-[clamp(0.75rem,1.75vw,1.25rem)] shadow-[0_0.3rem_0.8rem_rgb(0_0_0/0.35)] transition-transform duration-200 hover:-translate-y-1 hover:rotate-0 md:w-[13rem]"
                  style={{
                    ["--tilt" as string]: `${(i % 2 === 0 ? -1 : 1) * (1.5 + i)}deg`,
                  }}
                >
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    loading="lazy"
                    className="max-h-[clamp(2.5rem,5vw,4rem)] w-auto max-w-full object-contain"
                  />
                  <span className="font-body text-[clamp(0.8rem,1.6vw,1rem)] leading-tight text-haven-orange-deep underline decoration-from-font underline-offset-4 opacity-0 transition-opacity group-hover:opacity-100">
                    {sponsor.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
