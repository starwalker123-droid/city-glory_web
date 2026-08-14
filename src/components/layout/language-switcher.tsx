"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

/** Shows the locale you can switch TO (not the current one) as a single toggle. */
export function LanguageSwitcher() {
  const t = useTranslations("common");
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const current = (params.locale as string) ?? routing.defaultLocale;
  const next = routing.locales.find((loc) => loc !== current) ?? current;
  const label = next === "en" ? t("switchToEnglish") : t("switchToSlovak");

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: next })}
      aria-label={label}
      className="text-xs font-semibold uppercase text-ink/80 transition-colors hover:text-ink"
    >
      {next}
    </button>
  );
}
