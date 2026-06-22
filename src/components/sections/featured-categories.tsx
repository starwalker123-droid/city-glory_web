import {
  Shirt,
  Image as ImageIcon,
  Magnet,
  LayoutGrid,
  Mail,
  ShoppingBag,
  Award,
  Sticker,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/motion/reveal";

// The eight flagship categories shown on the homepage. Icons are tasteful
// line placeholders until the custom illustrated set is ready.
const featured: { key: string; slug: string; Icon: LucideIcon }[] = [
  { key: "tricka", slug: "tricka", Icon: Shirt },
  { key: "printy", slug: "printy", Icon: ImageIcon },
  { key: "magnetky", slug: "magnetky", Icon: Magnet },
  { key: "kachlicky", slug: "kachlicky", Icon: LayoutGrid },
  { key: "pohladnice", slug: "pohladnice", Icon: Mail },
  { key: "tasky", slug: "tasky", Icon: ShoppingBag },
  { key: "odznaky", slug: "odznaky", Icon: Award },
  { key: "nalepky", slug: "nalepky", Icon: Sticker },
];

export function FeaturedCategories() {
  const t = useTranslations("home");
  const tCat = useTranslations("category");

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <Reveal>
        <h2 className="text-2xl font-semibold lowercase tracking-tight text-ink sm:text-3xl">
          {t("categoriesTitle")}
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {featured.map(({ key, slug, Icon }, i) => (
          <Reveal key={key} delay={i * 0.04}>
            <Link
              href={`/${slug}`}
              className="group flex h-full flex-col items-center gap-3 rounded-xl border border-border bg-surface px-4 py-8 text-center transition-colors hover:border-ink/20"
            >
              <span className="flex size-14 items-center justify-center rounded-full bg-cream text-ink transition-transform duration-300 group-hover:-translate-y-0.5">
                <Icon className="size-6" strokeWidth={1.5} aria-hidden />
              </span>
              <span className="text-sm lowercase text-ink">{tCat(key)}</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
