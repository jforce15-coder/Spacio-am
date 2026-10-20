import type { CSSProperties, ReactNode } from "react";

/** Grid bento de la Guest App: 2 columnas en móvil → 4 desde --bp-md, flujo denso. */
export interface BentoProps {
  children?: ReactNode;
  style?: CSSProperties;
}
export declare function Bento(props: BentoProps): JSX.Element;

/** Tile de bento: imagen con degradado de protección, o bloque de color con label. */
export interface BentoTileProps {
  /** Si se pasa, el tile es de imagen y el label va en blanco sobre el degradado. */
  image?: string;
  label?: ReactNode;
  /** solid = beige · ink = fondo oscuro · peach = tinte peach con texto/ícono en peach-neon accesible sobre el tinte. */
  tone?: "solid" | "ink" | "peach";
  /** Columnas que ocupa (1 o 2). */
  span?: number;
  /** Filas que ocupa (1 o 2). */
  rows?: number;
  /** Nodo de ícono a la izquierda del label. */
  icon?: ReactNode;
  /** Sparkle en la esquina, para el tile protagonista. */
  sparkle?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}
export declare function BentoTile(props: BentoTileProps): JSX.Element;
