import { setRequestLocale } from "next-intl/server";
import { capsulaArtists } from "@/config/capsula";
import { Link } from "@/i18n/navigation";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/motion/reveal";

export const metadata = { title: "capsula" };

export default async function CapsulaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <Reveal>
        <Breadcrumb items={[{ label: "capsula" }]} />
        <div className="grid max-w-md grid-cols-2 gap-x-8 gap-y-4">
          {capsulaArtists.map((artist) => (
            <Link
              key={artist.slug}
              href={`/capsula/${artist.slug}`}
              className="text-lg lowercase tracking-tight text-ink transition-colors hover:text-muted"
            >
              {artist.name}
            </Link>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
