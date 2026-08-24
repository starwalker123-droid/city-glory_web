import type { Money, ProductImage } from "@/lib/shopify/types";

/**
 * A cart line. Products don't carry real variant IDs yet (see the Product
 * type's comments), so the line identity is composed from handle + the
 * selected size/color — different selections become different lines.
 */
export type CartItem = {
  id: string;
  handle: string;
  title: string;
  image: ProductImage;
  price: Money;
  size?: string;
  color?: string;
  quantity: number;
};

export function cartItemId(handle: string, size?: string, color?: string) {
  return [handle, size ?? "", color ?? ""].join("::");
}
