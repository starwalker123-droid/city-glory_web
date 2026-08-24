import { getTranslations } from "next-intl/server";
import { getRelatedProducts } from "@/lib/shopify";
import { RelatedProductsCarousel } from "./related-products-carousel";
import { Reveal } from "@/components/motion/reveal";

/** PDP "mohlo by sa vám páčiť" — same category, excluding the product itself. */
export async function RelatedProducts({ handle }: { handle: string }) {
  const t = await getTranslations("product");
  const products = await getRelatedProducts(handle, 8);

  if (products.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <Reveal>
        <p className="text-center text-xs uppercase tracking-wide text-muted">
          {t("relatedTitle")}
        </p>
      </Reveal>

      <div className="mt-8">
        <RelatedProductsCarousel products={products} />
      </div>
    </section>
  );
}
