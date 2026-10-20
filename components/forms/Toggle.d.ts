import type { CSSProperties, ReactNode } from "react";

/** Interruptor: pista 36×20 píldora, --fg encendido, --divider apagado. */
export interface ToggleProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  label?: ReactNode;
  disabled?: boolean;
  style?: CSSProperties;
}
export declare function Toggle(props: ToggleProps): JSX.Element;

/** Casilla: radio 10, borde 1.5px, check con el ícono del set. */
export interface CheckboxProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  label?: ReactNode;
  disabled?: boolean;
  style?: CSSProperties;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
