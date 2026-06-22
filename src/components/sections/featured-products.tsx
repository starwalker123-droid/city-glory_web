import { getTranslations } from "next-intl/server";
import { getFeaturedProducts } from "@/lib/shopify";
import { ProductCard } from "@/components/commerce/product-card";

export async function FeaturedProducts() {
  const t = await getTranslations("home");
  const products = await getFeaturedProducts(4);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:py-24">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold lowercase tracking-tight text-ink sm:text-3xl">
          {t("featuredTitle")}
        </h2>
        <p className="mt-2 text-muted">{t("featuredSubtitle")}</p>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
