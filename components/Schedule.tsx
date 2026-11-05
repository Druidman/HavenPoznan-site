import { havenPoznan, type SiteImages } from "@/site/site";

export default function Schedule({ images }: { images: SiteImages }) {
  const { schedule } = havenPoznan;
  const filled = schedule.days.filter((day) => day.items.length > 0);

  return (
    <section
      id="schedule"
      className="relative z-10 bg-haven-green mt-[clamp(2.5rem,10vw,15rem)] mb-[clamp(1rem,5vw,8rem)] py-[clamp(1rem,3vw,4rem)]"
    >
      <img
        src={images.scheduleTrail}
        alt=""
        aria-hidden="true"
        className="absolute top-0 w-full object-cover translate-y-[-60%] md:-translate-y-1/2"
      />
      <img
        src={images.scheduleTrail}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 w-full object-cover scale-[-1] translate-y-[30%] md:translate-y-1/2"
      />
      <div className="absolute inset-y-0 left-0 w-[15%] overflow-hidden">
        <img
          src={images.scheduleTrailSide}
          alt=""
          aria-hidden="true"
          className="w-full object-cover translate-y-[-5%]"
        />
      </div>
      <div className="absolute inset-y-0 right-0 w-[15%] overflow-hidden">
        <img
          src={images.scheduleTrailSide}
          alt=""
          aria-hidden="true"
          className="w-full scale-[-1] object-cover translate-y-[-5%]"
        />
      </div>
      <img
        src={images.schedulePlantsSmall}
        alt=""
        aria-hidden="true"
        className="absolute z-20 w-[8%] right-0 top-0 object-cover translate-y-[-35%]"
      />
      <img
        src={images.schedulePlantsLarge}
        alt=""
        aria-hidden="true"
        className="absolute z-20 scale-x-[-1] w-[10%] left-0 top-0 object-cover translate-y-[-30%]"
      />
      <img
        src={images.schedulePlantsLarge}
        alt=""
        aria-hidden="true"
        className="absolute z-20 w-[10%] right-0 bottom-0 object-cover"
      />
      <img
        src={images.schedulePlantsSmall}
        alt=""
        aria-hidden="true"
        className="absolute z-20 scale-x-[-1] w-[8%] left-0 bottom-0 object-cover"
      />
      <img
        src={images.scheduleSheep}
        alt=""
        aria-hidden="true"
        className="absolute z-0 h-[50%] max-h-200 left-[clamp(0rem,3vw,4rem)] bottom-30 object-cover md:left-[clamp(1rem,5vw,14rem)]"
      />
      <img
        src={images.scheduleDaven}
        alt=""
        aria-hidden="true"
        className="absolute z-0 w-[8%] right-3 top-18 object-cover md:right-[clamp(1rem,3vw,4rem)]"
      />
      <div className="relative w-[70%] z-20 shell bg-haven-brown-dark my-2 mb-[clamp(1.5rem,6vw,5rem)] py-6 rounded-[clamp(1rem,2vw,2rem)] sm:my-8 sm:mb-[clamp(2rem,8vw,5rem)] sm:py-8 sm:rounded-[3rem] md:my-16 md:py-16 md:rounded-[5rem]">
        <h2 className="relative text-center z-15 font-display text-[clamp(1.75rem,5vw,4rem)] leading-[clamp(1.5rem,1.5vw,1.75rem)] tracking-[-0.05em] text-white">
          {schedule.heading}
        </h2>
        <img
          src={images.schedulePlantLeft}
          alt=""
          aria-hidden="true"
          className="absolute z-10 top-0 -translate-y-[45%] left-[clamp(1.8rem,8vw,6rem)] w-[20%] object-cover block sm:w-[26%] sm:left-[clamp(2rem,6vw,4rem)] md:hidden"
        />
        <img
          src={images.schedulePlantRight}
          alt=""
          aria-hidden="true"
          className="absolute z-10 top-0 -translate-y-[45%] right-[clamp(2.3rem,9vw,6rem)] w-[26%] object-cover block sm:w-[32%] sm:right-[clamp(3rem,8vw,6rem)] md:hidden"
        />
        {filled.length > 0 ? (
          <div
            className={[
              "mx-auto px-[clamp(1rem,6vw,8rem)] mt-[clamp(1rem,3.5vw,3rem)] grid grid-cols-1 gap-[clamp(0.5rem,2vw,1.75rem)] md:px-[clamp(2rem,6vw,8rem)]",
              // A lone day would otherwise sit in a half-width column with
              // nothing beside it, so it only splits into two once there is a
              // second day.
              filled.length > 1 && "2xl:grid-cols-2",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {filled.map((day, dayIndex) => (
              <section
                key={dayIndex}
                className="@container panel px-[clamp(0.2rem,2.4vw,2.25rem)] py-[clamp(1rem,2.2vw,2rem)] bg-haven-brown-light"
              >
                <h3 className="font-display text-heading text-haven-butter">
                  {day.day}
                </h3>

                {/* The time column is as wide as the day's longest time, so
                     ranges never run into the titles. A narrow panel has no
                     room for two columns, so the time sits above the title. */}
                <ol className="mt-[clamp(0.75rem,1.6vw,1.25rem)] grid gap-x-[clamp(0.5rem,2vw,2.25rem)] gap-y-[clamp(0.5rem,1vw,1.1rem)] @lg:grid-cols-[auto_1fr]">
                  {day.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="grid items-baseline @lg:col-span-2 @lg:grid-cols-subgrid"
                    >
                      <span className="font-display text-subheading text-white @lg:min-w-[clamp(5rem,10vw,8rem)] @lg:whitespace-nowrap">
                        {item.time}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-display text-subheading leading-none text-white">
                          {item.title}
                        </span>
                        {item.body && (
                          <span className="mt-2 block font-body text-copy text-white">
                            {item.body}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        ) : (
          <p className="panel mx-auto mt-[clamp(1.5rem,3.5vw,3rem)] max-w-[31.5rem] px-[clamp(1.25rem,2.4vw,2.25rem)] py-[clamp(1.5rem,2.6vw,2.25rem)] text-center">
            <span className="block font-display text-heading text-haven-orange-bright">
              {schedule.tbd.title}
            </span>
            <span className="mt-[clamp(0.5rem,1vw,0.75rem)] block font-body text-copy text-haven-orange-mid">
              {schedule.tbd.body}
            </span>
          </p>
        )}
      </div>
    </section>
  );
}
