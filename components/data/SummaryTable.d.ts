import type { CSSProperties, ReactNode } from "react";

export interface SummaryColumn {
  key: string;
  header: ReactNode;
  /** Número: alineado a la derecha y tabular. */
  num?: boolean;
}

/** Tabla-resumen minimalista. Solo escritorio denso; colapsa a cards bajo --bp-md. */
export interface SummaryTableProps {
  columns?: SummaryColumn[];
  rows?: Record<string, ReactNode>[];
  /** true = renderiza la vista de cards (móvil). Una fuente de datos, dos presentaciones. */
  collapse?: boolean;
  /** Mensaje de estado vacío. */
  empty?: ReactNode;
  style?: CSSProperties;
}
export declare function SummaryTable(props: SummaryTableProps): JSX.Element;
