import type { ComponentType, SVGProps } from "react";
import { IconFrame } from "./base";

type IconProps = SVGProps<SVGSVGElement>;

export function MagnetIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M7 3.5 V11 C7 15 9 17.5 12 17.5 C15 17.5 17 15 17 11 V3.5" />
      <path d="M9.5 9.2 C10.4 10.3 13.6 10.3 14.5 9.2" />
      <rect x="5.3" y="2.3" width="3.4" height="2.8" rx="0.8" />
      <rect x="15.3" y="2.3" width="3.4" height="2.8" rx="0.8" />
    </IconFrame>
  );
}

export function TileIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <rect x="4" y="4" width="16" height="16" rx="1.5" />
      <path d="M12 7.5 L16.5 12 L12 16.5 L7.5 12 Z" />
    </IconFrame>
  );
}

export function PrintIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <rect x="4" y="4" width="16" height="16" rx="1.5" />
      <circle cx="9" cy="9.5" r="1.5" />
      <path d="M4 15.5 L9 11 L13 14.5 L16 12 L20 15.5" />
    </IconFrame>
  );
}

/** Category key → accessory icon (doplnky parent). */
export const accessoryIcons: Record<string, ComponentType<IconProps>> = {
  printy: PrintIcon,
  magnetky: MagnetIcon,
  kachlicky: TileIcon,
};
