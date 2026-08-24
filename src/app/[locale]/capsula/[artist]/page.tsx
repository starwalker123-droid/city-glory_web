import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { capsulaArtists } from "@/config/capsula";
import { getProductsByArtist } from "@/lib/shopify";
import { CategoryBrowser } from "@/components/commerce/category-browser";
import { WhyCityGlory } from "@/components/sections/why-city-glory";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/motion/reveal";

function findArtist(slug: string) {
  return capsulaArtists.find((a) => a.slug === slug);
}

export function generateStaticParams() {
  return capsulaArtists.map((a) => ({ artist: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ artist: string }>;
}): Promise<Metadata> {
  const { artist: slug } = await params;
  const artist = findArtist(slug);
  return artist ? { title: artist.name } : {};
}

export default async function CapsulaArtistPage({
  params,
}: {
  params: Promise<{ locale: string; artist: string }>;
}) {
  const { locale, artist: slug } = await params;
  const artist = findArtist(slug);
  if (!artist) notFound();

  setRequestLocale(locale);

  const tp = await getTranslations("product");
  const products = await getProductsByArtist(artist.name);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <Reveal>
          <Breadcrumb items={[{ label: "capsula", href: "/capsula" }, { label: artist.name }]} />
          <h1 className="sr-only">{artist.name}</h1>
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
