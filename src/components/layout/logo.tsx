import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

/**
 * Wordmark placeholder. The final brand lockup (from the corporate identity
 * PDF) will be swapped in as an SVG/Image without changing call sites.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="City Glory"
      className={cn(
        "text-lg font-semibold lowercase tracking-tight text-ink",
        className,
      )}
    >
      city glory
    </Link>
  );
}
