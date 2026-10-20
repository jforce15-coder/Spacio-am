import type { CSSProperties, ReactNode } from "react";

/** Label en mayúsculas con tracking 0.32em, en --fg-muted. */
export interface EyebrowProps {
  children?: ReactNode;
  as?: string;
  color?: string;
  style?: CSSProperties;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;

/** Cabecera de sección: eyebrow + titular serif + subtítulo + slot derecho. */
export interface SectionHeadProps {
  eyebrow?: ReactNode;
  title?: ReactNode;
  sub?: ReactNode;
  /** Controles alineados a la derecha (filtros, segmented). */
  right?: ReactNode;
  style?: CSSProperties;
}
export declare function SectionHead(props: SectionHeadProps): JSX.Element;
