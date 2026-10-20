import type { ReactNode } from "react";

export declare const EMAIL_HEX: Record<string, string>;

/** Template de correo del sistema (base de EPI y del Dashboard). Tokens compilados a hex, estilos inline. */
export interface EmailLayoutProps {
  /** Texto oculto de preview en la bandeja. */
  preheader?: string;
  /** URL absoluta del wordmark (los correos no resuelven rutas relativas). */
  logo?: string;
  /** Banda/hero de imagen a ancho completo bajo la cabecera. */
  band?: string;
  eyebrow?: ReactNode;
  title?: ReactNode;
  children?: ReactNode;
  /** Etiqueta del botón primario ink. */
  cta?: ReactNode;
  ctaHref?: string;
  footer?: ReactNode;
  width?: number;
}
export declare function EmailLayout(props: EmailLayoutProps): JSX.Element;
