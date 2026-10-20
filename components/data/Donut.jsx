import React from "react";

/* Ink para la rebanada base, peach para LA que importa, neutros cálidos para el resto. */
const PALETTE = ["var(--series-1)", "var(--series-accent)", "var(--series-6)", "var(--series-2)", "var(--series-3)", "var(--series-4)", "var(--series-5)"];

/* Distribución en anillo + filas de leyenda con % y monto ("¿A dónde fue el dinero?"). */
export function Donut({ data = [], size = 220, total, totalLabel, legend = true, style }) {
  const sum = data.reduce((a, d) => a + (d.value || 0), 0) || 1;
  const r = size / 2 - 16, c = 2 * Math.PI * r;
  let acc = 0;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--s-5)", flexWrap: "wrap", ...style }}>
      <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
        <svg width={size} height={size} role="img">
          {data.map((d, i) => {
            const frac = (d.value || 0) / sum;
            const el = (
              <circle key={i} cx={size / 2} cy={size / 2} r={r} fill="none"
                stroke={d.color || PALETTE[i % PALETTE.length]} strokeWidth="26"
                strokeDasharray={c * frac + " " + c * (1 - frac)}
                strokeDashoffset={-c * acc}
                transform={"rotate(-90 " + size / 2 + " " + size / 2 + ")"}
                style={{ transition: "stroke-dasharray var(--d-slow) var(--ease)" }} />
            );
            acc += frac;
            return el;
          })}
        </svg>
        {total != null ? (
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 }}>
            <span className="t-num" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: size * 0.13, letterSpacing: "-0.02em", color: "var(--fg)" }}>{total}</span>
            {totalLabel ? <span style={{ fontFamily: "var(--font-sans)", fontSize: 9, fontWeight: 500, letterSpacing: "var(--tr-eyebrow)", textTransform: "uppercase", color: "var(--fg-muted)" }}>{totalLabel}</span> : null}
          </div>
        ) : null}
      </div>
      {legend ? (
        <div style={{ flex: 1, minWidth: 240 }}>
          {data.map((d, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "var(--s-3)", padding: "12px 0", borderTop: i ? "1px solid var(--color-ink-08)" : "none" }}>
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: d.color || PALETTE[i % PALETTE.length], flexShrink: 0 }} />
              <span style={{ flex: 1, fontFamily: "var(--font-sans)", fontSize: 13.5, letterSpacing: "var(--tr-normal)", color: "var(--fg)" }}>{d.label}</span>
              <span className="t-num" style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "var(--tr-normal)", color: "var(--fg-muted)" }}>{Math.round(((d.value || 0) / sum) * 100)}% del total</span>
              <span style={{ minWidth: 96, textAlign: "right" }}>{d.amount}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
