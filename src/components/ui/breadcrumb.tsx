import type { ReactNode } from "react";
import { Home } from "lucide-react";
import { Link } from "@/i18n/navigation";

export type BreadcrumbItem = {
  label: string;
  /** Omit on the last/current item — it renders as plain text, not a link. */
  href?: string;
};

/**
 * Top-left "you are here" trail for subsection pages (categories, product
 * details, etc). Plain house icon — the header right above already carries
 * the City Glory mark, so repeating it here would just duplicate it.
 *
 * `right` renders a slot on the same row (e.g. the product page's
 * dámske/pánske/unisex quick switch) so the two stay visually paired.
 */
export function Breadcrumb({
  items,
  right,
}: {
  items: BreadcrumbItem[];
  right?: ReactNode;
}) {
  return (
    <nav
      aria-label="breadcrumb"
      className="mb-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2"
    >
      <div className="flex flex-wrap items-center gap-2">
        <Link href="/" aria-label="City Glory — domov" className="inline-flex shrink-0 items-center">
          <Home className="size-4 text-muted" aria-hidden />
        </Link>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            <span aria-hidden className="text-muted">
              –
            </span>
            {item.href ? (
              <Link
                href={item.href}
                className="text-sm lowercase text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-sm lowercase text-muted" aria-current="page">
                {item.label}
              </span>
            )}
          </span>
        ))}
      </div>

      {right}
    </nav>
  );
}
