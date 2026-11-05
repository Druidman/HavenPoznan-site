"use client";

import SignupForm from "./SignupForm";
import {
  cssUrl,
  havenPoznan,
  SIGNUP_URL,
  SIGNUP_EVENT_ID,
  SIGNUP_LANG,
  type SiteImages,
} from "@/site/site";

/**
 * The hero's signup URL: the shared Haven attendee form with the event and
 * language riding along — the same query params the haven/* site attaches.
 * A `?r=` referral is added by SignupForm after hydration.
 */
function baseSignupUrl(): string {
  const url = new URL(SIGNUP_URL);
  url.searchParams.set("event", SIGNUP_EVENT_ID);
  url.searchParams.set("lang", SIGNUP_LANG);
  return url.toString();
}

export default function Hero({ images }: { images: SiteImages }) {
  const { hero, tagline, title } = havenPoznan;
  const signupUrl = baseSignupUrl();

  return (
    <section
      id="top"
      style={{ backgroundImage: cssUrl(images.heroBackground) }}
      className="rule-frame relative flex min-h-svh flex-col items-center overflow-hidden bg-haven-green bg-cover bg-top bg-no-repeat px-4 pt-[clamp(7.5rem,18vw,11rem)] pb-[clamp(5rem,14vw,9rem)] [--frame-gap:clamp(0.75rem,1.1vw,1rem)] [--frame-offset:clamp(0.5rem,1.1vw,1rem)] [--frame-weight:clamp(3px,0.35vw,5px)]"
    >
      {/* The centered column: logo, title, tagline, contact, signup. */}
      <div className="relative z-10 flex w-full max-w-[40rem] flex-1 flex-col items-center text-center">
        <img
          src={images.logo}
          alt="Hack Club Haven"
          width={778}
          height={445}
          className="w-[clamp(9rem,24vw,15rem)] drop-shadow-[0_0.35rem_0_rgb(0_0_0/0.18)]"
        />

        <h1 className="mt-[clamp(0.75rem,2vw,1.5rem)] font-display text-[clamp(2.25rem,6.5vw,5rem)] leading-[0.9] text-white">
          {title.join(" ")}
        </h1>

        <p className="glow-orange mt-[clamp(1rem,2.5vw,2rem)] font-body text-[clamp(1.05rem,2.4vw,1.75rem)] leading-[1.25] text-white">
          {tagline.map((part, i) => (
            <span key={i} className={i === 0 ? "whitespace-nowrap" : "block"}>
              {part}
            </span>
          ))}
        </p>

        {hero.contactEmail && (
          <a
            href={`mailto:${hero.contactEmail}`}
            className="glow-orange mt-[clamp(0.75rem,1.5vw,1.25rem)] font-body text-[clamp(0.95rem,1.6vw,1.25rem)] text-white underline decoration-from-font underline-offset-4 transition-opacity hover:opacity-80"
          >
            {hero.contact} {hero.contactEmail}
          </a>
        )}

        <SignupForm
          signup={hero.signup}
          action={signupUrl}
          className="mt-[clamp(1.25rem,3vw,2.5rem)] w-[min(100%,26rem)]"
        />

        <a
          href="#about"
          className="mt-auto flex flex-col items-center gap-1 pt-[clamp(1.5rem,4vw,3rem)] transition-transform hover:translate-y-1"
        >
          <span className="font-body text-[clamp(0.85rem,1.4vw,1.05rem)] text-white/70">
            {hero.scrollLabel}
          </span>
          <img
            src={images.scrollArrow}
            alt=""
            aria-hidden="true"
            width={207}
            height={69}
            className="w-[clamp(1.75rem,3vw,2.5rem)] -scale-y-100"
          />
        </a>
      </div>

      {/* Accents from the illustration, kept but tucked into the corners. */}
      <img
        src={images.hedgehog}
        alt=""
        aria-hidden="true"
        width={422}
        height={308}
        className="pointer-events-none absolute right-[4%] bottom-[clamp(2rem,6vw,4rem)] z-20 hidden w-[clamp(5rem,10vw,9rem)] select-none scale-x-[-1] object-contain sm:block"
      />

      <img
        src={images.heroForeground}
        alt=""
        aria-hidden="true"
        width={1414}
        height={501}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 w-full max-w-none translate-y-[55%] select-none"
      />
    </section>
  );
}
