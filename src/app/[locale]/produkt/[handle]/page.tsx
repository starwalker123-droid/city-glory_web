import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAllProducts, getProductByHandle, getProductsByMotif } from "@/lib/shopify";
import { categories } from "@/config/catalog";
import { ProductDetail } from "@/components/commerce/product-detail";
import { RelatedProducts } from "@/components/sections/related-products";
import { WhyCityGlory } from "@/components/sections/why-city-glory";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/motion/reveal";

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const product = await getProductByHandle(handle);
  if (!product) return {};

  return { title: product.title, description: product.description };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; handle: string }>;
}) {
  const { locale, handle } = await params;
  const product = await getProductByHandle(handle);
  if (!product) notFound();

  setRequestLocale(locale);

  const tCat = await getTranslations("category");
  const tAudience = await getTranslations("audience");

  const category = categories.find((c) => c.key === product.category);
  const siblings = product.motif
    ? await getProductsByMotif(product.motif, product.handle)
    : [];

  const breadcrumbItems = [
    ...(category ? [{ label: tCat(category.key), href: `/${category.slug}` }] : []),
    ...(product.audience ? [{ label: tAudience(product.audience) }] : []),
  ];

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:pt-10">
        <Reveal>
          <Breadcrumb
            items={breadcrumbItems}
            right={
              siblings.length > 0 && (
                <div className="flex items-center gap-4">
                  {siblings.map((sibling) => (
                    <Link
                      key={sibling.handle}
                      href={`/produkt/${sibling.handle}`}
                      className="text-sm lowercase text-muted transition-colors hover:text-ink"
                    >
                      {tAudience(sibling.audience!)}
                    </Link>
                  ))}
                </div>
              )
            }
          />
        </Reveal>
      </div>

      <ProductDetail product={product} />
      <RelatedProducts handle={product.handle} />
      <WhyCityGlory />
    </>
  );
}
