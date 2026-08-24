import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { formatPrice } from "@/lib/utils";
import { ProductBadgePill } from "./product-badge";
import type { Product } from "@/lib/shopify/types";

export function ProductCard({ product }: { product: Product }) {
  const t = useTranslations("common");
  const tp = useTranslations("product");
  const tCat = useTranslations("category");
  const image = product.images[0];
  const badge = product.badges?.[0];

  return (
    <Link href={`/produkt/${product.handle}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-mist">
        {image && (
          <Image
            src={image.url}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
        {badge && <ProductBadgePill badge={badge} className="absolute left-3 top-3" />}
        {!product.available && (
          <span className="group/dot absolute right-3 top-3 z-10 flex size-3 items-center justify-center">
            <span
              aria-hidden
              className="size-2.5 rounded-full bg-orange-500 ring-2 ring-cream/90"
            />
            <span className="sr-only">{tp("onOrder")}</span>
            <span
              role="tooltip"
              className="pointer-events-none absolute right-0 top-full z-20 mt-1.5 whitespace-nowrap rounded-md bg-ink px-2 py-1 text-[11px] text-cream opacity-0 shadow-sm transition-opacity duration-150 group-hover/dot:opacity-100"
            >
              {tp("onOrder")}
            </span>
          </span>
        )}
      </div>

      <div className="mt-3 space-y-1">
        <h3 className="text-sm text-ink">{product.title}</h3>
        <p className="text-xs uppercase tracking-wide text-muted">{tCat(product.category)}</p>

        {product.sizes && product.sizes.length > 0 && (
          <p className="text-xs text-muted">
            {product.sizes[0]} – {product.sizes[product.sizes.length - 1]}
          </p>
        )}

        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-1 pt-0.5">
            {product.colors.map((color) => (
              <span
                key={color.hex}
                aria-hidden
                className="size-3 rounded-full border border-ink/10"
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </div>
        )}

        <p className="text-sm text-ink">
          {product.compareAtPrice ? `${t("from")} ` : ""}
          {formatPrice(product.price.amount, product.price.currencyCode)}
        </p>
      </div>
    </Link>
  );
}
