import type { CSSProperties, ReactNode } from "react";

/** Pantalla de carga canónica: logo centrado, animación sutil, spinner. */
export interface LoadingScreenProps {
  /** Ruta relativa a la raíz del design system. */
  base?: string;
  /** Texto eyebrow opcional bajo el spinner. */
  label?: ReactNode;
  variant?: "primary" | "monogram" | "stamp";
  /** true = cubre el contenedor (necesita padre relativo). */
  full?: boolean;
  style?: CSSProperties;
}
export declare function LoadingScreen(props: LoadingScreenProps): JSX.Element;

/** Bloque skeleton en --bg-alt para cargas localizadas. */
export interface SkeletonProps {
  height?: number | string;
  width?: number | string;
  radius?: string;
  style?: CSSProperties;
}
export declare function Skeleton(props: SkeletonProps): JSX.Element;
