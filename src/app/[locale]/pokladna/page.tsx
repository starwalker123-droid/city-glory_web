"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart/context";
import { formatPrice } from "@/lib/utils";

const inputClass =
  "h-11 w-full rounded-md border border-border bg-cream px-4 text-sm text-ink outline-none placeholder:text-muted focus:border-ink/30 focus:ring-2 focus:ring-ring/40";

const SHIPPING_FEE = 3.9;

/**
 * One page, everything at once — contact, delivery, payment method and the
 * order summary all visible together (no wizard steps). Placing an order
 * just clears the cart and swaps in a confirmation; there's no real payment
 * processor yet (see Product/cart type comments — that lands with the
 * Shopify Storefront API in Phase 1).
 */
export default function CheckoutPage() {
  const t = useTranslations("checkout");
  const { items, subtotal, currencyCode, removeItem } = useCart();
  const [payment, setPayment] = useState<"card" | "cod">("card");
  const [orderNumber, setOrderNumber] = useState<string | null>(null);

  const total = items.length > 0 ? subtotal + SHIPPING_FEE : 0;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setOrderNumber(`CG-${Math.floor(100000 + Math.random() * 900000)}`);
    items.forEach((item) => removeItem(item.id));
  }

  if (orderNumber) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center sm:py-28">
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-surface text-ink">
          <Check className="size-6" strokeWidth={2.5} aria-hidden />
        </span>
        <h1 className="mt-4 text-2xl font-semibold lowercase tracking-tight text-ink sm:text-3xl">
          {t("successTitle")}
        </h1>
        <p className="mt-3 text-muted">{t("successText", { number: orderNumber })}</p>
        <Link href="/" className="mt-8 inline-block">
          <Button type="button">{t("backToShop")}</Button>
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center sm:py-28">
        <h1 className="text-2xl font-semibold lowercase tracking-tight text-ink sm:text-3xl">
          {t("emptyTitle")}
        </h1>
        <p className="mt-3 text-muted">{t("emptyText")}</p>
        <Link href="/" className="mt-8 inline-block">
          <Button type="button">{t("backToShop")}</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
      <h1 className="text-2xl font-semibold lowercase tracking-tight text-ink sm:text-3xl">
        {t("title")}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-8 grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start"
      >
        <div className="space-y-8">
          <section>
            <h2 className="text-xs uppercase tracking-wide text-muted">{t("contactTitle")}</h2>
            <input
              type="email"
              required
              placeholder={`${t("email")} *`}
              aria-label={t("email")}
              className={`${inputClass} mt-3`}
            />
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-wide text-muted">{t("deliveryTitle")}</h2>
            <div className="mt-3 flex flex-col gap-3">
              <input
                type="text"
                required
                placeholder={`${t("fullName")} *`}
                aria-label={t("fullName")}
                className={inputClass}
              />
              <input
                type="text"
                required
                placeholder={`${t("address")} *`}
                aria-label={t("address")}
                className={inputClass}
              />
              <div className="flex gap-3">
                <input
                  type="text"
                  required
                  placeholder={`${t("city")} *`}
                  aria-label={t("city")}
                  className={inputClass}
                />
                <input
                  type="text"
                  required
                  placeholder={`${t("zip")} *`}
                  aria-label={t("zip")}
                  className={`${inputClass} max-w-32`}
                />
              </div>
              <input
                type="tel"
                required
                placeholder={`${t("phone")} *`}
                aria-label={t("phone")}
                className={inputClass}
              />
            </div>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-wide text-muted">{t("paymentTitle")}</h2>
            <div className="mt-3 flex flex-col gap-2.5">
              <label
                className={`flex cursor-pointer items-center gap-2.5 rounded-md border px-4 py-3 text-sm text-ink transition-colors ${payment === "card" ? "border-ink/30" : "border-border"}`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={payment === "card"}
                  onChange={() => setPayment("card")}
                  className="size-4 accent-ink"
                />
                {t("paymentCard")}
              </label>
              <label
                className={`flex cursor-pointer items-center gap-2.5 rounded-md border px-4 py-3 text-sm text-ink transition-colors ${payment === "cod" ? "border-ink/30" : "border-border"}`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={payment === "cod"}
                  onChange={() => setPayment("cod")}
                  className="size-4 accent-ink"
                />
                {t("paymentCod")}
              </label>
            </div>
          </section>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.id} className="flex gap-3">
                <div className="relative size-14 shrink-0 overflow-hidden rounded-md bg-mist">
                  <Image
                    src={item.image.url}
                    alt={item.image.alt}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                  <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-ink text-[10px] text-cream">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex flex-1 flex-col text-sm">
                  <span className="text-ink">{item.title}</span>
                  {(item.size || item.color) && (
                    <span className="text-xs text-muted">
                      {[item.size, item.color].filter(Boolean).join(" · ")}
                    </span>
                  )}
                </div>
                <span className="shrink-0 text-sm text-ink">
                  {formatPrice(item.price.amount * item.quantity, item.price.currencyCode)}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
            <div className="flex items-center justify-between text-muted">
              <span>{t("subtotal")}</span>
              <span>{formatPrice(subtotal, currencyCode)}</span>
            </div>
            <div className="flex items-center justify-between text-muted">
              <span>{t("shipping")}</span>
              <span>{formatPrice(SHIPPING_FEE, currencyCode)}</span>
            </div>
            <div className="flex items-center justify-between border-t border-border pt-2 text-base text-ink">
              <span>{t("total")}</span>
              <span className="font-medium">{formatPrice(total, currencyCode)}</span>
            </div>
          </div>

          <Button type="submit" size="lg" className="mt-6 w-full">
            {t("submit")}
          </Button>
        </div>
      </form>
    </div>
  );
}
