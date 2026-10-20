import type { CSSProperties, ReactNode } from "react";

/** Superficie de contenido. Default del sistema; reemplaza a la tabla salvo en escritorio denso. */
export interface CardProps {
  children?: ReactNode;
  /** flat = borde suave sin sombra · elevated = --shadow-sm · interactive = eleva y sube 3px en hover. */
  variant?: "flat" | "elevated" | "interactive";
  /** md = radio 14 · lg = radio 28 (cards grandes y modales). */
  size?: "md" | "lg";
  /** Padding; por defecto --s-4 (24). */
  pad?: number | string;
  onClick?: () => void;
  href?: string;
  style?: CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;

export interface CardMediaProps {
  src?: string;
  alt?: string;
  height?: number;
  children?: ReactNode;
  style?: CSSProperties;
}
export declare function CardMedia(props: CardMediaProps): JSX.Element;
