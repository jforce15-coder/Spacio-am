import type { CSSProperties, ReactNode } from "react";

/** Campo de texto. Caja por defecto; densidad compacta para EPI, amplia para Guest. */
export interface InputProps {
  label?: ReactNode;
  value?: string;
  /** Recibe el valor, no el evento. */
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: string;
  /** Texto de ayuda 11px en --fg-muted. */
  helper?: ReactNode;
  /** Mensaje de error: pinta borde y texto en --color-error (nunca peach). */
  error?: ReactNode;
  /** box = caja del sistema · underline = editorial, solo hero/marketing/onboarding. */
  variant?: "box" | "underline";
  /** compact = EPI operativo · comfortable = Guest / default. */
  density?: "compact" | "comfortable";
  disabled?: boolean;
  /** Skeleton sobre el campo (ej. mientras el OCR prellena). */
  loading?: boolean;
  /** Glifo a la izquierda dentro del campo. */
  icon?: string;
  /** Nodo a la derecha (ej. botón mostrar contraseña). */
  trailing?: ReactNode;
  id?: string;
  style?: CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
