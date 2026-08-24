"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { User, Heart, ShoppingBag, Menu, X, Sparkles, Flag, Palette } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useCart } from "@/lib/cart/context";
import { mainNav } from "@/config/navigation";
import { categoriesByParent } from "@/config/catalog";
import { capsulaArtists } from "@/config/capsula";
import { viralThemes } from "@/config/viral";
import { clothingIcons } from "@/components/icons/apparel";
import { accessoryIcons } from "@/components/icons/accessories";
import { Logo } from "./logo";
import { HeaderSearch } from "./header-search";
import { LanguageSwitcher } from "./language-switcher";
import { NavDropdown, type DropdownItem } from "./nav-dropdown";

export function Header() {
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const tCat = useTranslations("category");
  const tNewsCat = useTranslations("newsCategory");
  const [open, setOpen] = useState(false);
  const { count, open: openCart } = useCart();

  // Clothing sub-categories shown in the "oblečenie" hover dropdown.
  // MVP-only for now — non-launch categories stay in the catalog, just hidden here.
  const clothingItems = categoriesByParent("oblecenie")
    .filter((c) => c.mvp)
    .map((c) => ({
      key: c.key,
      href: `/${c.slug}`,
      label: tCat(c.key),
      Icon: clothingIcons[c.key],
    }));

  // Accessory sub-categories shown in the "doplnky" hover dropdown. Same
  // MVP-only scoping as clothing above.
  const accessoryItems = categoriesByParent("doplnky")
    .filter((c) => c.mvp)
    .map((c) => ({
      key: c.key,
      href: `/${c.slug}`,
      label: tCat(c.key),
      Icon: accessoryIcons[c.key],
    }));

  // Capsula artists shown in the "capsula" hover dropdown — same bubble as
  // oblečenie/doplnky, but plain names (no icons), linking to their own
  // product selection at /capsula/[artist].
  const capsulaItems = capsulaArtists.map((artist) => ({
    key: artist.slug,
    href: `/capsula/${artist.slug}`,
    label: artist.name,
  }));

  // Viral themes shown in the "viral" hover dropdown — same bubble as
  // capsula, linking to their own product selection at /viral/[theme].
  const viralItems = viralThemes.map((theme) => ({
    key: theme.slug,
    href: `/viral/${theme.slug}`,
    label: theme.name,
  }));

  // Article categories shown in the "články" hover dropdown — same bubble as
  // oblečenie/doplnky, but the trigger itself still links to /clanky (the
  // "všetky" view), since that hub page already exists and works.
  const clankyItems = [
    { key: "osobnosti", Icon: User },
    { key: "udalosti", Icon: Flag },
    { key: "zaujimavosti", Icon: Sparkles },
    { key: "umenie", Icon: Palette },
  ].map(({ key, Icon }) => ({
    key,
    href: `/clanky?kategoria=${key}`,
    label: tNewsCat(key),
    Icon,
  }));

  const dropdownItems: Record<string, DropdownItem[]> = {
    oblecenie: clothingItems,
    doplnky: accessoryItems,
    clanky: clankyItems,
    capsula: capsulaItems,
    viral: viralItems,
  };

  // Parents whose trigger label keeps its own working link (they have a real
  // landing page), rather than being purely a hover trigger.
  const dropdownHrefs: Record<string, string> = {
    clanky: "/clanky",
  };

  return (
    <header className="sticky top-0 z-50 bg-cream/85 backdrop-blur">
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
          {mainNav.map((item) => {
            const items = dropdownItems[item.key];
            return items ? (
              <NavDropdown
                key={item.key}
                label={t(item.key)}
                items={items}
                href={dropdownHrefs[item.key]}
              />
            ) : (
              <Link
                key={item.key}
                href={item.href}
                className="text-sm text-ink/80 transition-colors hover:text-ink"
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        {/* Right: utilities */}
        <div className="flex items-center gap-3 sm:gap-4">
          <HeaderSearch />
          <LanguageSwitcher />
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
            onClick={openCart}
            aria-label={tc("cart")}
            className="relative text-ink/80 hover:text-ink"
          >
            <ShoppingBag className="size-5" />
            {count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex size-4 items-center justify-center rounded-full bg-ink text-[10px] text-cream">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-border bg-cream lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-2">
            {mainNav.map((item) => {
              const items = dropdownItems[item.key];
              return (
                <li key={item.key}>
                  {items ? (
                    <>
                      {dropdownHrefs[item.key] ? (
                        <Link
                          href={dropdownHrefs[item.key]}
                          onClick={() => setOpen(false)}
                          className="block py-2.5 text-sm text-ink/80 hover:text-ink"
                        >
                          {t(item.key)}
                        </Link>
                      ) : (
                        <span className="block py-2.5 text-sm text-ink/80">
                          {t(item.key)}
                        </span>
                      )}
                      <ul className="mb-1.5 space-y-0.5 pl-3">
                        {items.map((sub) => (
                          <li key={sub.key}>
                            <Link
                              href={sub.href}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-2.5 py-2 text-sm text-ink/70 hover:text-ink"
                            >
                              {sub.Icon && (
                                <sub.Icon className="size-4 shrink-0" aria-hidden />
                              )}
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-2.5 text-sm text-ink/80 hover:text-ink"
                    >
                      {t(item.key)}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
