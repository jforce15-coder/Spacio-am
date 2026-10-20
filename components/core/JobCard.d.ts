import type { CSSProperties, ReactNode } from "react";

/** Card de trabajo de la EPI App: filete de estado, categoría de dominio, técnico, total y farol. */
export interface JobCardProps {
  /** Propiedad, en serif (ej. "Z1 - Centro Vivo - 1107"). */
  property?: ReactNode;
  /** Categoría de la capa de dominio. */
  category?: "limpieza-tradicional" | "limpieza-profunda" | "mantenimiento" | "nuevo-producto" | "ajuste" | "danos" | "supervision" | "cancelacion" | "wifi";
  description?: ReactNode;
  date?: ReactNode;
  technician?: ReactNode;
  /** Monto del trabajo; se renderiza con Amount sin decimales. */
  amount?: number;
  currency?: "GTQ" | "USD";
  /** Estado del farol; también pinta el filete izquierdo. */
  state?: "success" | "attention" | "warning" | "error" | "info" | "pending";
  statusLabel?: ReactNode;
  /** Quién paga (ej. "Paga Spacio AM"). */
  payer?: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}
export declare function JobCard(props: JobCardProps): JSX.Element;
