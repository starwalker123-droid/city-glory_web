"use client";

import type { ComponentType, SVGProps } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n/navigation";

export type DropdownItem = {
  key: string;
  href: string;
  label: string;
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

/**
 * Desktop nav item with a hover/focus dropdown. Opens on pointer hover and on
 * keyboard focus (group-focus-within), so it's accessible without JS state.
 * The trigger is a button by default — most of these parents have no page of
 * their own, only the sub-items listed below do. Pass `href` for the rare
 * parent (e.g. clanky) that has a real landing page of its own.
 * The `pt-3` wrapper bridges the gap between trigger and panel so the menu
 * stays open while the pointer travels to it.
 */
export function NavDropdown({
  label,
  items,
  href,
}: {
  label: string;
  items: DropdownItem[];
  href?: string;
}) {
  const triggerClass =
    "inline-flex items-center gap-1 text-sm text-ink/80 transition-colors hover:text-ink";

  return (
    <div className="group relative">
      {href ? (
        <Link href={href} className={triggerClass}>
          {label}
          <ChevronDown className="size-3.5 text-ink/50" aria-hidden />
        </Link>
      ) : (
        <button type="button" className={triggerClass}>
          {label}
          <ChevronDown className="size-3.5 text-ink/50" aria-hidden />
        </button>
      )}

      <div className="invisible absolute left-0 top-full z-50 translate-y-1 pt-3 opacity-0 transition-[opacity,transform] duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none">
        <ul className="grid min-w-[400px] grid-cols-2 gap-1 rounded-xl border border-border bg-surface p-2 shadow-[0_8px_24px_rgba(45,45,45,0.08)]">
          {items.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-ink transition-colors hover:bg-cream"
              >
                {item.Icon && (
                  <item.Icon className="size-5 shrink-0 text-ink/70" aria-hidden />
                )}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
