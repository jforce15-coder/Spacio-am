import type { CSSProperties, ReactNode } from "react";

export declare const DOMAIN_CATEGORIES: string[];

/** Badge de categoría de trabajo de la EPI App (capa de dominio, no core). */
export interface DomainBadgeProps {
  /** Categoría de tokens/domain.css. */
  category: "limpieza-tradicional" | "limpieza-profunda" | "mantenimiento" | "nuevo-producto" | "ajuste" | "danos" | "supervision" | "cancelacion" | "wifi";
  /** Etiqueta a mostrar; por defecto el nombre legible de la categoría. */
  children?: ReactNode;
  style?: CSSProperties;
}
export declare function DomainBadge(props: DomainBadgeProps): JSX.Element;
