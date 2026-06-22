import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { getFeaturedProducts } from "@/lib/shopify";
import { ProductCard } from "@/components/commerce/product-card";
import { Reveal } from "@/components/motion/reveal";
import { Link } from "@/i18n/navigation";

export async function FeaturedProducts() {
  const t = await getTranslations("home");
  const tc = await getTranslations("common");
  const products = await getFeaturedProducts(4);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:py-24">
      <Reveal>
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold lowercase tracking-tight text-ink sm:text-3xl">
              {t("featuredTitle")}
            </h2>
            <p className="mt-2 text-muted">{t("featuredSubtitle")}</p>
          </div>
          <Link
            href="/doplnky"
            className="group hidden shrink-0 items-center gap-1.5 text-sm text-ink sm:inline-flex"
          >
            {tc("viewAll")}
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
        {products.map((product, i) => (
          <Reveal key={product.id} delay={i * 0.05}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
