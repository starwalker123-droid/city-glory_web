import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/motion/reveal";

// Teaser cards for a future "novinky" (ideas for improvement) section —
// same card language as ArticlesPreview: image, headline, short text,
// expansion arrow only, every card links to the hub for now.
const ideas = [
  {
    key: "hlasovanie",
    image: {
      url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=70",
      alt: "Panoráma mesta",
    },
  },
  {
    key: "spatnaVazba",
    image: {
      url: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=70",
      alt: "Detail architektúry",
    },
  },
] as const;

export async function ImprovementIdeas() {
  const t = await getTranslations("home");

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <Reveal>
        <p className="text-center text-xs uppercase tracking-wide text-muted">
          {t("novinkyEyebrow")}
        </p>
      </Reveal>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {ideas.map(({ key, image }, i) => (
          <Reveal key={key} delay={i * 0.06}>
            <Link
              href="/novinky"
              className="group block overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-ink/20"
            >
              <div className="relative aspect-[21/9] overflow-hidden">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-1.5 p-3 sm:p-4">
                <h3 className="text-base lowercase tracking-tight text-ink sm:text-lg">
                  {t(`novinky.${key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {t(`novinky.${key}.excerpt`)}
                </p>
                <ChevronDown
                  className="mt-1.5 size-4 text-ink transition-transform duration-200 group-hover:translate-y-0.5"
                  aria-hidden
                />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
