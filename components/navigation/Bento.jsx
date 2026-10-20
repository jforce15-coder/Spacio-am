import React from "react";
import { Sparkle } from "../brand/Wordmark.jsx";

/* Bento de la Guest App: pantalla de inicio / lanzador y cara visual de marca.
   2 columnas en móvil → 4 desde --bp-md. NO es la navegación permanente. */
export function Bento({ children, style }) {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "repeat(2,1fr)", gridAutoRows: "minmax(120px, auto)",
      gap: "var(--s-3)", gridAutoFlow: "dense", maxWidth: "var(--container-standard)", margin: "0 auto", ...style
    }}>{children}</div>
  );
}

/* Tile: imagen (con degradado de protección) o bloque de color con label. */
export function BentoTile({ image, label, tone = "solid", span = 1, rows = 1, icon, sparkle = false, onClick, style }) {
  const TONES = {
    solid: { background: "var(--bg-alt)", color: "var(--fg)" },
    ink: { background: "var(--fg)", color: "var(--fg-inverse)" },
    peach: { background: "var(--accent-tint)", color: "var(--fg)" },
    image: { background: "var(--bg-alt)", color: "var(--color-white)" }
  };
  const t = TONES[image ? "image" : tone];
  return (
    <button type="button" onClick={onClick} style={{
      gridColumn: "span " + span, gridRow: "span " + rows, position: "relative", overflow: "hidden",
      border: "none", cursor: onClick ? "pointer" : "default", textAlign: "left",
      borderRadius: "var(--r-lg)", boxShadow: "var(--shadow-sm)", padding: "var(--s-3)",
      display: "flex", alignItems: "flex-end", ...t, ...style
    }}>
      {image ? (
        <>
          <img src={image} alt="" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <span aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 45%,rgba(62,63,63,.55))" }} />
        </>
      ) : null}
      {sparkle ? <Sparkle size={16} style={{ position: "absolute", top: 12, right: 12 }} /> : null}
      <span style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "var(--tr-normal)" }}>
        {icon}{label}
      </span>
    </button>
  );
}
