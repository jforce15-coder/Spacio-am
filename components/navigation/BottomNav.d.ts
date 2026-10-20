import type { CSSProperties, ReactNode } from "react";

/** Navegación inferior móvil: barra con FAB (EPI) o píldora flotante con blur (Dashboard). */
export interface BottomNavProps {
  items?: { value: string; label: ReactNode; icon: string }[];
  value?: string;
  onChange?: (value: string) => void;
  /** bar = ancho completo con borde superior · pill = píldora flotante con blur. */
  variant?: "bar" | "pill";
  /** Botón circular central en peach (--accent) con ícono blanco. Por defecto la casita ("home"). Se inserta a la mitad de items. */
  fab?: { icon?: string; label?: string };
  onFab?: () => void;
  style?: CSSProperties;
}
export declare function BottomNav(props: BottomNavProps): JSX.Element;
