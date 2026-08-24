/**
 * Viral — limited collections reacting to trends and cultural moments that
 * resonate in Slovakia. Invented themes (not tied to a specific real event).
 */

export type ViralTheme = {
  slug: string;
  name: string;
};

export const viralThemes: ViralTheme[] = [
  { slug: "cumil", name: "Čumil" },
  { slug: "prvy-sneh", name: "Prvý sneh" },
  { slug: "halusky", name: "Halušky" },
  { slug: "silvester", name: "Silvester" },
];
