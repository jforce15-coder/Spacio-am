import React from "react";
import { Card } from "../core/Card.jsx";
import { Eyebrow } from "../core/Eyebrow.jsx";
import { Sparkle } from "../brand/Wordmark.jsx";
import { Icon } from "../brand/Icon.jsx";

/* KPI editorial: el número manda, el contexto susurra.
   Números SIEMPRE en Montserrat tabular (.t-num). */
export function KpiCard({ label, value, help, trend, invert = false, accent = false, big = false, footer, style }) {
  return (
    <Card variant="elevated" pad={big ? 26 : 20} style={{ display: "flex", flexDirection: "column", minHeight: big ? 150 : 120, ...style }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--s-2)" }}>
        <Eyebrow style={{ letterSpacing: "0.2em" }}>{label}</Eyebrow>
        {accent ? <Sparkle size={12} /> : null}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: "var(--s-2)", marginTop: big ? 16 : 12, flexWrap: "wrap" }}>
        <span className="t-num" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: big ? 42 : 30, letterSpacing: "-0.02em", lineHeight: 1, color: "var(--fg)" }}>{value}</span>
        {trend != null ? <Trend value={trend} invert={invert} /> : null}
      </div>
      {footer ? <div style={{ marginTop: "var(--s-3)" }}>{footer}</div> : null}
      {help ? <p style={{ fontFamily: "var(--font-sans)", fontSize: 11.5, letterSpacing: "var(--tr-normal)", lineHeight: 1.5, color: "var(--fg-muted)", margin: "auto 0 0", paddingTop: "var(--s-3)", textWrap: "pretty" }}>{help}</p> : null}
    </Card>
  );
}

/* Chip de variación. Mejora = verde · deterioro = ATENCIÓN (peach), no rojo:
   un mes a la baja es información, no una falla. `critical` sube a rojo cuando
   la caída sí exige acción. La flecha va en peach neón y el número en el tono
   accesible, para que el chip se lea peach de un vistazo sin perder AA. */
export function Trend({ value = 0, suffix = "%", invert = false, muted = false, critical = false }) {
  const up = value >= 0;
  const good = invert ? !up : up;
  const bad = critical ? "var(--color-error)" : "var(--attention-text)";
  const color = muted ? "var(--fg-muted)" : good ? "var(--color-success)" : bad;
  const glyph = muted || good || critical ? color : "var(--attention)";
  return (
    <span className="t-num" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "var(--font-sans)", fontSize: 11.5, fontWeight: 600, letterSpacing: "var(--tr-normal)", color }}>
      <Icon name={up ? "trendUp" : "trendDown"} size={13} color={glyph} />
      {(up ? "+" : "−") + Math.abs(value).toLocaleString("es-GT", { maximumFractionDigits: 1 }) + suffix}
    </span>
  );
}
