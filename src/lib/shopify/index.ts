import { mockProducts } from "./mock-data";
import type { Product, ProductCategory } from "./types";

export type { Product } from "./types";

/**
 * Catalogue data-access layer.
 *
 * Currently backed by mock data. In Phase 1, replace each function body with a
 * Shopify Storefront API (GraphQL) call — the async signatures and return
 * types are already final, so call sites won't change.
 */

export async function getAllProducts(): Promise<Product[]> {
  return mockProducts;
}

export async function getFeaturedProducts(limit = 4): Promise<Product[]> {
  return mockProducts.slice(0, limit);
}

export async function getFeaturedProductByCategory(
  category: ProductCategory,
): Promise<Product | null> {
  return mockProducts.find((p) => p.category === category) ?? null;
}

export async function getProductsByCategory(
  category: ProductCategory,
): Promise<Product[]> {
  return mockProducts.filter((p) => p.category === category);
}

export async function getProductsByArtist(artist: string): Promise<Product[]> {
  return mockProducts.filter((p) => p.artist === artist);
}

export async function getProductsByCollection(
  collection: string,
): Promise<Product[]> {
  return mockProducts.filter((p) => p.collection === collection);
}

// Curated homepage "obľúbené" strip — specific handles, not just the first N.
const favoriteHandles = [
  "korunovacne-klenoty-tricko",
  "ufo-magnetka",
  "modry-kostolik-kachlicka",
  "fajnorka-print",
];

export async function getFavoriteProducts(): Promise<Product[]> {
  return favoriteHandles
    .map((handle) => mockProducts.find((p) => p.handle === handle))
    .filter((p): p is Product => Boolean(p));
}

export async function getProductByHandle(
  handle: string,
): Promise<Product | null> {
  return mockProducts.find((p) => p.handle === handle) ?? null;
}

// Sibling audience cuts (unisex/damy/panske) of the same design, for the PDP's
// quick gender switch. Excludes the product itself.
export async function getProductsByMotif(
  motif: string,
  excludeHandle: string,
): Promise<Product[]> {
  return mockProducts.filter((p) => p.motif === motif && p.handle !== excludeHandle);
}

// "Mohlo by sa vám páčiť" — same category, excluding the current product.
export async function getRelatedProducts(
  handle: string,
  limit = 4,
): Promise<Product[]> {
  const current = await getProductByHandle(handle);
  if (!current) return [];
  return mockProducts
    .filter((p) => p.category === current.category && p.handle !== handle)
    .slice(0, limit);
}
