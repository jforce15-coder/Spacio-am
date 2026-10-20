import type { CSSProperties } from "react";

/** Calendario mensual de la EPI App. El estado del día se comunica con un punto de la escala de faroles. */
export interface CalendarProps {
  year: number;
  /** 0–11. */
  month: number;
  /** Mapa día → estado del farol, ej. { 4: "success", 12: "error" }. */
  days?: Record<number, "success" | "attention" | "warning" | "error" | "info" | "pending">;
  /** Día seleccionado: fondo --fg, texto invertido. */
  selected?: number;
  /** Día de hoy: borde --accent. */
  today?: number;
  onSelect?: (day: number) => void;
  style?: CSSProperties;
}
export declare function Calendar(props: CalendarProps): JSX.Element;
