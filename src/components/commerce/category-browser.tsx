"use client";

import { useMemo, useState, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ProductCard } from "./product-card";
import { PriceRangeSlider } from "./price-range-slider";
import { cn, formatPrice } from "@/lib/utils";
import type { Product, ProductAudience } from "@/lib/shopify/types";

const PAGE_SIZE = 6;
const SIZE_ORDER = ["XS", "S", "M", "L", "XL"];
const AUDIENCES: ProductAudience[] = ["unisex", "damy", "panske", "deti"];

function toggled<T>(set: Set<T>, value: T) {
  const next = new Set(set);
  if (next.has(value)) next.delete(value);
  else next.add(value);
  return next;
}

/**
 * Sidebar filters + grid + load-more for a category listing. Filter groups
 * only render when the category's products actually carry that facet, so
 * the same component works for apparel (sizes, audience) and non-apparel
 * categories (no sizes/audience, just badges + price) alike.
 */
export function CategoryBrowser({ products }: { products: Product[] }) {
  const t = useTranslations("product");
  const tBadge = useTranslations("badge");
  const tAudience = useTranslations("audience");

  const priceMin = useMemo(() => Math.min(...products.map((p) => p.price.amount)), [products]);
  const priceMax = useMemo(() => Math.max(...products.map((p) => p.price.amount)), [products]);

  const availableAudiences = useMemo(
    () => AUDIENCES.filter((a) => products.some((p) => p.audience === a)),
    [products],
  );
  const availableSizes = useMemo(
    () => SIZE_ORDER.filter((s) => products.some((p) => p.sizes?.includes(s))),
    [products],
  );
  const availableColors = useMemo(() => {
    const seen = new Map<string, string>();
    for (const p of products) {
      for (const c of p.colors ?? []) if (!seen.has(c.name)) seen.set(c.name, c.hex);
    }
    return [...seen.entries()].map(([name, hex]) => ({ name, hex }));
  }, [products]);
  const hasLimited = products.some((p) => p.badges?.includes("limitovane"));
  const hasCapsula = products.some((p) => p.badges?.includes("capsula"));
  const hasViral = products.some((p) => p.badges?.includes("viral"));
  const hasSale = products.some((p) => p.compareAtPrice);

  const [audience, setAudience] = useState<Set<ProductAudience>>(new Set());
  const [sizes, setSizes] = useState<Set<string>>(new Set());
  const [colors, setColors] = useState<Set<string>>(new Set());
  const [limited, setLimited] = useState(false);
  const [capsula, setCapsula] = useState(false);
  const [viral, setViral] = useState(false);
  const [sale, setSale] = useState(false);
  const [price, setPrice] = useState<[number, number]>([priceMin, priceMax]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (audience.size > 0 && (!p.audience || !audience.has(p.audience))) return false;
      if (sizes.size > 0 && !p.sizes?.some((s) => sizes.has(s))) return false;
      if (colors.size > 0 && !p.colors?.some((c) => colors.has(c.name))) return false;
      if (limited && !p.badges?.includes("limitovane")) return false;
      if (capsula && !p.badges?.includes("capsula")) return false;
      if (viral && !p.badges?.includes("viral")) return false;
      if (sale && !p.compareAtPrice) return false;
      if (p.price.amount < price[0] || p.price.amount > price[1]) return false;
      return true;
    });
  }, [products, audience, sizes, colors, limited, capsula, viral, sale, price]);

  const visibleItems = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const hasActiveFilters =
    audience.size > 0 ||
    sizes.size > 0 ||
    colors.size > 0 ||
    limited ||
    capsula ||
    viral ||
    sale ||
    price[0] !== priceMin ||
    price[1] !== priceMax;

  function clearFilters() {
    setAudience(new Set());
    setSizes(new Set());
    setColors(new Set());
    setLimited(false);
    setCapsula(false);
    setViral(false);
    setSale(false);
    setPrice([priceMin, priceMax]);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <div className="mt-10 lg:grid lg:grid-cols-[240px_1fr] lg:items-start lg:gap-10">
      <aside className="mb-10 space-y-8 lg:mb-0">
        <div className="flex items-center justify-between">
          <h2 className="text-xs uppercase tracking-wide text-muted">{t("filters")}</h2>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-xs text-muted underline-offset-2 hover:text-ink hover:underline"
            >
              {t("clearFilters")}
            </button>
          )}
        </div>

        {availableAudiences.length > 0 && (
          <FilterGroup label={t("audience")}>
            {availableAudiences.map((a) => (
              <Checkbox
                key={a}
                label={tAudience(a)}
                checked={audience.has(a)}
                onChange={() => {
                  setAudience((s) => toggled(s, a));
                  setVisibleCount(PAGE_SIZE);
                }}
              />
            ))}
          </FilterGroup>
        )}

        {availableSizes.length > 0 && (
          <FilterGroup label={t("size")}>
            <div className="flex flex-wrap gap-2">
              {availableSizes.map((s) => {
                const active = sizes.has(s);
                return (
                  <button
                    key={s}
                    type="button"
                    aria-pressed={active}
                    onClick={() => {
                      setSizes((prev) => toggled(prev, s));
                      setVisibleCount(PAGE_SIZE);
                    }}
                    className={cn(
                      "flex h-8 min-w-8 items-center justify-center rounded-md border px-2 text-xs transition-colors",
                      active
                        ? "border-ink bg-ink text-cream"
                        : "border-border text-ink hover:border-ink/40",
                    )}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </FilterGroup>
        )}

        {availableColors.length > 0 && (
          <FilterGroup label={t("color")}>
            <div className="flex flex-wrap gap-2">
              {availableColors.map((c) => {
                const active = colors.has(c.name);
                return (
                  <button
                    key={c.name}
                    type="button"
                    aria-pressed={active}
                    aria-label={c.name}
                    title={c.name}
                    onClick={() => {
                      setColors((prev) => toggled(prev, c.name));
                      setVisibleCount(PAGE_SIZE);
                    }}
                    className={cn(
                      "size-7 rounded-full ring-2 ring-offset-2 ring-offset-background transition-colors",
                      active ? "ring-ink" : "ring-transparent hover:ring-border",
                    )}
                    style={{ backgroundColor: c.hex }}
                  />
                );
              })}
            </div>
          </FilterGroup>
        )}

        {(hasLimited || hasCapsula || hasViral || hasSale) && (
          <FilterGroup>
            {hasLimited && (
              <Checkbox
                label={tBadge("limitovane")}
                checked={limited}
                onChange={() => {
                  setLimited((v) => !v);
                  setVisibleCount(PAGE_SIZE);
                }}
              />
            )}
            {hasCapsula && (
              <Checkbox
                label={tBadge("capsula")}
                checked={capsula}
                onChange={() => {
                  setCapsula((v) => !v);
                  setVisibleCount(PAGE_SIZE);
                }}
              />
            )}
            {hasViral && (
              <Checkbox
                label={tBadge("viral")}
                checked={viral}
                onChange={() => {
                  setViral((v) => !v);
                  setVisibleCount(PAGE_SIZE);
                }}
              />
            )}
            {hasSale && (
              <Checkbox
                label={tBadge("akcia")}
                checked={sale}
                onChange={() => {
                  setSale((v) => !v);
                  setVisibleCount(PAGE_SIZE);
                }}
              />
            )}
          </FilterGroup>
        )}

        {priceMax > priceMin && (
          <FilterGroup label={t("price")}>
            <PriceRangeSlider
              min={priceMin}
              max={priceMax}
              value={price}
              onChange={(v) => {
                setPrice(v);
                setVisibleCount(PAGE_SIZE);
              }}
              formatValue={(n) => formatPrice(n, "EUR")}
            />
          </FilterGroup>
        )}
      </aside>

      <div id="produkty" className="scroll-mt-8">
        {visibleItems.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3">
            {visibleItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-muted">{t("noResults")}</p>
        )}

        {filtered.length > PAGE_SIZE &&
          (hasMore ? (
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
                aria-label={t("showMore")}
                className="flex size-10 items-center justify-center rounded-full border border-border text-ink/70 transition-colors hover:border-ink/30 hover:text-ink"
              >
                <ChevronDown className="size-4" aria-hidden />
              </button>
            </div>
          ) : (
            <div className="mt-12 flex justify-center">
              <a
                href="#produkty"
                aria-label={t("backToTop")}
                className="flex size-10 items-center justify-center rounded-full border border-border text-ink/70 transition-colors hover:border-ink/30 hover:text-ink"
              >
                <ChevronUp className="size-4" aria-hidden />
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}

function FilterGroup({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <div>
      {label && <h3 className="mb-3 text-xs uppercase tracking-wide text-muted">{label}</h3>}
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}

function Checkbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 text-sm text-ink">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="size-4 rounded border-border accent-ink"
      />
      {label}
    </label>
  );
}
