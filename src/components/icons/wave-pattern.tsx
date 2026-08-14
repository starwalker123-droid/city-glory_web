import type { SVGProps } from "react";

/** Three gentle waves — decorative motif preceding announcement bar copy. */
export function WavePattern(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 14 8"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      aria-hidden
      {...props}
    >
      <path d="M1 6 Q3 2 5 6 Q7 2 9 6 Q11 2 13 6" />
    </svg>
  );
}
