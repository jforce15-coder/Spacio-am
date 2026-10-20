import type { CSSProperties } from "react";

/** Monto con enteros al frente y decimales atenuados en --fg-subtle. Siempre tabular. */
export interface AmountProps {
  value?: number;
  /** GTQ → "Q", USD → "$". También acepta un símbolo literal. */
  currency?: "GTQ" | "USD" | string;
  /** Tamaño del entero en px; los decimales salen al 62%. */
  size?: number;
  /** false para totales redondeados de listas densas. */
  decimals?: boolean;
  weight?: number;
  color?: string;
  style?: CSSProperties;
}
export declare function Amount(props: AmountProps): JSX.Element;
