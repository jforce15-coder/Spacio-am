import type { CSSProperties, ReactNode } from "react";
import type { SelectOption } from "../forms/Select";

/** Chrome de navegación de apps de producto: mes global a la izquierda, moneda + idioma a la derecha. */
export interface TopBarProps {
  /** Ruta relativa a la raíz del design system (logo). */
  base?: string;
  /** Valor del filtro global de mes. */
  month?: string;
  months?: SelectOption[];
  onMonth?: (value: string) => void;
  /** Selector de alcance (propiedad / socio / zona). */
  scope?: string;
  scopes?: SelectOption[];
  onScope?: (value: string) => void;
  currency?: "USD" | "GTQ";
  onCurrency?: (value: string) => void;
  lang?: "es" | "en";
  onLang?: (value: string) => void;
  /** Etiqueta de alerta persistente (ej. "Factura pendiente"). */
  alert?: ReactNode;
  onAlert?: () => void;
  /** Iniciales del avatar. */
  initials?: string;
  onAvatar?: () => void;
  style?: CSSProperties;
}
export declare function TopBar(props: TopBarProps): JSX.Element;

/** Nav translúcida editorial para marketing y Guest. */
export interface PillNavProps {
  links?: string[];
  active?: string;
  onSelect?: (link: string) => void;
  /** Botón a la derecha dentro de la píldora. */
  cta?: ReactNode;
  base?: string;
  style?: CSSProperties;
}
export declare function PillNav(props: PillNavProps): JSX.Element;
