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
        <div className="max-w-xl">
          <h1 className="text-balance text-4xl font-semibold lowercase leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {t("heroHeading")}
          </h1>
          <p className="mt-6 text-lg text-muted">{t("heroSubtitle")}</p>
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

        {/* Decorative placeholder for hero imagery (Phase 1: real artwork). */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-mist lg:aspect-[5/6]">
          <div className="absolute inset-0 bg-gradient-to-br from-sky/40 via-lilac/30 to-sun/30" />
        </div>
      </div>
    </section>
  );
}
