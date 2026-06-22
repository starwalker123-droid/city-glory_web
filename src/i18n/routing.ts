import { defineRouting } from "next-intl/routing";

/**
 * Central i18n routing config.
 *
 * Default language is Slovak (`sk`). English (`en`) is wired in now so the
 * whole app already lives under a `[locale]` segment — adding a fully
 * translated locale later requires no structural changes, only message files.
 */
export const routing = defineRouting({
  locales: ["sk", "en"],
  defaultLocale: "sk",
  // Keep the default locale clean (no `/sk` prefix) while `/en` is prefixed.
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
