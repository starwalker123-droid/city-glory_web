import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "./logo";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/config/contact";

const linkClass = "text-sm text-muted transition-colors hover:text-ink";

/**
 * Three columns (info / terms / brand) laid out as one 3×3 grid so matching
 * rows line up across columns: faq—terms—logo, gdpr—complaints—email,
 * cookies—(empty)—phone. Middle column is centered, right column trails.
 */
export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border bg-cream">
      <nav
        aria-label={t("legal")}
        className="mx-auto grid max-w-7xl grid-cols-3 items-center gap-x-6 gap-y-4 px-4 py-16 sm:gap-x-10"
      >
        <Link href="/faq" className={linkClass}>
          {t("faq")}
        </Link>
        <Link href="/obchodne-podmienky" className={`${linkClass} text-center`}>
          {t("terms")}
        </Link>
        <div className="flex justify-end">
          <Logo />
        </div>

        <Link href="/ochrana-udajov" className={linkClass}>
          {t("gdpr")}
        </Link>
        <Link href="/reklamacie" className={`${linkClass} text-center`}>
          {t("complaints")}
        </Link>
        <a href={`mailto:${CONTACT_EMAIL}`} className={`${linkClass} text-right`}>
          {CONTACT_EMAIL}
        </a>

        <Link href="/cookies" className={linkClass}>
          {t("cookies")}
        </Link>
        <span aria-hidden />
        <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className={`${linkClass} text-right`}>
          {CONTACT_PHONE}
        </a>
      </nav>

      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-muted">
          © {new Date().getFullYear()} city glory. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
