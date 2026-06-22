import { useTranslations } from "next-intl";

/**
 * Slim announcement bar. Static copy for now; will be driven by the CMS
 * (rotating messages) in a later phase.
 */
export function AnnouncementBar() {
  const t = useTranslations("announcement");
  return (
    <div className="bg-ink text-cream">
      <p className="mx-auto max-w-7xl px-4 py-2 text-center text-xs tracking-wide">
        {t("default")}
      </p>
    </div>
  );
}
