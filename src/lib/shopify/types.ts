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

export type ProductColor = {
  name: string;
  hex: string;
};

/** Who a product (mainly apparel) is cut for. Optional — not every category applies. */
export type ProductAudience = "unisex" | "damy" | "panske" | "deti";

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
  /** Color variants, shown as small swatches where relevant. */
  colors?: ProductColor[];
  /** Apparel-only facets (undefined for non-apparel categories). */
  audience?: ProductAudience;
  sizes?: string[];
  /**
   * Shared key linking audience variants of the same design (e.g. the
   * unisex/damy/panske cuts of one t-shirt motif) so the PDP can offer a
   * quick switch between them. Products without siblings can omit it.
   */
  motif?: string;
  /** PDP "doplňujúce informácie" accordion — material, weight, care, etc. */
  materialInfo?: string;
  /** PDP "príbeh k motívu" accordion — the story behind the design. */
  motifStory?: string;
  available: boolean;
};
