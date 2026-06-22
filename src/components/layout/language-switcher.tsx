"use client";

import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const current = (params.locale as string) ?? routing.defaultLocale;

  return (
    <div className="flex items-center gap-1 text-xs uppercase">
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-1">
          {i > 0 && <span className="text-border">/</span>}
          <button
            type="button"
            onClick={() => router.replace(pathname, { locale: loc })}
            aria-current={loc === current}
            className={cn(
              "transition-colors",
              loc === current
                ? "font-semibold text-ink"
                : "text-muted hover:text-ink",
            )}
          >
            {loc}
          </button>
        </span>
      ))}
    </div>
  );
}
