"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { ProductCard } from "@/components/commerce/product-card";
import { Reveal } from "@/components/motion/reveal";
import type { Product } from "@/lib/shopify/types";

/** Horizontally scrolling row (native scroll + snap) with arrows that nudge
 *  it by one card — lets "mohlo by sa vám páčiť" hold more than 4 products
 *  without cramming them into a single static row. */
export function RelatedProductsCarousel({ products }: { products: Product[] }) {
  const tp = useTranslations("product");
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const showArrows = products.length > 4;

  return (
    <div className="relative">
      {showArrows && (
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label={tp("previousProducts")}
          className="absolute left-0 top-1/2 z-10 hidden size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-ink/70 shadow-sm transition-colors hover:border-ink/30 hover:text-ink sm:flex"
        >
          <ChevronLeft className="size-4" />
        </button>
      )}

      <div
        ref={scrollerRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth"
      >
        {products.map((product, i) => (
          <Reveal
            key={product.id}
            delay={i * 0.05}
            className="w-[calc(50%-0.5rem)] shrink-0 snap-start lg:w-[calc(25%-0.75rem)]"
          >
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>

      {showArrows && (
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label={tp("nextProducts")}
          className="absolute right-0 top-1/2 z-10 hidden size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-ink/70 shadow-sm transition-colors hover:border-ink/30 hover:text-ink sm:flex"
        >
          <ChevronRight className="size-4" />
        </button>
      )}
    </div>
  );
}
