import type { ComponentType, SVGProps } from "react";
import { IconFrame } from "./base";

type IconProps = SVGProps<SVGSVGElement>;

export function TshirtIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M8 3.5 L4.5 5.75 L3 9.25 L6 11.25 L7.5 9.75 V20.5 H16.5 V9.75 L18 11.25 L21 9.25 L19.5 5.75 L16 3.5 C14.6 5.4 9.4 5.4 8 3.5 Z" />
    </IconFrame>
  );
}

export function HoodieIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M8 5 L4.5 6.75 L3 10.25 L6 12.25 L7.5 10.75 V20.5 H16.5 V10.75 L18 12.25 L21 10.25 L19.5 6.75 L16 5" />
      <path d="M8 5 C9 8 15 8 16 5" />
      <path d="M10.2 7.6 V11" />
      <path d="M13.8 7.6 V11" />
      <path d="M9.4 13.8 H14.6 V17.2 H9.4 Z" />
    </IconFrame>
  );
}

export function CrewneckIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M8 4.5 L4.5 6 L3 9.5 L6 11.5 L7.5 10 V20.5 H16.5 V10 L18 11.5 L21 9.5 L19.5 6 L16 4.5" />
      <path d="M8 4.5 C9 7.3 15 7.3 16 4.5" />
      <path d="M9 5.4 C9.8 6.9 14.2 6.9 15 5.4" />
    </IconFrame>
  );
}

export function CapIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M4.5 13.5 C4.5 7 19 7 19 13.5 Z" />
      <path d="M19 13.5 C21.8 13.7 22 16.2 19 16.4 L12.5 16.4" />
    </IconFrame>
  );
}

export function BeanieIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M5.5 13 C5.5 6.5 18.5 6.5 18.5 13 Z" />
      <rect x="4.3" y="12.9" width="15.4" height="3.7" rx="1.3" />
    </IconFrame>
  );
}

export function SocksIcon(props: IconProps) {
  return (
    <IconFrame {...props}>
      <path d="M9.5 3.5 H14 V12 C14 13.4 13.4 14 12.4 14.8 L9 17.4 C7.4 18.6 5.4 16.1 7 14.9 L9 13.4 C9.5 13 9.5 12.5 9.5 11.5 Z" />
      <path d="M9.5 6 H14" />
    </IconFrame>
  );
}

/** Category key → apparel icon (clothing parent). */
export const clothingIcons: Record<string, ComponentType<IconProps>> = {
  tricka: TshirtIcon,
  mikiny: HoodieIcon,
  crewnecky: CrewneckIcon,
  siltovky: CapIcon,
  ciapky: BeanieIcon,
  ponozky: SocksIcon,
};
