"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Expand/collapse row using the same chevron language as the homepage
 * teaser cards (articles, improvement ideas) — the chevron flips to point
 * up while open instead of swapping to separate icons.
 */
export function Accordion({
  title,
  children,
  defaultOpen = false,
  topBorder = false,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  /** Always show the top rule, even when this is the first item — for grid
   *  layouts (e.g. side-by-side columns) where each item needs its own rule
   *  instead of the usual "no rule before the first item" vertical-list rule. */
  topBorder?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={cn("border-t border-border py-4", !topBorder && "first:border-t-0 first:pt-0")}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-sm lowercase tracking-tight text-ink">{title}</span>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-ink transition-transform duration-200",
            open && "rotate-180",
          )}
          aria-hidden
        />
      </button>
      {open && (
        <div className="mt-3 text-sm leading-relaxed text-muted">{children}</div>
      )}
    </div>
  );
}
