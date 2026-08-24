"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 7000;

const slides = [
  { key: "motifs", href: "/oblecenie", gradient: "from-sky/50 via-cream to-lilac/40" },
  { key: "capsula", href: "/capsula", gradient: "from-lilac/50 via-cream to-sky/30" },
  { key: "viral", href: "/viral", gradient: "from-sun/50 via-cream to-lilac/30" },
] as const;

/**
 * Auto-rotating hero carousel — slow autoplay, paused on hover/focus, plus
 * manual arrows and dots (same interaction language as the announcement
 * bar). The first slide skips its entrance transition so it never delays
 * the LCP heading; only slide changes after mount animate.
 */
export function Hero() {
  const t = useTranslations("home");
  const tc = useTranslations("common");
  const reduceMotion = useReducedMotion();
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const [hovered, setHovered] = useState(false);
  const [tabHidden, setTabHidden] = useState(
    () => typeof document !== "undefined" && document.hidden,
  );
  const skipEntrance = useRef(true);

  const step = useCallback((delta: 1 | -1) => {
    setSlide(([current]) => [(current + delta + slides.length) % slides.length, delta]);
  }, []);

  const jump = useCallback((next: number) => {
    setSlide(([current]) => [next, next > current ? 1 : -1]);
  }, []);

  useEffect(() => {
    skipEntrance.current = false;
  }, [index]);

  // Pausing while the tab is backgrounded avoids rAF-throttled slides that
  // get stuck mid-fade and only resolve once the tab regains focus.
  useEffect(() => {
    function onVisibility() {
      setTabHidden(document.hidden);
    }
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    if (hovered || tabHidden || reduceMotion || slides.length <= 1) return;
    const id = setInterval(() => step(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [hovered, tabHidden, reduceMotion, step]);

  const current = slides[index];
  const skip = skipEntrance.current || reduceMotion;

  return (
    <section
      className="bg-cream"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-16">
          {/* Rendered immediately — this is the LCP block, so the first slide skips its entrance transition. */}
          <div className="max-w-xl">
            <motion.div
              key={current.key}
              initial={skip ? false : { x: direction > 0 ? 24 : -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.4, ease: "easeOut" }}
              aria-live="polite"
            >
              <h1 className="text-balance text-3xl font-semibold lowercase leading-[1.05] tracking-tight text-ink sm:text-4xl lg:text-5xl">
                {t(`heroSlides.${current.key}.heading`)}
              </h1>
              <p className="mt-6 max-w-md text-lg text-muted">
                {t(`heroSlides.${current.key}.subtitle`)}
              </p>
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={current.href}
                className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
              >
                {tc("shop")}
              </Link>
            </div>
          </div>

          {/* Artistic placeholder for hero imagery (Phase 1: real artwork). */}
          <div className="relative mx-auto aspect-[3/2] w-full max-w-md overflow-hidden rounded-lg ring-1 ring-inset ring-ink/5 lg:mx-0 lg:max-w-lg">
            <motion.div
              key={current.key}
              initial={skip ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.4, ease: "easeOut" }}
              className={cn("absolute inset-0 bg-gradient-to-br", current.gradient)}
            >
              <div
                aria-hidden
                className="absolute -left-6 top-6 size-28 rounded-full bg-sun/40 blur-3xl"
              />
              <div
                aria-hidden
                className="absolute bottom-4 right-4 size-36 rounded-full bg-sky/45 blur-3xl"
              />
            </motion.div>
          </div>
        </div>

        {slides.length > 1 && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label={t("heroPrev")}
              className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-ink/70 transition-colors hover:border-ink/30 hover:text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <ChevronLeft className="size-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {slides.map((s, i) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => jump(i)}
                  aria-label={t("heroGoTo", { number: i + 1 })}
                  aria-current={i === index}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === index ? "w-4 bg-ink/70" : "w-1.5 bg-ink/20 hover:bg-ink/40",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => step(1)}
              aria-label={t("heroNext")}
              className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-ink/70 transition-colors hover:border-ink/30 hover:text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
