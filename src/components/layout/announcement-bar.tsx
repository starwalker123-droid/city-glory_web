"use client";

import { useCallback, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { WavePattern } from "@/components/icons/wave-pattern";
import { cn } from "@/lib/utils";

/**
 * Single-slide announcement carousel (evolved from the stacked-bars sketch).
 * Manual only — arrows and dots switch slides, no autoplay. Controls use
 * currentColor/ink so they stay legible as the background cycles through
 * ink, lilac and sky.
 *
 * The slide swap is enter-only (keyed remount, no AnimatePresence exit): a
 * coordinated exit-then-enter left the text and the bg/dots one step out of
 * sync under fast-refresh, so the old slide now disappears instantly and the
 * new one fades/slides in.
 */
const bars = [
  { key: "limited", className: "bg-ink text-cream" },
  { key: "promo", className: "bg-lilac text-ink" },
  { key: "preorder", className: "bg-sky text-ink" },
] as const;

export function AnnouncementBar() {
  const t = useTranslations("announcement");
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const reduceMotion = useReducedMotion();

  const step = useCallback((delta: 1 | -1) => {
    setSlide(([current]) => [(current + delta + bars.length) % bars.length, delta]);
  }, []);

  const jump = useCallback((next: number) => {
    setSlide(([current]) => [next, next > current ? 1 : -1]);
  }, []);

  const current = bars[index];

  return (
    <div className={cn("transition-colors duration-500", current.className)}>
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-2 py-1.5 sm:px-4">
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label={t("previous")}
          className="shrink-0 rounded-full p-1 opacity-60 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current"
        >
          <ChevronLeft className="size-3.5" aria-hidden />
        </button>

        <div className="flex flex-1 items-center justify-center overflow-hidden">
          <motion.div
            key={current.key}
            initial={
              reduceMotion ? false : { x: direction > 0 ? 16 : -16, opacity: 0 }
            }
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
            className="flex items-center gap-2"
          >
            <WavePattern className="size-3.5 shrink-0 opacity-70" />
            <p className="text-center text-xs tracking-wide">{t(current.key)}</p>
          </motion.div>
        </div>

        <button
          type="button"
          onClick={() => step(1)}
          aria-label={t("next")}
          className="shrink-0 rounded-full p-1 opacity-60 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current"
        >
          <ChevronRight className="size-3.5" aria-hidden />
        </button>
      </div>

      <div className="flex items-center justify-center gap-1.5 bg-cream py-1.5">
        {bars.map((bar, i) => (
          <button
            key={bar.key}
            type="button"
            onClick={() => jump(i)}
            aria-label={t("goTo", { number: i + 1 })}
            aria-current={i === index}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index ? "w-4 bg-ink/70" : "w-1.5 bg-ink/20 hover:bg-ink/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}
