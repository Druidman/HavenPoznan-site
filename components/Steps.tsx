import { havenPoznan, type SiteImages } from "@/site/site";

export default function Steps({ images }: { images: SiteImages }) {
  const { steps } = havenPoznan;

  return (
    <section className="relative z-20 pt-[clamp(2.5rem,6vw,5rem)] pb-[clamp(1.5rem,2vw,2rem)] bg-haven-green md:pb-0 md:aspect-[1440/1000] md:pt-0">
      <div className="relative z-10 flex justify-center">
        <img
          src={images.stepsFlowerBorder}
          alt=""
          aria-hidden="true"
          width={3586}
          height={819}
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[80%] object-cover md:hidden"
        />
      </div>
      <div className="absolute inset-0">
        <img
          src={images.stepsFlowersTopRight}
          alt=""
          aria-hidden="true"
          width={872}
          height={1372}
          className="pointer-events-none absolute right-0 top-0 z-10 w-[clamp(6rem,26vw,20rem)] object-contain"
        />
        <img
          src={images.stepsFlowersTopLeft}
          alt=""
          aria-hidden="true"
          width={864}
          height={1945}
          className="pointer-events-none absolute left-0 top-0 z-10 w-[clamp(6rem,26vw,20rem)] object-contain"
        />
        <img
          src={images.stepsFlowersBottomRight}
          alt=""
          aria-hidden="true"
          width={660}
          height={967}
          className="pointer-events-none absolute right-0 bottom-0 z-10 w-[clamp(6rem,26vw,20rem)] object-contain"
        />
        <img
          src={images.stepsFlowersBottomLeft}
          alt=""
          aria-hidden="true"
          width={642}
          height={660}
          className="pointer-events-none absolute left-0 bottom-0 z-10 w-[clamp(6rem,26vw,20rem)] object-contain"
        />
      </div>
      <div className="relative shell mt-16">
        <h2 className="relative mx-auto max-w-[24ch] z-10 text-center font-display text-display text-white sm:max-w-none sm:px-[clamp(0rem,6vw,10rem)] text-shadow-[0_0_10px_var(--color-haven-green-deep)] md:text-[clamp(2.5rem,6vw,8rem)] md:leading-[1.05]">
          {steps.heading}
        </h2>

        <h3 className="relative mt-4 mx-auto max-w-[24ch] z-10 text-center font-display text-lead copy text-white sm:max-w-none">
          {steps.subheading}
        </h3>

        <img
          src={images.stepsBackground}
          alt=""
          aria-hidden="true"
          width={3378}
          height={4251}
          className="relative pointer-events-none inset-0 hidden h-full w-full object-cover px-[clamp(0rem,5vw,8rem)] md:block"
        />

        <img
          src={images.stepsBackgroundMobile}
          alt=""
          aria-hidden="true"
          width={3378}
          height={4025}
          className="relative pointer-events-none inset-0 h-full w-full object-cover md:hidden"
        />
      </div>
    </section>
  );
}
