import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/hero";
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
      <FeaturedProducts />
      <Newsletter />
    </>
  );
}
