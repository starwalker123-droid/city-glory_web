/**
 * Capsula — limited collaborations with Slovak artists and personalities.
 * Real, publicly known names (mockup only — swap for confirmed partners
 * before this ever ships).
 */

export type CapsulaArtist = {
  slug: string;
  name: string;
};

export const capsulaArtists: CapsulaArtist[] = [
  { slug: "dorota-sadovska", name: "Dorota Sadovská" },
  { slug: "marek-ormandik", name: "Marek Ormandík" },
  { slug: "adela-vinczeova", name: "Adela Vinczeová" },
  { slug: "zdenko-ivan", name: "Zdenko Ivan" },
];
