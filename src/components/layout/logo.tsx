import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

/**
 * Brand lockup: lowercase "city glory" wordmark followed by the City Glory
 * znak (symbol). The mark is sized in `em`, so it always tracks the wordmark
 * font size wherever the logo is used.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="City Glory"
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-lg font-semibold lowercase tracking-tight text-ink",
        className,
      )}
    >
      <span>city glory</span>
      <Image
        src="/logo-mark.png"
        alt=""
        aria-hidden
        width={259}
        height={261}
        className="h-[1.05em] w-auto"
        priority
      />
    </Link>
  );
}
