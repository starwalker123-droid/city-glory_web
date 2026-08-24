import type { SVGProps } from "react";
import { IconFrame } from "./base";

type IconProps = SVGProps<SVGSVGElement>;

/** Framed print with a small sun and skyline — city artwork motif. */
export function ArtworkIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <circle cx="15" cy="9" r="1.6" />
      <path d="M4 16 L9 11 L13 14.5 L16.5 11.5 L20 15" />
    </IconFrame>
  );
}

/** Open book with a center spine — stories. */
export function StoriesIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M12 6.5 C10.5 5 7.5 4.5 4.5 5 V17.5 C7.5 17 10.5 17.5 12 19 C13.5 17.5 16.5 17 19.5 17.5 V5 C16.5 4.5 13.5 5 12 6.5 Z" />
      <path d="M12 6.5 V19" />
    </IconFrame>
  );
}

/** Faceted gem — quality materials. */
export function MaterialsIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M7 4.5 H17 L21 10 L12 20 L3 10 Z" />
      <path d="M3 10 H21" />
      <path d="M9 4.5 L12 10 L15 4.5" />
      <path d="M12 10 L12 20" />
    </IconFrame>
  );
}

/** Circular exchange arrows — easy returns. */
export function ReturnsIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M4 12 C4 7.6 7.6 4 12 4 C15 4 17.6 5.7 19 8.2" />
      <path d="M19 4.5 V8.5 H15" />
      <path d="M20 12 C20 16.4 16.4 20 12 20 C9 20 6.4 18.3 5 15.8" />
      <path d="M5 19.5 V15.5 H9" />
    </IconFrame>
  );
}
