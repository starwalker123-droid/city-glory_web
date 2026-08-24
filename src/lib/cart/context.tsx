"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { cartItemId, type CartItem } from "./types";

const STORAGE_KEY = "city-glory-cart";

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  count: number;
  subtotal: number;
  currencyCode: string;
  /** Adds a line, or increases its quantity if the same handle/size/color already exists. Opens the drawer. */
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  open: () => void;
  close: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Load any previously saved cart once, on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // Corrupt or inaccessible storage — start with an empty cart.
    }
    setHydrated(true);
  }, []);

  // Persist on every change, once the initial load above has happened —
  // otherwise this would immediately overwrite the saved cart with [].
  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + item.price.amount * item.quantity, 0);
    const currencyCode = items[0]?.price.currencyCode ?? "EUR";

    return {
      items,
      isOpen,
      count,
      subtotal,
      currencyCode,
      addItem: (item, quantity = 1) => {
        setItems((prev) => {
          const existing = prev.find((line) => line.id === item.id);
          if (existing) {
            return prev.map((line) =>
              line.id === item.id ? { ...line, quantity: line.quantity + quantity } : line,
            );
          }
          return [...prev, { ...item, quantity }];
        });
        setIsOpen(true);
      },
      removeItem: (id) => setItems((prev) => prev.filter((line) => line.id !== id)),
      setQuantity: (id, quantity) => {
        if (quantity < 1) return;
        setItems((prev) =>
          prev.map((line) => (line.id === id ? { ...line, quantity } : line)),
        );
      },
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    };
  }, [items, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}

export { cartItemId };
export type { CartItem };
