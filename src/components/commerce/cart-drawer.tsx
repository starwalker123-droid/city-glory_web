"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { useCart } from "@/lib/cart/context";
import { cn, formatPrice } from "@/lib/utils";

/**
 * Slide-over cart — no separate /kosik page. Editing quantities, removing
 * lines and moving on to checkout all happen here, without leaving the page
 * the shopper was browsing. Keeps "add to cart → checkout" to two clicks.
 */
export function CartDrawer() {
  const t = useTranslations("cart");
  const tc = useTranslations("common");
  const { items, isOpen, close, subtotal, currencyCode, removeItem, setQuantity } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-ink/40"
            onClick={close}
            aria-hidden
          />
          <motion.div
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label={t("title")}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col bg-cream shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-6">
              <h2 className="text-lg lowercase tracking-tight text-ink">
                {t("title")}
                {items.length > 0 && (
                  <span className="ml-2 text-sm text-muted">({items.length})</span>
                )}
              </h2>
              <button
                type="button"
                onClick={close}
                aria-label={tc("close")}
                className="flex size-9 items-center justify-center text-ink/70 transition-colors hover:text-ink"
              >
                <X className="size-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
                <ShoppingBag className="size-8 text-muted" aria-hidden />
                <p className="text-sm text-muted">{t("empty")}</p>
                <button
                  type="button"
                  onClick={close}
                  className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "mt-2")}
                >
                  {t("continueShopping")}
                </button>
              </div>
            ) : (
              <>
                <ul className="flex-1 space-y-5 overflow-y-auto px-5 py-5 sm:px-6">
                  {items.map((item) => (
                    <li key={item.id} className="flex gap-4">
                      <div className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-mist">
                        <Image
                          src={item.image.url}
                          alt={item.image.alt}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>

                      <div className="flex flex-1 flex-col gap-1">
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-sm text-ink">{item.title}</span>
                          <span className="shrink-0 text-sm text-ink">
                            {formatPrice(item.price.amount * item.quantity, item.price.currencyCode)}
                          </span>
                        </div>
                        {(item.size || item.color) && (
                          <span className="text-xs text-muted">
                            {[item.size, item.color].filter(Boolean).join(" · ")}
                          </span>
                        )}

                        <div className="mt-auto flex items-center justify-between pt-1">
                          <div className="flex items-center rounded-md border border-border">
                            <button
                              type="button"
                              onClick={() => setQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              aria-label="−"
                              className="flex size-8 items-center justify-center text-ink transition-colors hover:bg-ink/[0.03] disabled:pointer-events-none disabled:opacity-30"
                            >
                              <Minus className="size-3" aria-hidden />
                            </button>
                            <span className="w-6 text-center text-xs text-ink">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => setQuantity(item.id, item.quantity + 1)}
                              aria-label="+"
                              className="flex size-8 items-center justify-center text-ink transition-colors hover:bg-ink/[0.03]"
                            >
                              <Plus className="size-3" aria-hidden />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-xs text-muted underline-offset-2 transition-colors hover:text-ink hover:underline"
                          >
                            {t("remove")}
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-border px-5 py-5 sm:px-6">
                  <div className="flex items-center justify-between text-sm text-ink">
                    <span>{t("subtotal")}</span>
                    <span className="font-medium">{formatPrice(subtotal, currencyCode)}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted">{t("shippingNote")}</p>

                  <Link
                    href="/pokladna"
                    onClick={close}
                    className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-4 w-full")}
                  >
                    {t("checkout")}
                  </Link>
                  <button
                    type="button"
                    onClick={close}
                    className="mt-2 w-full text-center text-sm text-muted underline-offset-2 transition-colors hover:text-ink hover:underline"
                  >
                    {t("continueShopping")}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
