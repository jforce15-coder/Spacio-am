import type { CSSProperties, ReactNode } from "react";

/** Grid bento de la Guest App: 2 columnas en móvil → 4 desde --bp-md, flujo denso. */
export interface BentoProps {
  children?: ReactNode;
  style?: CSSProperties;
}
export declare function Bento(props: BentoProps): JSX.Element;

/** Tile de bento: imagen con degradado de protección, o bloque de color con label. */
export interface BentoTileProps {
  /** Si se pasa, el tile es de imagen y el label va en blanco sobre el degradado. */
  image?: string;
  label?: ReactNode;
  /** solid = beige · ink = fondo oscuro · peach = tinte peach con texto/ícono en peach-neon accesible sobre el tinte. */
  tone?: "solid" | "ink" | "peach";
  /** Columnas que ocupa (1 o 2). */
  span?: number;
  /** Filas que ocupa (1 o 2). */
  rows?: number;
  /** Nodo de ícono a la izquierda del label. */
  icon?: ReactNode;
  /** Sparkle en la esquina, para el tile protagonista. */
  sparkle?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}
export declare function BentoTile(props: BentoTileProps): JSX.Element;

/* ── Bento vivo: la pantalla de inicio y de reposo de Alma (Hub, #810 y #895) ── */

/** Tarjeta de vidrio líquido claro (.sa-glass): kicker, número o texto grande, hasta 4 renglones y una frase. */
export interface GlassTileProps {
  /** Título chico en versales: «Necesita tu sí», «Tu agenda», «Familia · hoy». */
  kicker?: ReactNode;
  /** Número o texto grande en Valky. */
  value?: ReactNode;
  /** Renglones: b = lo que va en negrita (hora, área), t = el texto. Más de 4 → «y N más». */
  items?: { b?: ReactNode; t: ReactNode }[];
  more?: ReactNode;
  /** Una frase en cursiva (el mensaje del huésped, la frase del día). */
  quote?: ReactNode;
  /** Qué decir si no hay nada: «Todo al día», «Sin avisos nuevos». Nunca un cuadro vacío. */
  empty?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}
export declare function GlassTile(props: GlassTileProps): JSX.Element;

/** La imagen del bento: foto con título en Valky sobre degradado; avatar opcional (la foto del huésped). */
export interface BentoImageProps { src?: string; title?: ReactNode; sub?: ReactNode; avatar?: string; style?: CSSProperties; }
export declare function BentoImage(props: BentoImageProps): JSX.Element;

/** La píldora del tema, arriba en el hueco de la roca: «● Huésped · Valeria Ríos». */
export declare function BentoTopic(props: { children?: ReactNode; style?: CSSProperties }): JSX.Element;

/** La ventana del GIF: vidrio gris oscuro (.sa-glass-dark) arriba de la roca. */
export interface GifWindowProps { src?: string; alt?: string; credit?: string; width?: number; height?: number; style?: CSSProperties; }
export declare function GifWindow(props: GifWindowProps): JSX.Element;

/** Una pieza de información del bento. p = prioridad (menor primero) · peso = cuánto crece · tipo = "galeria" | "mapa" | … */
export interface BentoPieza { p?: number; peso?: number; tipo?: string; el: JSX.Element; }
/** Ordena por prioridad y reparte como el Hub: L (izquierda), R (derecha), B (abajo). */
export declare function bentoRepartir(info: BentoPieza[], layout?: "horizontal" | "vertical" | "telefono"): { L: BentoPieza[]; R: BentoPieza[]; B: BentoPieza[] };

/** El bento vivo completo sobre el atardecer, con el hueco de la roca al centro. */
export interface BentoVivoProps {
  /** La única imagen (siempre una): la foto del tema; sin foto, la galería o la de la marca. */
  image?: BentoImageProps;
  info?: BentoPieza[];
  /** Texto de la píldora del tema. Vacío en reposo. */
  topic?: ReactNode;
  /** Lo que va en el hueco: la roca, el estado («Te escucho»), los subtítulos y «Chat» · «Llamada». */
  center?: ReactNode;
  /** El GIF del tema, en su ventana (asoma de vez en cuando; nunca dentro del bento). */
  gif?: { src: string; alt?: string };
  /** horizontal = computadora / iPad horizontal · vertical = iPad vertical · telefono = Tablero bento. */
  layout?: "horizontal" | "vertical" | "telefono";
  /** Foto de fondo; sin ella, el atardecer (--sunset). */
  background?: string;
  height?: number | string;
  style?: CSSProperties;
}
export declare function BentoVivo(props: BentoVivoProps): JSX.Element;
