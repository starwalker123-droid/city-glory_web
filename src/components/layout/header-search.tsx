"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useTranslations } from "next-intl";

/** Search icon that expands into a text field on click; collapses on close, Escape, or outside click. */
export function HeaderSearch() {
  const t = useTranslations("common");
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const reduceMotion = useReducedMotion();
  const inputId = useId();

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(e: PointerEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative flex items-center">
      <button
        ref={buttonRef}
        type="button"
        aria-label={open ? t("close") : t("search")}
        aria-expanded={open}
        aria-controls={inputId}
        onClick={() => setOpen((v) => !v)}
        className="text-ink/80 hover:text-ink"
      >
        {open ? <X className="size-5" /> : <Search className="size-5" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 220, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-full z-20 ml-2 overflow-hidden"
          >
            <input
              id={inputId}
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("search")}
              aria-label={t("search")}
              className="h-9 w-[220px] rounded-full border border-border bg-surface px-4 text-sm text-ink placeholder:text-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
