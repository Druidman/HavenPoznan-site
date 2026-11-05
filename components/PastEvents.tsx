import { havenPoznan } from "@/site/site";

const stage = [
  "ml-[clamp(0rem,28vw-6rem,8rem)] md:absolute md:left-[9.2%] md:top-[31.2%] md:w-[25.8%]",
  "md:absolute md:left-[39.2%] md:top-[28.6%] md:w-[25.8%]",
  "mr-[clamp(0rem,28vw-6rem,8rem)] md:absolute md:left-[68.6%] md:top-[26.1%] md:w-[25.8%]",
];

export default function PastEvents() {
  const { pastEvents } = havenPoznan;

  return (
    <section className="relative flex flex-col gap-[clamp(1rem,4vw,1.5rem)] px-5 pb-[clamp(8rem,12vw,10rem)] pt-[clamp(6rem,8vw,8.5rem)] sm:pb-0 md:contents">
      <h2 className="mx-auto max-w-[42ch] -rotate-3 text-center font-display text-subheading text-white pt-[clamp(6rem,40vw,20rem)] md:pt-0 md:absolute md:left-[15.2%] md:top-[20%] md:w-[71.1%] md:max-w-none md:-rotate-4 md:text-[2.43cqw] md:leading-[0.9]">
        {pastEvents.heading.map((line, lineIndex) => (
          <span key={lineIndex} className="block">
            {line}
          </span>
        ))}
      </h2>

      {pastEvents.items.map((item, i) => (
        <article
          key={i}
          className={[
            "polaroid mx-auto flex w-[85%] max-w-[24rem] px-8 mt-12 md:mt-0 flex-col items-center gap-4 text-center md:px-[clamp(1.25rem,2vw,2rem)] md:mx-0 md:max-w-none",
            stage[i],
          ].join(" ")}
        >
          <h3 className="font-display text-[clamp(2rem,4vw,4rem)] pt-[clamp(1rem,4vw,1.5rem)] md:text-subheading text-white md:pt-4 md:text-[2.78cqw] md:leading-none">
            {item.title}
          </h3>

          <a
            href={item.href}
            target="_blank"
            rel="noopener"
            className="relative block w-full max-w-[clamp(20rem,100%,25rem)] overflow-hidden rounded-[1.25rem] border-2 border-white md:max-w-full md:rounded-[1.4cqw]"
          >
            <span className="sr-only">Watch the {item.title} video</span>
            <img
              src={item.image}
              alt={item.alt ?? ""}
              loading="lazy"
              decoding="async"
              className={`aspect-[3/2] w-full object-cover ${item.position ?? ""}`}
            />
            <img
              src={item.play}
              alt=""
              aria-hidden="true"
              width={72}
              height={65}
              className="pointer-events-none absolute top-1/2 left-1/2 w-[19%] -translate-x-1/2 -translate-y-1/2 -rotate-[40deg] select-none drop-shadow-[0_2px_6px_rgb(0_0_0/0.35)]"
            />
          </a>

          <p className="font-body text-subheading pb-[clamp(1rem,4vw,1.5rem)] md:py-0 text-white md:pb-6 md:text-[1.55cqw] md:leading-[1.05]">
            {item.caption}
          </p>
        </article>
      ))}

      <h2 className="pointer-events-none mx-auto max-w-[42ch] -rotate-3 text-center font-display text-subheading text-white pt-[clamp(2rem,4vw,8rem)] md:pt-0 md:absolute md:left-[15.2%] md:bottom-[clamp(10%,20vw,18%)] md:w-[71.1%] md:px-[clamp(1.25rem,6vw,6rem)] md:max-w-none md:-rotate-4 md:text-[1.5cqw] md:leading-[0.9]">
        {pastEvents.safety.map((seg, i) =>
          seg.href ? (
            <a
              key={i}
              className="text-haven-butter underline"
              href={seg.href}
              target={seg.href.startsWith("http") ? "_blank" : undefined}
              rel={seg.href.startsWith("http") ? "noopener" : undefined}
            >
              {seg.text}
            </a>
          ) : (
            <span key={i}>{seg.text}</span>
          ),
        )}
      </h2>
    </section>
  );
}
