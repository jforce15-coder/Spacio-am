import type { CSSProperties, ReactNode } from "react";

export interface TabItem {
  value: string;
  label: ReactNode;
  /** Glifo del set Icon. */
  icon?: string;
}

/** Tabs de sección con subrayado peach en el activo (chrome del Dashboard). */
export interface TabNavProps {
  tabs?: TabItem[];
  value?: string;
  onChange?: (value: string) => void;
  align?: "left" | "center";
  style?: CSSProperties;
}
export declare function TabNav(props: TabNavProps): JSX.Element;

/** Tabs en píldora sobre --bg-alt, activo en ink (chrome de la EPI App). */
export interface PillTabsProps {
  tabs?: TabItem[];
  value?: string;
  onChange?: (value: string) => void;
  style?: CSSProperties;
}
export declare function PillTabs(props: PillTabsProps): JSX.Element;
