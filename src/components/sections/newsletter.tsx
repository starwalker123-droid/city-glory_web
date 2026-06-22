"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const t = useTranslations("newsletter");
  const [email, setEmail] = useState("");

  return (
    <section id="newsletter" className="bg-cream">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:py-24">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-12 text-center sm:px-12">
          <h2 className="text-2xl font-semibold lowercase tracking-tight text-ink sm:text-3xl">
            {t("heading")}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted">{t("subtitle")}</p>

          {/* Submission wiring (Resend double opt-in) lands in Phase 1. */}
          <form
            className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
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
          </form>
        </div>
      </div>
    </section>
  );
}
