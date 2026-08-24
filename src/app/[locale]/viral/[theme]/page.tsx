import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { viralThemes } from "@/config/viral";
import { getProductsByCollection } from "@/lib/shopify";
import { CategoryBrowser } from "@/components/commerce/category-browser";
import { WhyCityGlory } from "@/components/sections/why-city-glory";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/motion/reveal";

function findTheme(slug: string) {
  return viralThemes.find((t) => t.slug === slug);
}

export function generateStaticParams() {
  return viralThemes.map((t) => ({ theme: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ theme: string }>;
}): Promise<Metadata> {
  const { theme: slug } = await params;
  const theme = findTheme(slug);
  return theme ? { title: theme.name } : {};
}

export default async function ViralThemePage({
  params,
}: {
  params: Promise<{ locale: string; theme: string }>;
}) {
  const { locale, theme: slug } = await params;
  const theme = findTheme(slug);
  if (!theme) notFound();

  setRequestLocale(locale);

  const tp = await getTranslations("product");
  const products = await getProductsByCollection(theme.name);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <Reveal>
          <Breadcrumb items={[{ label: "viral", href: "/viral" }, { label: theme.name }]} />
          <h1 className="sr-only">{theme.name}</h1>
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
