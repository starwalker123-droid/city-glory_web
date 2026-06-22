import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  const t = useTranslations("home");
  const tc = useTranslations("common");

  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Rendered immediately — this is the LCP block, so no entrance gate. */}
        <div className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            {t("heroEyebrow")}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold lowercase leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {t("heroHeading")}
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted">{t("heroSubtitle")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/spoznavanie"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
            >
              {tc("discover")}
            </Link>
            <Link
              href="/oblecenie"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
            >
              {tc("shop")}
            </Link>
          </div>
        </div>

        {/* Artistic placeholder for hero imagery (Phase 1: real artwork). */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-inset ring-ink/5 lg:aspect-[5/6]">
          <div className="absolute inset-0 bg-gradient-to-br from-sky/50 via-cream to-lilac/40" />
          <div
            aria-hidden
            className="absolute -left-10 top-12 size-48 rounded-full bg-sun/40 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute bottom-10 right-8 size-56 rounded-full bg-sky/45 blur-3xl"
          />
        </div>
      </div>
    </section>
  );
}
