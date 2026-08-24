import type { SVGProps } from "react";
import { IconFrame } from "./base";

type IconProps = SVGProps<SVGSVGElement>;

/** Two tied notes — "hudobná Bratislava" (musical Bratislava) motif. */
export function MusicIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M9 17 V6.5 L18 4.5 V15" />
      <circle cx="7" cy="17" r="2.2" />
      <circle cx="16" cy="15" r="2.2" />
    </IconFrame>
  );
}

/** Four-petal rosette — "secesná Bratislava" (art nouveau) motif. */
export function OrnamentIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <circle cx="12" cy="12" r="2.2" />
      <path d="M12 9.8 C10 7 10 4.5 12 3.5 C14 4.5 14 7 12 9.8 Z" />
      <path d="M14.2 12 C17 10 19.5 10 20.5 12 C19.5 14 17 14 14.2 12 Z" />
      <path d="M12 14.2 C14 17 14 19.5 12 20.5 C10 19.5 10 17 12 14.2 Z" />
      <path d="M9.8 12 C7 14 4.5 14 3.5 12 C4.5 10 7 10 9.8 12 Z" />
    </IconFrame>
  );
}

/** Cup with steam — "gastro Bratislava" motif. */
export function CoffeeIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M5 9 H16 V14 C16 17 13.5 19 10.5 19 C7.5 19 5 17 5 14 Z" />
      <path d="M16 10.5 H18 C19.5 10.5 19.5 14 16 14" />
      <path d="M8 4 C8 5.5 9.5 5.5 9.5 7" />
      <path d="M12 4 C12 5.5 13.5 5.5 13.5 7" />
    </IconFrame>
  );
}

/** Fluted column — "historická Bratislava" (historic Bratislava) motif. */
export function ColumnIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M6 4.5 H18" />
      <path d="M6 20.5 H18" />
      <path d="M7.5 4.5 V20.5" />
      <path d="M9.5 4.5 V20.5" />
      <path d="M12 4.5 V20.5" />
      <path d="M14.5 4.5 V20.5" />
      <path d="M16.5 4.5 V20.5" />
    </IconFrame>
  );
}
