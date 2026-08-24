"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Check, Phone } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { CONTACT_PHONE } from "@/config/contact";

const inputClass =
  "h-11 rounded-md border border-border bg-cream px-4 text-sm text-ink outline-none placeholder:text-muted focus:border-ink/30 focus:ring-2 focus:ring-ring/40";

/**
 * Same card language as the newsletter signup (decorative blobs, rounded
 * surface). Submission wiring (Resend) lands in Phase 1 — for now this just
 * confirms receipt locally, matching the newsletter form's stopgap pattern.
 */
export function ContactForm() {
  const t = useTranslations("kontakt.form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-3xl px-4 pb-20 sm:pb-24">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-10 sm:px-12 sm:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-12 -top-12 size-40 rounded-full bg-sky/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-12 -right-10 size-44 rounded-full bg-lilac/25 blur-3xl"
          />

          {sent ? (
            <div className="relative flex flex-col items-center gap-3 py-8 text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-cream text-ink">
                <Check className="size-6" strokeWidth={2.5} aria-hidden />
              </span>
              <h2 className="text-xl font-semibold lowercase tracking-tight text-ink">
                {t("successTitle")}
              </h2>
              <p className="max-w-sm text-sm text-muted">{t("successText")}</p>
            </div>
          ) : (
            <div className="relative">
              <a
                href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-ink/70"
              >
                <Phone className="size-3.5 shrink-0 text-muted" aria-hidden />
                {CONTACT_PHONE}
              </a>
              <h2 className="mt-3 text-2xl font-semibold lowercase tracking-tight text-ink md:text-3xl">
                {t("title")}
              </h2>
              <p className="mt-3 text-muted">{t("intro")}</p>

              <form
                className="mt-6 flex flex-col gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={`${t("name")} *`}
                    aria-label={t("name")}
                    className={`${inputClass} sm:flex-1`}
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={`${t("email")} *`}
                    aria-label={t("email")}
                    className={`${inputClass} sm:flex-1`}
                  />
                </div>

                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={`${t("message")} *`}
                  aria-label={t("message")}
                  className="resize-none rounded-md border border-border bg-cream px-4 py-3 text-sm text-ink outline-none placeholder:text-muted focus:border-ink/30 focus:ring-2 focus:ring-ring/40"
                />

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

                <Button type="submit" className="sm:self-start">
                  {t("submit")}
                </Button>
              </form>

              <div className="mt-8 flex flex-col gap-1 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
                <span>{t("replyNote")}</span>
                <span>
                  {t("businessNote")}{" "}
                  <Link
                    href="/pre-firmy"
                    className="text-ink underline-offset-2 hover:underline"
                  >
                    {t("businessLink")}
                  </Link>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
