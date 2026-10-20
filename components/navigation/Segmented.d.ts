import type { CSSProperties, ReactNode } from "react";

/** Control segmentado (display de filtros locales, moneda, idioma). */
export interface SegmentedProps {
  options?: { value: string; label: ReactNode }[];
  value?: string;
  onChange?: (value: string) => void;
  size?: "sm" | "md";
  style?: CSSProperties;
}
export declare function Segmented(props: SegmentedProps): JSX.Element;
