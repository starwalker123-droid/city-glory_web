import { setRequestLocale } from "next-intl/server";
import { viralThemes } from "@/config/viral";
import { Link } from "@/i18n/navigation";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/motion/reveal";

export const metadata = { title: "viral" };

export default async function ViralPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <Reveal>
        <Breadcrumb items={[{ label: "viral" }]} />
        <div className="grid max-w-md grid-cols-2 gap-x-8 gap-y-4">
          {viralThemes.map((theme) => (
            <Link
              key={theme.slug}
              href={`/viral/${theme.slug}`}
              className="text-lg lowercase tracking-tight text-ink transition-colors hover:text-muted"
            >
              {theme.name}
            </Link>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
