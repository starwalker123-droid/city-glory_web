import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { categories } from "@/config/catalog";
import { getProductsByCategory } from "@/lib/shopify";
import { CategoryBrowser } from "@/components/commerce/category-browser";
import { WhyCityGlory } from "@/components/sections/why-city-glory";
import { Reveal } from "@/components/motion/reveal";
import { Breadcrumb } from "@/components/ui/breadcrumb";

function findCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const { locale, category: slug } = await params;
  const category = findCategory(slug);
  if (!category) return {};

  const t = await getTranslations({ locale, namespace: "category" });
  return { title: t(category.key) };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category: slug } = await params;
  const category = findCategory(slug);
  if (!category) notFound();

  setRequestLocale(locale);

  const t = await getTranslations("category");
  const tp = await getTranslations("product");
  const products = await getProductsByCategory(category.key);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <Reveal>
          <Breadcrumb items={[{ label: t(category.key) }]} />
          <h1 className="sr-only">{t(category.key)}</h1>
        </Reveal>

        {products.length > 0 ? (
          <CategoryBrowser products={products} />
        ) : (
          <p className="mt-10 text-muted">{tp("emptyCategory")}</p>
        )}
      </div>

      <WhyCityGlory />
    </>
  );
}
