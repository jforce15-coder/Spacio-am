import type { CSSProperties, ReactNode } from "react";

/** Área minimizable (patrón de EPI) para domar la densidad. */
export interface CollapsibleProps {
  title?: ReactNode;
  /** Resumen a la derecha cuando está cerrado (conteo, total). */
  meta?: ReactNode;
  children?: ReactNode;
  /** En móvil pasa false para las secciones secundarias. */
  defaultOpen?: boolean;
  style?: CSSProperties;
}
export declare function Collapsible(props: CollapsibleProps): JSX.Element;
