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
  // Every locale is prefixed, including the default — `/` always redirects
  // to `/sk` rather than serving Slovak unprefixed. Detection is off so that
  // redirect is deterministic (no Accept-Language sniffing sending visitors
  // to `/en` unasked).
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
