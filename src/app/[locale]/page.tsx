import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/hero";
import { FeaturedCategories } from "@/components/sections/featured-categories";
import { WhyCityGlory } from "@/components/sections/why-city-glory";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { Newsletter } from "@/components/sections/newsletter";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <FeaturedCategories />
      <WhyCityGlory />
      <FeaturedProducts />
      <Newsletter />
    </>
  );
}
