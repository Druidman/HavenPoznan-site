"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { SIGNUP_URL, SIGNUP_EVENT_ID, SIGNUP_LANG } from "@/site/site";

/**
 * The attendee signup form. Where the address is submitted: the shared Haven
 * signup form, with the event and language riding along. A GET form drops the
 * query string of its own action, so they are re-sent as hidden fields —
 * exactly what the haven/* site renders server-side.
 *
 * The event and language are static, so the hidden fields render on the
 * server; only a `?r=` referral needs the client, and it is appended as one
 * more hidden field (and a matching URL on resubmission-safe form actions).
 */
export default function SignupForm({
  signup,
  action = SIGNUP_URL,
  className = "",
}: {
  signup: { placeholder: string; button: string };
  /** Base form action (no query string). */
  action?: string;
  className?: string;
}) {
  const [referral, setReferral] = useState<string | null>(null);

  // `window.location` (the referral code) is read once after mount; scheduled
  // outside the effect body, which would trigger cascading renders.
  useEffect(() => {
    const id = setTimeout(() => {
      setReferral(new URLSearchParams(window.location.search).get("r"));
    }, 0);
    return () => clearTimeout(id);
  }, []);

  const base = action.split("?")[0];

  return (
    <form
      method="get"
      action={base}
      className={`flex items-center gap-2 rounded-[clamp(0.5rem,2.5vw,1.5rem)] bg-white/70 p-[clamp(0.4rem,0.5vw,0.625rem)] shadow-[0_0_8px_2px_rgb(250_104_27/0.65)] transition-transform hover:scale-[1.04] active:scale-100 ${className}`}
    >
      <input type="hidden" name="event" value={SIGNUP_EVENT_ID} />
      <input type="hidden" name="lang" value={SIGNUP_LANG} />
      {referral && <input type="hidden" name="r" value={referral} />}
      <label htmlFor="signup-email" className="sr-only">
        Your email address
      </label>
      <input
        id="signup-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder={signup.placeholder}
        className="min-w-0 flex-1 bg-transparent px-[clamp(0.75rem,1.6vw,1.5rem)] py-1 font-body text-[clamp(1rem,2vw,3.125rem)] leading-tight tracking-[-0.03em] text-haven-orange-deep placeholder:text-haven-orange-deep focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 rounded-[clamp(0.25rem,2.5vw,1.25rem)] bg-haven-orange-bright px-[clamp(0.9rem,1.9vw,2rem)] py-[clamp(0.5rem,0.7vw,1rem)] transition-transform hover:scale-[1.04] active:scale-100"
      >
        <span className="sr-only">Sign up for Haven</span>
        <p className="text-[clamp(1rem,2vw,3.125rem)] text-white">
          {signup.button}
        </p>
      </button>
    </form>
  );
}

/** Track whether the visitor has scrolled past `threshold` pixels. */
export function useScrolled(threshold = 10): boolean {
  return useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > threshold,
    () => false,
  );
}

/** One scroll listener shared by every caller of `useScrolled`. */
function subscribeScroll(callback: () => void): () => void {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}
