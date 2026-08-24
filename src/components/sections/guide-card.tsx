import Image from "next/image";
import { Info, Mail, Phone } from "lucide-react";
import type { Guide } from "@/config/guides";

export function GuideCard({
  guide,
  focus,
  promo,
}: {
  guide: Guide;
  focus: string;
  promo?: string;
}) {
  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-lg bg-mist">
        <Image
          src={guide.image}
          alt={guide.name}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-4 sm:p-5">
          <span className="text-[11px] uppercase tracking-wide text-cream/70">{focus}</span>
          <span className="text-base lowercase tracking-tight text-cream sm:text-lg">
            {guide.name}
          </span>
        </div>
      </div>

      <div className="mt-3 space-y-1.5 text-sm">
        <div className="flex items-center gap-2">
          <a
            href={`tel:${guide.phone.replace(/\s/g, "")}`}
            className="flex flex-1 items-center gap-2 text-ink transition-colors hover:text-ink/70"
          >
            <Phone className="size-3.5 shrink-0 text-muted" aria-hidden />
            {guide.phone}
          </a>

          {/* Info dot — round like a city-centre info plaque, promo text on hover */}
          {promo && (
            <span className="group/info relative shrink-0">
              <span
                aria-hidden
                className="flex size-5 items-center justify-center rounded-full border border-ink/30 text-ink/70"
              >
                <Info className="size-3" aria-hidden />
              </span>
              <span className="sr-only">{promo}</span>
              <span
                role="tooltip"
                className="pointer-events-none absolute right-0 top-full z-20 mt-1.5 w-56 rounded-md border border-border bg-ink px-3 py-2 text-xs leading-relaxed text-cream opacity-0 shadow-sm transition-opacity duration-150 group-hover/info:opacity-100"
              >
                {promo}
              </span>
            </span>
          )}
        </div>

        <a
          href={`mailto:${guide.email}`}
          className="flex items-center gap-2 text-ink transition-colors hover:text-ink/70"
        >
          <Mail className="size-3.5 shrink-0 text-muted" aria-hidden />
          <span className="truncate">{guide.email}</span>
        </a>
        <p className="text-muted">{guide.languages.join(" | ")}</p>
      </div>
    </div>
  );
}
