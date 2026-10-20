import type { CSSProperties } from "react";

/**
 * Marca oficial de Spacio AM a partir de los archivos de logo. Nunca recompongas el logo con tipografía.
 */
export interface WordmarkProps {
  /** primary = wordmark horizontal · stacked = SPACIO sobre A—M · monogram = "S" · stamp = sello circular. */
  variant?: "primary" | "stacked" | "monogram" | "stamp";
  /** Alto en px; el ancho se calcula. */
  height?: number;
  /** true sobre fondos ink/foto: carga la versión blanca. */
  onDark?: boolean;
  /** Prefijo de ruta hacia la raíz del design system (ej. "../.."). */
  base?: string;
  alt?: string;
  style?: CSSProperties;
}
export declare function Wordmark(props: WordmarkProps): JSX.Element;

export interface SparkleProps {
  size?: number;
  color?: string;
  style?: CSSProperties;
}
export declare function Sparkle(props: SparkleProps): JSX.Element;
