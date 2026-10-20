import type { CSSProperties, ReactNode } from "react";

export declare const SERIES: string[];

export interface ChartSeries {
  name: ReactNode;
  values: number[];
  /** Por defecto toma el color por orden: ink, peach, neutros. */
  color?: string;
  /** Marca esta serie como la protagonista: trazo más grueso y área más presente. Solo una por gráfica. */
  accent?: boolean;
  width?: number;
  /** false quita el área rellena bajo la línea (por defecto se dibuja). */
  fill?: boolean;
}

/** Gráfica de línea de curva suave, con área rellena y tooltip al pasar el cursor. Máximo ~4 series. */
export interface LineChartProps {
  series?: ChartSeries[];
  /** Etiquetas del eje X (meses). */
  labels?: ReactNode[];
  height?: number;
  /** Formateador del eje Y (moneda corta, %). */
  formatY?: (value: number) => ReactNode;
  /** Formateador del valor en el tooltip; por defecto usa formatY. */
  formatTip?: (value: number) => ReactNode;
  style?: CSSProperties;
}
export declare function LineChart(props: LineChartProps): JSX.Element;

/** Anillo de porcentaje (ocupación). */
export interface GaugeProps {
  value?: number;
  size?: number;
  /** Texto central; por defecto el porcentaje. */
  label?: ReactNode;
  sub?: ReactNode;
  /** Pinta el arco en peach cuando este dato es el protagonista de la pantalla. */
  accent?: boolean;
  style?: CSSProperties;
}
export declare function Gauge(props: GaugeProps): JSX.Element;

/** Columnas mensuales; highlight marca el mes en curso. */
export interface BarChartProps {
  data?: { label: ReactNode; value: number; highlight?: boolean }[];
  height?: number;
  suffix?: string;
  style?: CSSProperties;
}
export declare function BarChart(props: BarChartProps): JSX.Element;
