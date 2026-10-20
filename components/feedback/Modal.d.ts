import type { ReactNode } from "react";

/** Modal canónico del sistema (template de EPI). Overlay ink 55% + blur 4. */
export interface ModalProps {
  open?: boolean;
  title?: ReactNode;
  children?: ReactNode;
  /** Fila de acciones abajo-derecha: secundario + primario. */
  actions?: ReactNode;
  /** Cierra con la ×, con Esc y con click en el overlay. */
  onClose?: () => void;
  /** En móvil: sube como hoja inferior con esquinas top-rounded. */
  sheet?: boolean;
  width?: number;
  /** Sparkle junto al título, para momentos de marca. */
  sparkle?: boolean;
}
export declare function Modal(props: ModalProps): JSX.Element | null;
