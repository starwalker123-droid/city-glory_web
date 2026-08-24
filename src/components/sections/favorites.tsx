import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { getFavoriteProducts } from "@/lib/shopify";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/motion/reveal";
import { ProductBadgePill } from "@/components/commerce/product-badge";
import { formatPrice } from "@/lib/utils";

// Wikimedia Commons photo (CC BY-SA 3.0) — attribution required by license.
const photoCreditByHandle = {
  "fajnorka-print": {
    text: "foto: Lure, CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Fajnorovo_n%C3%A1bre%C5%BEie_01.jpg",
  },
} as const;

// Corner badge cycles across the strip — same pill treatment as ProductCard.
const rotatingBadges = ["viral", "akcia", "capsula"] as const;

/**
 * Homepage "vybrané" strip, right under the reasons-to-buy section — four
 * curated favorites in a row, real photo on top and info below it (type,
 * name, price, and colour swatches for apparel).
 */
export async function Favorites() {
  const t = await getTranslations("home");
  const tCat = await getTranslations("category");
  const products = await getFavoriteProducts();

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <Reveal>
        <p className="text-center text-xs uppercase tracking-wide text-muted">
          {t("favoritesEyebrow")}
        </p>
      </Reveal>

      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-5 lg:grid-cols-4">
        {products.map((product, i) => {
          const image = product.images[0];
          const credit = photoCreditByHandle[product.handle as keyof typeof photoCreditByHandle];
          const onSale = Boolean(product.compareAtPrice);
          const badge = rotatingBadges[i % rotatingBadges.length];

          return (
            <Reveal key={product.id} delay={i * 0.05}>
              <div className="group">
                <Link href={`/produkt/${product.handle}`} className="block">
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-mist">
                    {image && (
                      <Image
                        src={image.url}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <ProductBadgePill badge={badge} className="absolute left-3 top-3" />
                  </div>

                  <div className="mt-3 space-y-1">
                    <span className="block text-base lowercase tracking-tight text-ink sm:text-lg">
                      {product.title}
                    </span>
                    <span className="block text-[11px] uppercase tracking-wide text-muted">
                      {tCat(product.category)}
                    </span>
                    <span className="block text-sm text-ink">
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
                    </span>
                    {product.colors && (
                      <span className="flex items-center gap-1.5 pt-0.5">
                        {product.colors.map((color) => (
                          <span
                            key={color.hex}
                            title={color.name}
                            className="size-3 rounded-full ring-1 ring-ink/10"
                            style={{ backgroundColor: color.hex }}
                          />
                        ))}
                      </span>
                    )}
                  </div>
                </Link>

                {credit && (
                  <a
                    href={credit.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-[9px] text-muted/70 hover:text-muted hover:underline"
                  >
                    {credit.text}
                  </a>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
