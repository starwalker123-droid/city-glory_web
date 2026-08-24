import type { Metadata } from "next";
import { Suspense } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAllNewsPosts } from "@/lib/news";
import { getFavoriteProducts } from "@/lib/shopify";
import { NewsBrowser } from "@/components/content/news-browser";
import { Reveal } from "@/components/motion/reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: t("clanky") };
}

export default async function ClankyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("nav");
  const tc = await getTranslations("clanky");
  const posts = await getAllNewsPosts();
  const promoProducts = await getFavoriteProducts();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <Reveal>
        <div className="max-w-2xl">
          <h1 className="sr-only">{t("clanky")}</h1>
          <p className="mt-3 text-muted">{tc("pageIntro")}</p>
        </div>
      </Reveal>

      <div className="mt-12">
        <Suspense fallback={null}>
          <NewsBrowser posts={posts} promoProducts={promoProducts} />
        </Suspense>
      </div>
    </div>
  );
}
