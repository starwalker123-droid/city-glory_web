import type { ComponentType, SVGProps } from "react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/reveal";
import {
  ArtworkIcon,
  StoriesIcon,
  MaterialsIcon,
  ReturnsIcon,
} from "@/components/icons/why-city-glory";

const items: { key: string; Icon: ComponentType<SVGProps<SVGSVGElement>> }[] = [
  { key: "artwork", Icon: ArtworkIcon },
  { key: "stories", Icon: StoriesIcon },
  { key: "materials", Icon: MaterialsIcon },
  { key: "returns", Icon: ReturnsIcon },
];

export function WhyCityGlory() {
  const t = useTranslations("home");

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ key, Icon }, i) => (
            <Reveal key={key} delay={i * 0.06}>
              <div className="flex flex-col items-center gap-4 text-center">
                <span className="flex size-20 items-center justify-center rounded-full bg-cream text-ink">
                  <Icon className="size-9" aria-hidden />
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
