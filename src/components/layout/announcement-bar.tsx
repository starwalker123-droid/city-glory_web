import { useTranslations } from "next-intl";

/**
 * Slim stacked announcement bars (per the original sketch). Static copy for
 * now; will be driven by the CMS (rotating messages) in a later phase.
 * Colors follow token semantics: lilac = artist/capsula, sky = brand accent.
 */
const bars = [
  { key: "limited", className: "bg-ink text-cream" },
  { key: "collab", className: "bg-lilac text-ink" },
  { key: "preorder", className: "bg-sky text-ink" },
] as const;

export function AnnouncementBar() {
  const t = useTranslations("announcement");
  return (
    <>
      {bars.map(({ key, className }) => (
        <div key={key} className={className}>
          <p className="mx-auto max-w-7xl px-4 py-1.5 text-center text-xs tracking-wide">
            {t(key)}
          </p>
        </div>
      ))}
    </>
  );
}
