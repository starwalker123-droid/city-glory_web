/**
 * Curated "projects we like" wall for the sprievodcovia (guides) preview —
 * intentionally minimal: a logo mark and a name that link through to the
 * project itself. No descriptions, no photos.
 *
 * Six real, publicly-beneficial projects/organisations from Bratislava and
 * the Bratislavský kraj region, spanning mobility, social care, culture,
 * heritage, regional tourism and nature conservation.
 */

export type LikedProject = {
  key: string;
  name: string;
  href: string;
  /** Path to the project's logo under /public. Falls back to initials when omitted. */
  logo?: string;
};

export const likedProjects: LikedProject[] = [
  {
    key: "cyklokoalicia",
    name: "Cyklokoalícia",
    href: "https://cyklokoalicia.sk/",
    logo: "/projects/cyklokoalicia.svg",
  },
  {
    key: "vagus",
    name: "OZ Vagus",
    href: "https://vagus.sk/",
    logo: "/projects/vagus.png",
  },
  {
    key: "nova-cvernovka",
    name: "Nová Cvernovka",
    href: "https://novacvernovka.eu/",
    logo: "/projects/nova-cvernovka.png",
  },
  {
    key: "stara-trznica",
    name: "Stará tržnica",
    href: "https://staratrznica.sk/",
    logo: "/projects/stara-trznica.svg",
  },
  {
    key: "bratislava-region-tourism",
    name: "Bratislava Region Tourism",
    href: "https://bratislavaregion.travel/",
    logo: "/projects/bratislava-region-tourism.svg",
  },
  {
    key: "broz",
    name: "BROZ",
    href: "https://broz.sk/",
    logo: "/projects/broz.png",
  },
];
