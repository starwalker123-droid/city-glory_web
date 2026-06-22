import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/lib/shopify/types";

export function ProductCard({ product }: { product: Product }) {
  const t = useTranslations("common");
  const image = product.images[0];
  const context = product.artist ?? product.city ?? product.collection;
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
        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-2.5 py-1 text-[11px] lowercase tracking-wide text-ink">
            {badge}
          </span>
        )}
      </div>

      <div className="mt-3 space-y-1">
        {context && (
          <p className="text-xs uppercase tracking-wide text-muted">{context}</p>
        )}
        <h3 className="text-sm text-ink">{product.title}</h3>
        <p className="text-sm text-ink">
          {product.compareAtPrice ? `${t("from")} ` : ""}
          {formatPrice(product.price.amount, product.price.currencyCode)}
        </p>
      </div>
    </Link>
  );
}
