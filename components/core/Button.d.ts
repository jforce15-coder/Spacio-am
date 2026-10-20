import type { CSSProperties, ReactNode } from "react";

/** Botón píldora de Spacio AM. Un solo primario por vista. */
export interface ButtonProps {
  children?: ReactNode;
  /** primary = ink · accent = tinte peach con borde peach y texto ink · secondary = borde interno · text = subrayado · danger = error. */
  variant?: "primary" | "accent" | "secondary" | "text" | "danger";
  size?: "sm" | "md" | "lg";
  /** Nombre de glifo del set Icon, a la izquierda. */
  icon?: string;
  /** Nombre de glifo a la derecha (ej. "arrowRight"). */
  iconRight?: string;
  /** Etiqueta en MAYÚSCULAS (default true). */
  uppercase?: boolean;
  disabled?: boolean;
  /** Reemplaza la etiqueta por un spinner y bloquea el click. */
  loading?: boolean;
  full?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  style?: CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
