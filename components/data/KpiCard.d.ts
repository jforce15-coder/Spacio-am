import type { CSSProperties, ReactNode } from "react";

/** Resumen numérico editorial: eyebrow arriba, número grande tabular, contexto abajo. */
export interface KpiCardProps {
  label?: ReactNode;
  /** Ya formateado (moneda, %, conteo). Se renderiza tabular. */
  value?: ReactNode;
  /** Frase de contexto en --fg-muted, al pie. */
  help?: ReactNode;
  /** Variación en %; positivo = verde salvo invert. */
  trend?: number;
  /** true cuando subir es malo (ej. gastos). */
  invert?: boolean;
  /** Sparkle en la esquina: solo el KPI protagonista. */
  accent?: boolean;
  /** Card grande para el KPI principal. */
  big?: boolean;
  /** Slot bajo el número (sparkline, farol). */
  footer?: ReactNode;
  style?: CSSProperties;
}
export declare function KpiCard(props: KpiCardProps): JSX.Element;

export interface TrendProps {
  value?: number;
  suffix?: string;
  /** true cuando subir es malo (ej. gastos, cancelaciones). */
  invert?: boolean;
  /** Neutraliza el chip a --fg-muted (sin juicio de valor). */
  muted?: boolean;
  /** Sube el deterioro de peach a rojo. Solo cuando la caida exige accion. */
  critical?: boolean;
}
export declare function Trend(props: TrendProps): JSX.Element;
