"use client";

import { useMemo } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { ChevronRight, Sparkles, Flag, Palette, User, type LucideIcon } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { NewsCard } from "./news-card";
import { Reveal } from "@/components/motion/reveal";
import { cn, formatPrice } from "@/lib/utils";
import type { NewsCategory, NewsPost } from "@/lib/news";
import type { Product } from "@/lib/shopify/types";

const CATEGORIES: { key: NewsCategory; Icon: LucideIcon }[] = [
  { key: "osobnosti", Icon: User },
  { key: "udalosti", Icon: Flag },
  { key: "zaujimavosti", Icon: Sparkles },
  { key: "umenie", Icon: Palette },
];

const CATEGORY_KEYS = CATEGORIES.map((c) => c.key);

/** Query param name shared with the article breadcrumb's category link. */
const CATEGORY_PARAM = "kategoria";

// Every 2 rows (6 cards @ 3 columns) a full-width "shop the story" banner
// breaks up the grid, cycling through a few well-photographed products.
const PROMO_INTERVAL = 6;

function ShopPromo({ product }: { product: Product }) {
  const t = useTranslations("clanky");
  const image = product.images[0];

  return (
    <Link
      href={`/produkt/${product.handle}`}
      className="group col-span-2 flex items-center gap-5 rounded-lg border border-border bg-surface p-5 transition-colors hover:border-ink/20 sm:col-span-2 sm:p-6 lg:col-span-3"
    >
      <div className="relative size-20 shrink-0 overflow-hidden rounded-md bg-mist sm:size-24">
        {image && (
          <Image
            src={image.url}
            alt={image.alt}
            fill
            sizes="96px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs uppercase tracking-wide text-muted">{t("shopPromoTitle")}</p>
        <p className="mt-1 truncate text-base lowercase tracking-tight text-ink sm:text-lg">
          {product.title}
        </p>
        <p className="mt-1 text-sm text-muted">
          {formatPrice(product.price.amount, product.price.currencyCode)}
        </p>
      </div>
      <span className="hidden shrink-0 items-center gap-1.5 text-sm text-ink sm:inline-flex">
        {t("shopPromoCta")}
        <ChevronRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export function NewsBrowser({
  posts,
  promoProducts,
}: {
  posts: NewsPost[];
  promoProducts: Product[];
}) {
  const t = useTranslations("newsCategory");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const categoryParam = searchParams.get(CATEGORY_PARAM);
  const active: NewsCategory | null = CATEGORY_KEYS.includes(categoryParam as NewsCategory)
    ? (categoryParam as NewsCategory)
    : null;

  function setActive(category: NewsCategory | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (category) {
      params.set(CATEGORY_PARAM, category);
    } else {
      params.delete(CATEGORY_PARAM);
    }
    const query = params.toString();
    router.push(`${pathname}${query ? `?${query}` : ""}`, { scroll: false });
  }

  const filtered = useMemo(
    () => (active ? posts.filter((p) => p.category === active) : posts),
    [posts, active],
  );

  return (
    <div>
      <Reveal>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActive(null)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm lowercase tracking-tight transition-colors",
              active === null
                ? "border-ink bg-ink text-cream"
                : "border-border text-muted hover:text-ink",
            )}
          >
            {t("vsetky")}
          </button>
          {CATEGORIES.map(({ key, Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => setActive(key)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm lowercase tracking-tight transition-colors",
                active === key
                  ? "border-ink bg-ink text-cream"
                  : "border-border text-muted hover:text-ink",
              )}
            >
              <Icon className="size-3.5" aria-hidden />
              {t(key)}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post, i) => {
          const items = [
            <Reveal key={post.id} delay={(i % 6) * 0.05}>
              <NewsCard post={post} />
            </Reveal>,
          ];
          const position = i + 1;
          if (position % PROMO_INTERVAL === 0 && promoProducts.length > 0) {
            const product = promoProducts[(position / PROMO_INTERVAL - 1) % promoProducts.length];
            items.push(<ShopPromo key={`promo-${post.id}`} product={product} />);
          }
          return items;
        })}
      </div>
    </div>
  );
}
