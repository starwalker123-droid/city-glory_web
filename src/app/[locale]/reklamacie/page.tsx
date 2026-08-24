import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Reveal } from "@/components/motion/reveal";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { LegalPage } from "@/components/ui/legal-page";
import { reklamacie } from "@/config/legal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "footer" });
  return { title: t("complaints") };
}

export default async function ReklamaciePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("footer");

  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 pt-8 sm:pt-10">
      <Reveal>
        <Breadcrumb items={[{ label: t("complaints") }]} />
      </Reveal>

      <Reveal>
        <h1 className="mt-2 text-3xl font-semibold lowercase tracking-tight text-ink sm:text-4xl">
          {t("complaints")}
        </h1>
      </Reveal>

      <Reveal>
        <div className="mt-10">
          <LegalPage document={reklamacie} />
        </div>
      </Reveal>
    </div>
  );
}
