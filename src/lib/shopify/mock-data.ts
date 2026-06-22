import type { Product } from "./types";

const img = (id: string, alt: string): Product["images"][number] => ({
  url: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=70`,
  alt,
  width: 900,
  height: 1125,
});

/**
 * Temporary mock catalogue used until the Shopify Storefront API is connected.
 * Replace `@/lib/shopify` data functions with real queries — these shapes match.
 */
export const mockProducts: Product[] = [
  {
    id: "gid://mock/Product/1",
    handle: "bratislava-modre-strechy-print",
    title: "Modré strechy — print",
    description:
      "Ilustrovaný pohľad na strechy bratislavského Starého Mesta. Tlač na archívnom papieri.",
    price: { amount: 29, currencyCode: "EUR" },
    images: [img("photo-1513635269975-59663e0ac1ad", "Modré strechy starého mesta")],
    category: "printy",
    city: "Bratislava",
    collection: "Staré Mesto",
    badges: ["novinka"],
    available: true,
  },
  {
    id: "gid://mock/Product/2",
    handle: "dunaj-magnetka",
    title: "Dunaj — magnetka",
    description: "Keramická magnetka inšpirovaná zákrutami Dunaja.",
    price: { amount: 8, currencyCode: "EUR" },
    images: [img("photo-1518005020951-eccb494ad742", "Rieka Dunaj")],
    category: "magnetky",
    city: "Bratislava",
    available: true,
  },
  {
    id: "gid://mock/Product/3",
    handle: "kachlicka-secesia",
    title: "Secesia — kachlička",
    description: "Ručne glazovaná kachlička s motívom secesnej fasády.",
    price: { amount: 18, currencyCode: "EUR" },
    images: [img("photo-1496564203457-11bb12075d90", "Secesná fasáda")],
    category: "kachlicky",
    city: "Bratislava",
    artist: "Mária K.",
    badges: ["capsula"],
    available: true,
  },
  {
    id: "gid://mock/Product/4",
    handle: "mesto-tricko",
    title: "Mesto — tričko",
    description: "Mäkké bavlnené tričko s minimalistickou potlačou panorámy.",
    price: { amount: 34, currencyCode: "EUR" },
    compareAtPrice: { amount: 39, currencyCode: "EUR" },
    images: [img("photo-1449824913935-59a10b8d2000", "Panoráma mesta")],
    category: "tricka",
    city: "Bratislava",
    badges: ["viral"],
    available: true,
  },
  {
    id: "gid://mock/Product/5",
    handle: "pohladnica-noc",
    title: "Nočné mesto — pohľadnica",
    description: "Pohľadnica s nočnou siluetou mesta a ručne písaným pozdravom.",
    price: { amount: 3, currencyCode: "EUR" },
    images: [img("photo-1480714378408-67cf0d13bc1b", "Nočné mesto")],
    category: "pohladnice",
    city: "Bratislava",
    available: true,
  },
  {
    id: "gid://mock/Product/6",
    handle: "taska-rieka",
    title: "Rieka — plátená taška",
    description: "Plátená taška s potlačou inšpirovanou riekou a mostami.",
    price: { amount: 22, currencyCode: "EUR" },
    images: [img("photo-1502602898657-3e91760cbb34", "Most cez rieku")],
    category: "tasky",
    city: "Bratislava",
    artist: "Mária K.",
    available: true,
  },
];
