import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Reveal } from "@/components/motion/reveal";
import { AlternatingContent } from "@/components/content/alternating-content";
import { buttonVariants } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/config/contact";

// Real product photography standing in for "the kind of custom work we do" —
// not the actual Hotel Carlton pieces (no photos of that collaboration yet),
// just a sense of the range of objects a custom motif can end up on.
const images = [
  {
    url: "/products/korunovacne-klenoty-tricko.png",
    alt: "Tričko s vlastným motívom",
    width: 823,
    height: 823,
  },
  {
    url: "/products/modry-kostolik-kachlicka.jpg",
    alt: "Ručne glazovaná kachlička",
    width: 700,
    height: 700,
  },
  {
    url: "/products/ufo-magnetka.jpg",
    alt: "Magnetka s vlastným motívom",
    width: 617,
    height: 823,
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: t("preFirmy") };
}

export default async function PreFirmyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("nav");
  const tp = await getTranslations("preFirmyPage");

  const bodyParagraphs = [
    tp("body.p1"),
    tp("body.p2"),
    tp("body.p3"),
    tp("body.p4"),
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
      <Reveal>
        <h1 className="text-3xl font-semibold lowercase tracking-tight text-ink sm:text-4xl">
          {t("preFirmy")}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{tp("intro")}</p>
      </Reveal>

      <div className="mt-10">
        <AlternatingContent paragraphs={bodyParagraphs} images={images} />
      </div>

      <Reveal>
        <div className="mt-16 rounded-2xl border border-border bg-surface px-6 py-12 text-center sm:px-12">
          <h2 className="text-2xl font-semibold lowercase tracking-tight text-ink">
            {tp("ctaTitle")}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted">{tp("ctaText")}</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={buttonVariants({ variant: "primary", size: "lg", className: "mt-6" })}
          >
            {tp("ctaButton")}
          </a>
        </div>
      </Reveal>
    </div>
  );
}
