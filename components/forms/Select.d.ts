import type { CSSProperties, ReactNode } from "react";

export interface SelectOption {
  value: string;
  label: ReactNode;
  /** Segunda línea 10.5px en --fg-muted (ej. ubicación, conteo). */
  sub?: ReactNode;
}

/** Selector editorial: disparador píldora + panel radio 18. Base del chrome del Dashboard. */
export interface SelectProps {
  value?: string;
  options?: SelectOption[];
  onChange?: (value: string) => void;
  /** Glifo dentro del disparador. */
  icon?: string;
  label?: ReactNode;
  /** Lado por el que se ancla el panel. */
  align?: "left" | "right";
  minWidth?: number;
  disabled?: boolean;
  style?: CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
