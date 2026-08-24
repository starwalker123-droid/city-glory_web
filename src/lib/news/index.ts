import { mockNewsPosts } from "./mock-data";
import type { NewsCategory, NewsPost } from "./types";

export type { NewsPost, NewsCategory } from "./types";

/**
 * Editorial content data-access layer. Currently backed by mock data — see
 * `src/lib/shopify` for the equivalent commerce-side pattern this mirrors.
 */

export async function getAllNewsPosts(): Promise<NewsPost[]> {
  return mockNewsPosts;
}

export async function getNewsPostsByCategory(category: NewsCategory): Promise<NewsPost[]> {
  return mockNewsPosts.filter((p) => p.category === category);
}

export async function getFeaturedNewsPosts(limit = 3): Promise<NewsPost[]> {
  return mockNewsPosts.slice(0, limit);
}

export async function getNewsPostBySlug(slug: string): Promise<NewsPost | null> {
  return mockNewsPosts.find((p) => p.slug === slug) ?? null;
}
