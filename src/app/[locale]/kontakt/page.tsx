import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Reveal } from "@/components/motion/reveal";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ContactForm } from "@/components/sections/contact-form";
import { ContactMotifs } from "@/components/sections/contact-motifs";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/config/contact";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });
  return { title: t("kontakt") };
}

export default async function KontaktPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("nav");
  const tk = await getTranslations("kontakt");
  const linkClass =
    "text-sm text-ink underline-offset-4 transition-colors hover:text-muted hover:underline";

  return (
    <Fragment>
      <div className="mx-auto max-w-3xl px-4 pt-8 sm:pt-10">
        <Reveal>
          <Breadcrumb items={[{ label: t("kontakt") }]} />
        </Reveal>

        <Reveal>
          <h1 className="mt-2 text-3xl font-semibold lowercase tracking-tight text-ink sm:text-4xl">
            {t("kontakt")}
          </h1>
          <p className="mt-3 max-w-lg text-lg text-muted">{tk("tagline")}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
              {CONTACT_EMAIL}
            </a>
            <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className={linkClass}>
              {CONTACT_PHONE}
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-start md:gap-14">
          <Reveal>
            <h2 className="text-2xl font-semibold lowercase tracking-tight text-ink">
              {tk("aboutTitle")}
            </h2>
            <div className="mt-6 space-y-5">
              <p className="text-base leading-relaxed text-ink">{tk("about.p1")}</p>
              <p className="text-base leading-relaxed text-ink">{tk("about.p2")}</p>
              <p className="text-base leading-relaxed text-ink">{tk("about.p3")}</p>
              <p className="text-base leading-relaxed text-ink">{tk("about.p4")}</p>
              <p className="text-base leading-relaxed text-ink">{tk("about.p5")}</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-mist">
              <Image
                src="https://images.unsplash.com/photo-1667831083048-4ddd6a8cd4db?auto=format&fit=crop&w=1200&q=70"
                alt={tk("photoAlt")}
                fill
                sizes="(min-width: 768px) 384px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </div>

      <ContactMotifs />

      <div className="mt-4">
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </Fragment>
  );
}
