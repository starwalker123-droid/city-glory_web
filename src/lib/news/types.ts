/**
 * Editorial "news" content — the first content type under /clanky. Shape is
 * deliberately simple; once Sanity is wired in (see project roadmap) this
 * becomes a query result instead of a mock array.
 */
export type NewsImage = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

/** Mirrors the 4 categories used on the live cityglory.sk editorial section. */
export type NewsCategory = "osobnosti" | "udalosti" | "zaujimavosti" | "umenie";

export type NewsPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: NewsImage;
  category: NewsCategory;
  publishedAt: string;
  /**
   * Post-detail content — short paragraphs alternated with `gallery` images
   * on the article page. Optional: posts without it just show the excerpt.
   */
  body?: string[];
  /** Extra images (beyond `image`, the card/hero photo) for the detail page. */
  gallery?: NewsImage[];
};
