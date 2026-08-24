import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/motion/reveal";

const motifs = [
  {
    handle: "ufo-magnetka",
    title: "UFO",
    image: "/products/vybrane-motivy/ufo.jpg",
  },
  {
    handle: "korunovacne-klenoty-magnetka",
    title: "Korunovačné klenoty",
    image: "/products/vybrane-motivy/korunovacne-klenoty.jpg",
  },
  {
    handle: "slovensky-rozhlas-magnetka",
    title: "Slovenský rozhlas",
    image: "/products/vybrane-motivy/slovensky-rozhlas.jpg",
  },
  {
    handle: "metro-magnetka",
    title: "Metro Bratislava",
    image: "/products/vybrane-motivy/metro-bratislava.jpg",
  },
] as const;

export function ContactMotifs() {
  const tk = useTranslations("kontakt");

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
      <Reveal>
        <h2 className="text-2xl font-semibold lowercase tracking-tight text-ink">
          {tk("motifsTitle")}
        </h2>
      </Reveal>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
        {motifs.map((motif, i) => (
          <Reveal key={motif.handle} delay={i * 0.05}>
            <Link href={`/produkt/${motif.handle}`} className="group block">
              <div className="aspect-square rounded-xl border border-border bg-surface p-2.5 transition-colors group-hover:border-ink/20">
                <div className="relative h-full w-full overflow-hidden rounded-lg bg-mist">
                  <Image
                    src={motif.image}
                    alt={motif.title}
                    fill
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <p className="mt-3 text-center text-sm text-ink">{motif.title}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
