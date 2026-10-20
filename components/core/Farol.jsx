import React from "react";

const SCALE = {
  success:   { fg: "var(--color-success)", bg: "var(--color-success-tint)" },
  attention: { fg: "var(--attention-text)", bg: "var(--attention-tint)", dot: "var(--attention)" },
  warning:   { fg: "var(--color-warning)", bg: "var(--color-warning-tint)" },
  error:     { fg: "var(--color-error)",   bg: "var(--color-error-tint)" },
  info:      { fg: "var(--color-info)",    bg: "var(--color-info-tint)" },
  pending:   { fg: "var(--color-pending)", bg: "var(--color-pending-tint)" }
};

/* Escala única de estados de las 3 apps.
   El peach vive aquí como "attention" — algo que merece la mirada, no una falla.
   El rojo queda para la excepción que exige acción. */
export function Farol({ state = "pending", children, dotOnly = false, label, style }) {
  const c = SCALE[state] || SCALE.pending;
  const dot = <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: "50%", background: c.dot || "currentColor", flexShrink: 0 }} />;
  if (dotOnly) {
    return <span role="img" aria-label={label || state} title={label || state} style={{ display: "inline-flex", color: c.fg, ...style }}>{dot}</span>;
  }
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "var(--s-2)",
      fontFamily: "var(--font-sans)", fontSize: "var(--t-small)", fontWeight: 600,
      letterSpacing: "var(--tr-wide)", padding: "var(--s-1) var(--s-3)",
      borderRadius: "var(--r-pill)", color: c.fg, background: c.bg, whiteSpace: "nowrap", ...style
    }}>{dot}{children}</span>
  );
}
