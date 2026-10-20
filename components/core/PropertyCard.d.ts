import type { CSSProperties, ReactNode } from "react";

/** Card de propiedad: imagen con brushstroke + eyebrow de ubicación + nombre serif + meta y farol. */
export interface PropertyCardProps {
  image?: string;
  /** Zona o ciudad, en eyebrow. */
  location?: ReactNode;
  /** Nombre de la propiedad, en serif. */
  name?: ReactNode;
  /** "2 hab · 4 huéspedes" y similares. */
  meta?: ReactNode;
  /** Etiqueta del farol; si se omite no se dibuja farol. */
  status?: ReactNode;
  state?: "success" | "attention" | "warning" | "error" | "info" | "pending";
  /** Ruta relativa a la raíz del design system (para el brushstroke). */
  base?: string;
  onClick?: () => void;
  style?: CSSProperties;
}
export declare function PropertyCard(props: PropertyCardProps): JSX.Element;
