import React from "react";

const SRC = {
  primary: { light: "assets/brand/logo-primary-transparent.png", white: "assets/brand/logo-primary-white.png" },
  stacked: { light: "assets/brand/logo-stacked.png", white: "assets/brand/logo-stacked-white.png" },
  monogram: { light: "assets/brand/logo-monogram.png", white: "assets/brand/logo-monogram-white.png" },
  stamp: { light: "assets/brand/logo-stamp-transparent.png", white: "assets/brand/logo-stamp-white.png" }
};

/* Marca oficial: SIEMPRE archivo, nunca tipografía recompuesta.
   El nombre es "Spacio AM", nunca "Espacio AM". */
export function Wordmark({ variant = "primary", height = 56, onDark = false, base = "", alt = "Spacio AM", style }) {
  const set = SRC[variant] || SRC.primary;
  const src = (base ? base.replace(/\/$/, "") + "/" : "") + (onDark ? set.white : set.light);
  return <img src={src} alt={alt} style={{ height, width: "auto", display: "block", ...style }} />;
}

/* Sparkle: sigilo de 4 puntas de la marca. Acento gráfico, nunca contenedor de texto. */
export function Sparkle({ size = 14, color = "var(--accent)", style }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} fill={color} aria-hidden="true"
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0, ...style }}>
      <path d="M50 4 C 52 32, 58 42, 96 50 C 58 58, 52 68, 50 96 C 48 68, 42 58, 4 50 C 42 42, 48 32, 50 4 Z" />
    </svg>
  );
}
