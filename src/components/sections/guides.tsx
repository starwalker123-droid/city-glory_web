import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/reveal";
import { GuideCard } from "@/components/sections/guide-card";
import { guides } from "@/config/guides";

export async function Guides() {
  const t = await getTranslations("home");

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <Reveal>
        <p className="text-center text-xs uppercase tracking-wide text-muted">
          {t("guidesEyebrow")}
        </p>
      </Reveal>

      <div className="mt-6 grid grid-cols-2 items-start gap-x-4 gap-y-8 sm:gap-x-5 lg:grid-cols-4">
        {guides.map((guide, i) => (
          <Reveal key={guide.key} delay={i * 0.05}>
            <GuideCard
              guide={guide}
              focus={t(`guides.${guide.key}.focus`)}
              promo={guide.hasPromo ? t(`guides.${guide.key}.promo`) : undefined}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
