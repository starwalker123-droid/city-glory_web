import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Locale-aware navigation helpers. Always import `Link`, `useRouter`,
 * `usePathname` and `redirect` from here instead of `next/link` /
 * `next/navigation` so locale prefixing stays automatic and consistent.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
