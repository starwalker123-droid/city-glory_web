import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/hero";
import { FlagshipCategories } from "@/components/sections/flagship-categories";
import { WhyCityGlory } from "@/components/sections/why-city-glory";
import { Favorites } from "@/components/sections/favorites";
import { ArticlesPreview } from "@/components/sections/articles-preview";
import { ImprovementIdeas } from "@/components/sections/improvement-ideas";
import { Guides } from "@/components/sections/guides";
import { LikedProjects } from "@/components/sections/liked-projects";
import { Newsletter } from "@/components/sections/newsletter";
import { SectionWave } from "@/components/ui/section-wave";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SectionWave />
      <Hero />
      <SectionWave />
      <FlagshipCategories />
      <SectionWave />
      <WhyCityGlory />
      <Favorites />
      <ArticlesPreview />
      <SectionWave />
      <ImprovementIdeas />
      <Guides />
      <LikedProjects />
      <Newsletter />
    </>
  );
}
