import type { CSSProperties, ReactNode } from "react";

/**
 * Imagen destacada con el brushstroke tejido detrás y delante — la firma visual de Spacio AM.
 */
export interface BrushstrokeProps {
  /** Ruta de la imagen. Si se omite, queda el hueco en --bg-alt. */
  src?: string;
  alt?: string;
  /** Alto del media. Por debajo de ~160px NO uses brushstroke. */
  height?: number;
  /** Por defecto --r-card-top (28 28 0 0), para media sobre bloque de contenido. */
  radius?: string;
  /** Ruta relativa a la raíz del design system (para assets/brushstroke.svg). */
  base?: string;
  /** Máscara CSS de la capa frontal; mueve por dónde reemerge el trazo. */
  frontMask?: string;
  /** Capa sobre la imagen (degradado de protección, texto). */
  overlay?: ReactNode;
  children?: ReactNode;
  style?: CSSProperties;
}
export declare function Brushstroke(props: BrushstrokeProps): JSX.Element;
