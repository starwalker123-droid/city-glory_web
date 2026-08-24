"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { ProductGallery } from "./product-gallery";
import { ProductBadgePill } from "./product-badge";
import { cn, formatPrice } from "@/lib/utils";
import { useCart, cartItemId } from "@/lib/cart/context";
import type { Product, ProductAudience } from "@/lib/shopify/types";

// Fit is closest to men's or women's cut, so unisex defaults to the men's chart.
const SIZE_GUIDE_BY_AUDIENCE: Record<ProductAudience, string> = {
  damy: "/size-guide/zeny.jpg",
  panske: "/size-guide/muzi.jpg",
  unisex: "/size-guide/muzi.jpg",
  deti: "/size-guide/muzi.jpg",
};

function estimatedShippingDate(locale: string) {
  const date = new Date();
  date.setDate(date.getDate() + 7);
  return new Intl.DateTimeFormat(locale === "sk" ? "sk-SK" : "en-GB", {
    day: "numeric",
    month: "long",
  }).format(date);
}

export function ProductDetail({ product }: { product: Product }) {
  const t = useTranslations("common");
  const tp = useTranslations("product");
  const locale = useLocale();

  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]);
  const [quantity, setQuantity] = useState(1);

  function handleAddToCart() {
    const image = product.images[0];
    addItem(
      {
        id: cartItemId(product.handle, selectedSize, selectedColor),
        handle: product.handle,
        title: product.title,
        image: image ?? { url: "", alt: product.title, width: 1, height: 1 },
        price: product.price,
        size: selectedSize,
        color: selectedColor,
      },
      quantity,
    );
  }

  const context = product.artist ?? product.city ?? product.collection;
  const onSale = Boolean(product.compareAtPrice);
  const badges = [...(product.badges ?? []), ...(onSale ? (["akcia"] as const) : [])];
  const sizeGuideSrc = product.audience ? SIZE_GUIDE_BY_AUDIENCE[product.audience] : null;

  return (
    <div className="mx-auto max-w-6xl px-4 pb-12 sm:pb-16">
      <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-12">
        {/* Gallery — badges stack vertically to the right of the photo */}
        <div className="flex gap-3">
          <div className="min-w-0 flex-1">
            <ProductGallery images={product.images} />
          </div>

          {badges.length > 0 && (
            <div className="flex shrink-0 flex-col gap-2">
              {badges.map((badge) => (
                <ProductBadgePill key={badge} badge={badge} variant="outline" className="text-center" />
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <h1 className="text-2xl font-semibold lowercase tracking-tight text-ink sm:text-3xl">
            {product.title}
          </h1>

          {context && (
            <p className="mt-1 text-xs uppercase tracking-wide text-muted">{context}</p>
          )}

          <p className="mt-3 text-sm leading-relaxed text-muted">{product.description}</p>

          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-6 flex items-center gap-3">
              <span className="text-xs uppercase tracking-wide text-muted">{tp("size")}</span>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="h-10 rounded-md border border-border bg-surface px-3 text-sm text-ink outline-none focus:border-ink/30 focus:ring-2 focus:ring-ring/40"
              >
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>

              {sizeGuideSrc && (
                <a
                  href={sizeGuideSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-xs text-muted underline-offset-2 transition-colors hover:text-ink hover:underline"
                >
                  {tp("sizeGuide")}
                </a>
              )}
            </div>
          )}

          {product.colors && product.colors.length > 0 && (
            <div className="mt-6">
              <span className="text-xs uppercase tracking-wide text-muted">{tp("color")}</span>
              <div className="mt-2 flex items-center gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.hex}
                    type="button"
                    onClick={() => setSelectedColor(color.name)}
                    aria-label={color.name}
                    aria-pressed={selectedColor === color.name}
                    className={cn(
                      "size-7 rounded-full ring-2 ring-offset-2 ring-offset-background transition-colors",
                      selectedColor === color.name
                        ? "ring-ink"
                        : "ring-transparent hover:ring-border",
                    )}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Price, quantity and add-to-cart share one row */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <p className="text-lg text-ink">
              {onSale && (
                <span className="mr-2 text-muted line-through">
                  {formatPrice(
                    product.compareAtPrice!.amount,
                    product.compareAtPrice!.currencyCode,
                  )}
                </span>
              )}
              <span className={onSale ? "font-medium" : undefined}>
                {formatPrice(product.price.amount, product.price.currencyCode)}
              </span>
            </p>

            <div className="flex items-center rounded-md border border-border">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="−"
                className="flex size-10 items-center justify-center text-ink transition-colors hover:bg-ink/[0.03]"
              >
                <Minus className="size-3.5" aria-hidden />
              </button>
              <span className="w-8 text-center text-sm text-ink">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="+"
                className="flex size-10 items-center justify-center text-ink transition-colors hover:bg-ink/[0.03]"
              >
                <Plus className="size-3.5" aria-hidden />
              </button>
            </div>

            <Button
              type="button"
              size="lg"
              disabled={!product.available}
              onClick={handleAddToCart}
            >
              {product.available ? t("addToCart") : tp("outOfStock")}
            </Button>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <span
                aria-hidden
                className={cn(
                  "size-1.5 rounded-full",
                  product.available ? "bg-emerald-600" : "bg-muted",
                )}
              />
              {product.available ? tp("inStock") : tp("outOfStock")}
            </span>
            {product.available && (
              <span>{tp("estimatedShipping", { date: estimatedShippingDate(locale) })}</span>
            )}
          </div>

          {(product.materialInfo || product.motifStory) && (
            <div className="mt-8">
              {product.materialInfo && (
                <Accordion title={t("doplnujuceInfo")} defaultOpen>
                  {product.materialInfo}
                </Accordion>
              )}
              {product.motifStory && (
                <Accordion title={tp("motifStory")} defaultOpen>
                  <span className="font-semibold text-ink">{product.motifStory}</span>
                </Accordion>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mt-12 grid gap-x-16 sm:grid-cols-2">
        <Accordion title={tp("suitableForTitle")} topBorder defaultOpen>
          {tp("suitableForText")}
        </Accordion>
        <Accordion title={tp("usefulInfoTitle")} topBorder defaultOpen>
          {tp("usefulInfoText")}
        </Accordion>
      </div>
    </div>
  );
}
