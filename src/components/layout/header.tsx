"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { mainNav } from "@/config/navigation";
import { Logo } from "./logo";
import { LanguageSwitcher } from "./language-switcher";

export function Header() {
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-cream/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
        {/* Left: mobile toggle + logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="text-ink/80 hover:text-ink lg:hidden"
            aria-label={tc("menu")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
          <Logo />
        </div>

        {/* Center: desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-sm text-ink/80 transition-colors hover:text-ink"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        {/* Right: utilities */}
        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageSwitcher />
          <button
            type="button"
            aria-label={tc("search")}
            className="text-ink/80 hover:text-ink"
          >
            <Search className="size-5" />
          </button>
          <Link
            href="/ucet"
            aria-label={tc("account")}
            className="hidden text-ink/80 hover:text-ink sm:block"
          >
            <User className="size-5" />
          </Link>
          <Link
            href="/oblubene"
            aria-label={tc("wishlist")}
            className="hidden text-ink/80 hover:text-ink sm:block"
          >
            <Heart className="size-5" />
          </Link>
          <button
            type="button"
            aria-label={tc("cart")}
            className="text-ink/80 hover:text-ink"
          >
            <ShoppingBag className="size-5" />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-border bg-cream lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-2">
            {mainNav.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm text-ink/80 hover:text-ink"
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
