/**
 * Primary navigation. Labels are never hardcoded — they resolve via the
 * `nav` message namespace (see /messages/*.json), so the menu is translatable.
 */
export const mainNav = [
  { key: "oblecenie", href: "/oblecenie" },
  { key: "doplnky", href: "/doplnky" },
  { key: "clanky", href: "/clanky" },
  { key: "capsula", href: "/capsula" },
  { key: "viral", href: "/viral" },
  { key: "preFirmy", href: "/pre-firmy" },
  { key: "kontakt", href: "/kontakt" },
] as const;

export type NavKey = (typeof mainNav)[number]["key"];
