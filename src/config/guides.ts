/**
 * Local guides & experts roster — migrated from the live bratislava.cityglory.sk
 * ("Tématickí sprievodcovia" section + individual /advisor/[slug] pages).
 * Contact details are real and public-facing (published on the live site).
 *
 * `focus` (Zameranie) is translatable — it lives in messages/*.json under
 * `home.guides.<key>.focus`, shared with the homepage Guides teaser.
 */

export type Guide = {
  key: string;
  slug: string;
  name: string;
  languages: string[];
  phone: string;
  email: string;
  image: string;
  /** Whether messages/*.json has a `home.guides.<key>.promo` blurb for this guide. */
  hasPromo: boolean;
};

export const guides: Guide[] = [
  {
    key: "zuzanaGodarova",
    slug: "zuzana-godarova",
    name: "Zuzana Godárová",
    languages: ["SK", "DE", "EN"],
    phone: "+421 904 983 067",
    email: "zgodarova@gmail.com",
    image: "/guides/zuzana-godarova.jpg",
    hasPromo: true,
  },
  {
    key: "lubaSolanova",
    slug: "luba-solanova",
    name: "Ľuba Solanová",
    languages: ["SK", "EN", "FR"],
    phone: "+421 905 740 179",
    email: "lubka1961@hotmail.be",
    image: "/guides/luba-solanova.jpg",
    hasPromo: true,
  },
  {
    key: "katkaStanikova",
    slug: "katka-stanikova",
    name: "Katka Staníková",
    languages: ["SK", "EN"],
    phone: "+421 905 809 300",
    email: "katestanik@gmail.com",
    image: "/guides/katka-stanikova.jpg",
    hasPromo: true,
  },
  {
    key: "oliverKriz",
    slug: "oliver-kriz",
    name: "Oliver Kríž",
    languages: ["SK", "EN"],
    phone: "+421 903 29 66 77",
    email: "oliver@kriz.sk",
    image: "/guides/oliver-kriz.jpg",
    // No promo blurb published for Oliver on the live site — chevron is
    // omitted for his card rather than expanding into empty space.
    hasPromo: false,
  },
];
