import { Palette, BookOpen, Gem, RotateCcw, type LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/reveal";

const items: { key: string; Icon: LucideIcon }[] = [
  { key: "artwork", Icon: Palette },
  { key: "stories", Icon: BookOpen },
  { key: "materials", Icon: Gem },
  { key: "returns", Icon: RotateCcw },
];

export function WhyCityGlory() {
  const t = useTranslations("home");

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <Reveal>
          <h2 className="text-2xl font-semibold lowercase tracking-tight text-ink sm:text-3xl">
            {t("whyTitle")}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ key, Icon }, i) => (
            <Reveal key={key} delay={i * 0.06}>
              <div className="flex flex-col gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-cream text-ink">
                  <Icon className="size-5" strokeWidth={1.5} aria-hidden />
                </span>
                <h3 className="text-base font-medium lowercase text-ink">
                  {t(`why.${key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {t(`why.${key}.text`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
