"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefitKeys = ["earlyAccess", "loyalty", "limited"] as const;

export function Newsletter() {
  const t = useTranslations("newsletter");
  const [email, setEmail] = useState("");
  const [verified, setVerified] = useState(false);
  const [consent, setConsent] = useState(false);

  return (
    <section id="newsletter" className="bg-cream">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:py-24">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-12 sm:px-12 sm:py-14">
          {/* Subtle artistic decoration */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-12 -top-12 size-40 rounded-full bg-lilac/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-12 -right-10 size-44 rounded-full bg-sky/25 blur-3xl"
          />

          <div className="relative grid gap-10 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="text-2xl font-semibold lowercase tracking-tight text-ink md:text-3xl">
                {t("heading")}
              </h2>
              <p className="mt-3 text-muted">{t("intro")}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {benefitKeys.map((key) => (
                  <li key={key} className="flex items-center gap-2.5 text-sm text-ink">
                    <Check className="size-4 shrink-0 text-sky" strokeWidth={2.5} aria-hidden />
                    {t(`benefits.${key}`)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Submission wiring (Resend double opt-in) and a real captcha
                provider (Turnstile/hCaptcha) land together in Phase 1. */}
            <form
              className="flex flex-col gap-3 md:justify-center"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("placeholder")}
                  aria-label={t("placeholder")}
                  className="h-11 flex-1 rounded-md border border-border bg-cream px-4 text-sm text-ink outline-none placeholder:text-muted focus:border-ink/30 focus:ring-2 focus:ring-ring/40"
                />
                <Button type="submit">{t("submit")}</Button>
              </div>

              <label className="flex items-center gap-2.5 text-sm text-ink">
                <input
                  type="checkbox"
                  required
                  checked={verified}
                  onChange={(e) => setVerified(e.target.checked)}
                  className="size-4 shrink-0 accent-ink"
                />
                {t("captchaLabel")}
              </label>

              <label className="flex items-center gap-2.5 text-sm text-muted">
                <input
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="size-4 shrink-0 accent-ink"
                />
                {t("consent")}
              </label>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
