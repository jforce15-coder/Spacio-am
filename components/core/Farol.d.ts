import type { CSSProperties, ReactNode } from "react";

/** Semáforo de estado. Una sola escala en Dashboard, EPI y Guest. */
export interface FarolProps {
  /**
   * success = al día · attention = merece la mirada (falta algo, bajó, destaca) ·
   * warning = por vencer · error = EXCEPCIÓN que exige acción (vencido, daño) ·
   * info = en progreso · pending = sin estado.
   */
  state?: "success" | "attention" | "warning" | "error" | "info" | "pending";
  children?: ReactNode;
  /** Solo el punto, para listas muy densas. Exige label. */
  dotOnly?: boolean;
  /** Nombre accesible del estado cuando dotOnly. */
  label?: string;
  style?: CSSProperties;
}
export declare function Farol(props: FarolProps): JSX.Element;
