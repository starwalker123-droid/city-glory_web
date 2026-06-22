/**
 * Product taxonomy — the single source of truth for categories and motif themes.
 *
 * Two shop parents (oblečenie, doplnky); each category belongs to one. Labels
 * are never hardcoded — they resolve via the `category` / `theme` message
 * namespaces. Curated from a market reference and trimmed to City Glory's
 * premium, story-first positioning (generic souvenir lines like toiletries,
 * toys and pet products are intentionally excluded; custom products live under
 * Pre firmy / B2B, limited & event drops under Viral / Capsula).
 *
 * `mvp: true` marks the recommended first-launch set.
 */

export type CatalogParent = "oblecenie" | "doplnky";

export type CategoryDef = {
  /** Identifier + message key (URL-safe, no diacritics). */
  key: string;
  /** URL segment for the category route. */
  slug: string;
  parent: CatalogParent;
  mvp: boolean;
};

export const categories = [
  // ── oblečenie ───────────────────────────────────────────────
  { key: "tricka", slug: "tricka", parent: "oblecenie", mvp: true },
  { key: "mikiny", slug: "mikiny", parent: "oblecenie", mvp: true },
  { key: "crewnecky", slug: "crewnecky", parent: "oblecenie", mvp: false },
  { key: "siltovky", slug: "siltovky", parent: "oblecenie", mvp: false },
  { key: "ciapky", slug: "ciapky", parent: "oblecenie", mvp: false },
  { key: "ponozky", slug: "ponozky", parent: "oblecenie", mvp: false },
  // ── doplnky ─────────────────────────────────────────────────
  { key: "printy", slug: "printy", parent: "doplnky", mvp: true },
  { key: "magnetky", slug: "magnetky", parent: "doplnky", mvp: true },
  { key: "kachlicky", slug: "kachlicky", parent: "doplnky", mvp: true },
  { key: "pohladnice", slug: "pohladnice", parent: "doplnky", mvp: true },
  { key: "tasky", slug: "tasky", parent: "doplnky", mvp: true },
  { key: "odznaky", slug: "odznaky", parent: "doplnky", mvp: true },
  { key: "nalepky", slug: "nalepky", parent: "doplnky", mvp: true },
  { key: "ramy", slug: "ramy", parent: "doplnky", mvp: false },
  { key: "vankuse", slug: "vankuse", parent: "doplnky", mvp: false },
  { key: "sviecky", slug: "sviecky", parent: "doplnky", mvp: false },
  { key: "zapisniky", slug: "zapisniky", parent: "doplnky", mvp: false },
] as const satisfies readonly CategoryDef[];

export type CategoryKey = (typeof categories)[number]["key"];

export const catalogParents: CatalogParent[] = ["oblecenie", "doplnky"];

export function categoriesByParent(parent: CatalogParent) {
  return categories.filter((c) => c.parent === parent);
}

export function mvpCategories() {
  return categories.filter((c) => c.mvp);
}

/**
 * Cross-cutting motif themes. Used as catalogue filters and as the bridge to
 * editorial content (an article's theme can surface matching products, and a
 * print's theme links back to its story). Mirrors the Spoznávanie topics.
 */
export const themes = [
  { key: "mestaMiesta", slug: "mesta-a-miesta" },
  { key: "architektura", slug: "architektura" },
  { key: "historia", slug: "historia" },
  { key: "priroda", slug: "priroda" },
  { key: "minimalisticke", slug: "minimalisticke" },
  { key: "osobnosti", slug: "osobnosti" },
  { key: "sTextom", slug: "s-textom" },
  { key: "abstraktne", slug: "abstraktne" },
] as const;

export type ThemeKey = (typeof themes)[number]["key"];
