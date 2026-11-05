import { cssUrl, havenPoznan, type Perk, type SiteImages } from "@/site/site";

const intro = "md:absolute md:left-[16.1%] md:top-[5.6%] md:w-[30%]";
const daven = "md:absolute md:left-[65.8%] md:top-[5.6%] md:w-[7.5%]";

// The illustration behind this section has three sign-shaped gaps in it, so
// the perks are placed by position rather than by name — a page that renames
// them still lands in the slots, and a fourth one simply stacks below.
const stage = [
  "md:absolute md:left-[4.8%] md:top-[13%] md:w-[40%]",
  "md:absolute md:left-[56%] md:top-[18%] md:w-[40%]",
  "md:absolute md:left-[20%] md:top-[35%] md:w-[40%]",
];

export default function About({ images }: { images: SiteImages }) {
  const { about } = havenPoznan;
  const perks: Perk[] = about.perks;

  return (
    <section className="relative flex flex-col gap-[clamp(2.5rem,6vw,4rem)] overflow-x-clip px-18 pb-[clamp(3rem,7vw,6rem)] pt-[max(3.5rem,14vw)] sm:px-36 md:contents">
      <div
        className={`panel bg-haven-green-deep/60 shadow-[0_0_10px_var(--color-haven-green-deep)] w-full max-w-[40rem] self-center px-[clamp(2rem,4vw,4rem)] py-[clamp(1.25rem,2.2vw,1.75rem)] text-center md:shadow-none md:self-start md:max-w-[42rem] md:bg-transparent md:p-0 md:text-left ${intro}`}
      >
        <h2 className="font-display text-heading text-white md:text-[3cqw] md:leading-[0.8]">
          {about.title}
        </h2>
        <p className="mt-[1em] font-body text-lead leading-[1.15] text-white md:text-[1.5cqw]">
          {about.body}
        </p>
      </div>

      <img
        src={images.aboutDaven}
        alt=""
        aria-hidden="true"
        width={108}
        height={108}
        className={`hidden select-none md:block ${daven}`}
      />

      {perks.map((perk, index) => (
        <div
          key={index}
          className={[
            "w-full max-w-[40rem] md:max-w-none md:p-[2.1%]",
            perk.side === "end" ? "self-end" : "self-start",
            stage[index],
          ].join(" ")}
        >
          <div className="relative w-full aspect-1972/1413">
            <img
              src={images.aboutSignSide}
              alt=""
              aria-hidden="true"
              className={[
                "pointer-events-none absolute -translate-x-3/4 -inset-[8%] z-10 h-[116%] w-[116%] object-contain -scale-x-100",
                perk.side === "end" && "scale-x-100 translate-x-5/6",
              ]
                .filter(Boolean)
                .join(" ")}
            />

            <div
              className="absolute inset-0 flex flex-col justify-center overflow-hidden bg-cover bg-no-repeat bg-center px-[clamp(1.5rem,8vw,6rem)] py-[clamp(1.25rem,2.2vw,1.75rem)] text-center md:px-[12%] md:py-[4%]"
              style={{ backgroundImage: cssUrl(images.aboutSignBack) }}
            >
              <ul className="px-2 pt-[clamp(2.5rem,8vw,7rem)] md:px-6 grid grid-cols-2 gap-[clamp(1rem,3vw,5rem)] md:pt-[15%] md:gap-[3%]">
                {perk.photos.map((photo, photoIndex) => {
                  const inner = (
                    <>
                      <img
                        src={photo.src}
                        alt={photo.alt ?? ""}
                        loading="lazy"
                        decoding="async"
                        className={[
                          "w-full rounded-[clamp(0.625rem,1vw,1rem)] object-cover transition-transform md:rounded-[1cqw]",
                          index === 0
                            ? "mt-[clamp(0.3rem,2vw,3rem)] h-[clamp(2.5rem,15vw,6rem)] md:h-[6.5cqw]"
                            : "h-[clamp(3.5rem,18vw,5rem)] md:h-[9cqw]",
                          photo.href && "group-hover:scale-[1.03]",
                          photo.position,
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      />
                      {photo.caption && (
                        <span className="mt-1.5 block font-body text-[clamp(0.3rem,1.2vw,1.2rem)] leading-[clamp(0.2rem,1vw,1.5rem)] tracking-[-0.03em] text-haven-brown-light md:mt-[3%] md:text-[1cqw]">
                          <span className="block">{photo.caption.title}</span>
                          <span className="block text-[0.8em]">
                            {photo.caption.author}
                          </span>
                        </span>
                      )}
                    </>
                  );
                  return (
                    <li key={photoIndex}>
                      {photo.href ? (
                        <a
                          href={photo.href}
                          target="_blank"
                          rel="noopener"
                          className="block group"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className="block">{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
              {perk.blurb.map((line, lineIndex) => (
                <p
                  key={lineIndex}
                  className={[
                    "font-body leading-[clamp(0.75rem,3vw,1.5rem)] text-haven-brown-dark pb-4 md:text-[1.4cqw] md:leading-[1.15]",
                    index === 0
                      ? "text-[clamp(0.45rem,2.1vw,3rem)] mt-[clamp(0.3rem,1vw,1rem)] md:mt-[3%]"
                      : "text-[clamp(0.75rem,3vw,3rem)] mt-[clamp(0.5rem,2vw,3rem)] md:mt-[3%]",
                  ].join(" ")}
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="absolute left-1/2 top-0 z-10 w-max -translate-x-[52%] translate-y-[clamp(1rem,calc(-1.61rem_+_10.43vw),2.5rem)] sm:translate-y-[clamp(2.0rem,2.0rem-0.5vw,2.2rem)] md:translate-y-[100%]">
              <h3 className="relative font-display z-10 whitespace-nowrap text-heading text-white md:text-[3.06cqw] md:leading-[0.8]">
                {perk.title}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
