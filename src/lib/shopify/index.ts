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

export async function getProductByHandle(
  handle: string,
): Promise<Product | null> {
  return mockProducts.find((p) => p.handle === handle) ?? null;
}
