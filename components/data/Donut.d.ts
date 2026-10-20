import type { CSSProperties, ReactNode } from "react";

/** Anillo de distribución con filas de leyenda (% del total + monto). */
export interface DonutProps {
  data?: { label: ReactNode; value: number; amount?: ReactNode; color?: string }[];
  size?: number;
  /** Cifra al centro del anillo, ya formateada. */
  total?: ReactNode;
  totalLabel?: ReactNode;
  legend?: boolean;
  style?: CSSProperties;
}
export declare function Donut(props: DonutProps): JSX.Element;
