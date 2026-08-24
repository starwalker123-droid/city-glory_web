"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import type { ProductBadge } from "@/lib/shopify/types";

type BadgeKey = ProductBadge | "akcia";
type BadgeVariant = "overlay" | "outline";

// Soft brand-hue tint per badge type — background + a deep same-hue text
// color, kept muted rather than the raw brand hex. Badge types not listed
// here (limitovane, novinka) fall back to the neutral variant chrome.
const badgeTone: Partial<Record<BadgeKey, string>> = {
  viral: "bg-sun-soft text-sun-deep",
  capsula: "bg-lilac-soft text-lilac-deep",
  akcia: "bg-sky-soft text-sky-deep",
};

const fallbackTone: Record<BadgeVariant, string> = {
  overlay: "bg-cream/90 text-ink",
  outline: "border border-border text-ink",
};

/** Small rounded pill for viral/capsula/akcia/limitovane/novinka —
 *  "overlay" sits on top of a product photo, "outline" sits directly on
 *  the page background (e.g. the PDP badge stack beside the gallery). */
export function ProductBadgePill({
  badge,
  variant = "overlay",
  className,
}: {
  badge: BadgeKey;
  variant?: BadgeVariant;
  className?: string;
}) {
  const tBadge = useTranslations("badge");

  return (
    <span
      className={cn(
        "rounded-full px-2.5 py-1 text-[11px] lowercase tracking-wide",
        badgeTone[badge] ?? fallbackTone[variant],
        className,
      )}
    >
      {tBadge(badge)}
    </span>
  );
}
