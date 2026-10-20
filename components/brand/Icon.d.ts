import type { CSSProperties } from "react";

export declare const ICON_PATHS: Record<string, string>;

/**
 * Ícono de línea del set Lucide curado de Spacio AM. Grosor único 1.5, tamaños 20 (--icon-sm) / 24 (--icon-md).
 */
export interface IconProps {
  /** Nombre del glifo. Ver ICON_PATHS. */
  name: string;
  /** 20 para UI densa, 24 para acciones principales. */
  size?: number;
  /** Cualquier token de color; por defecto hereda currentColor. */
  color?: string;
  /** Siempre 1.5 en v2. No cambiar salvo caso excepcional. */
  strokeWidth?: number;
  style?: CSSProperties;
  /** Si se pasa, el ícono deja de ser decorativo y se anuncia. */
  title?: string;
}
export declare function Icon(props: IconProps): JSX.Element;
