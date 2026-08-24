import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { getFeaturedProductByCategory } from "@/lib/shopify";
import type { ProductCategory } from "@/lib/shopify/types";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/motion/reveal";

// The four flagship categories, shown big right under the hero — a
// representative product per category stands in for the category itself.
const flagship: { key: ProductCategory; slug: string }[] = [
  { key: "tricka", slug: "tricka" },
  { key: "magnetky", slug: "magnetky" },
  { key: "mikiny", slug: "mikiny" },
  { key: "printy", slug: "printy" },
];

export async function FlagshipCategories() {
  const tCat = await getTranslations("category");

  const banners = await Promise.all(
    flagship.map(async ({ key, slug }) => ({
      key,
      slug,
      product: await getFeaturedProductByCategory(key),
    })),
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {banners.map(({ key, slug, product }, i) => {
          const image = product?.images[0];
          return (
            <Reveal key={key} delay={i * 0.05}>
              <Link
                href={`/${slug}`}
                className="group relative block aspect-square overflow-hidden rounded-lg bg-mist"
              >
                {image && (
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-4 sm:p-5">
                  <span className="text-base lowercase tracking-tight text-cream sm:text-lg">
                    {tCat(key)}
                  </span>
                  <ChevronRight
                    className="size-4 shrink-0 text-cream transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
