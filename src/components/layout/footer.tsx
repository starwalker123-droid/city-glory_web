import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "./logo";

export function Footer() {
  const t = useTranslations("footer");

  const columns = [
    {
      title: t("shop"),
      links: [
        { label: t("shop"), href: "/oblecenie" },
        { label: t("clanky"), href: "/clanky" },
        { label: t("newsletter"), href: "/#newsletter" },
      ],
    },
    {
      title: t("legal"),
      links: [
        { label: t("faq"), href: "/faq" },
        { label: t("terms"), href: "/obchodne-podmienky" },
        { label: t("complaints"), href: "/reklamacie" },
        { label: t("shipping"), href: "/doprava-a-platba" },
        { label: t("gdpr"), href: "/ochrana-udajov" },
        { label: t("cookies"), href: "/cookies" },
      ],
    },
    {
      title: t("about"),
      links: [{ label: t("contact"), href: "/kontakt" }],
    },
  ];

  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-xs text-sm text-muted">{t("tagline")}</p>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-muted">
          © {new Date().getFullYear()} City Glory. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
