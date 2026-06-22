/**
 * Storefront-shaped domain types. These intentionally mirror what the Shopify
 * Storefront API will return so the mock layer can be swapped for real queries
 * in Phase 1 without touching components.
 */
import type { CategoryKey } from "@/config/catalog";

export type Money = {
  amount: number;
  currencyCode: string;
};

export type ProductImage = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

// Category identifiers come from the catalog config (single source of truth).
export type ProductCategory = CategoryKey;

export type ProductBadge = "capsula" | "viral" | "novinka" | "limitovane";

export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  price: Money;
  compareAtPrice?: Money;
  images: ProductImage[];
  category: ProductCategory;
  /** Editorial links (mirrored from Shopify metafields in Phase 1). */
  city?: string;
  artist?: string;
  collection?: string;
  badges?: ProductBadge[];
  available: boolean;
};
