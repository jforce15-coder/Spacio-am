import React, { useState } from "react";

/* Jerarquía, no paleta categórica: la serie base va en ink y UNA serie va en peach.
   El peach dice "mira esto". El resto son neutros cálidos. */
export const SERIES = ["var(--series-1)", "var(--series-accent)", "var(--series-2)", "var(--series-3)", "var(--series-6)", "var(--series-4)"];

/* Curva Catmull-Rom → Bézier: las líneas de Spacio AM son suaves, nunca quebradas. */
function smoothPath(pts) {
  if (pts.length < 2) return "";
  let d = "M" + pts[0][0] + " " + pts[0][1];
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    const t = 0.22;
    d += " C" + (p1[0] + (p2[0] - p0[0]) * t) + " " + (p1[1] + (p2[1] - p0[1]) * t) +
         " " + (p2[0] - (p3[0] - p1[0]) * t) + " " + (p2[1] - (p3[1] - p1[1]) * t) +
         " " + p2[0] + " " + p2[1];
  }
  return d;
}

export function LineChart({ series = [], labels = [], height = 260, formatY = (v) => v, formatTip, style }) {
  const [hover, setHover] = useState(null);
  const all = series.flatMap(s => s.values || []);
  const max = Math.max(1, ...all) * 1.08, min = 0;
  const W = 680, H = height, padL = 52, padB = 30, padT = 14, padR = 14;
  const n = Math.max(1, ...series.map(s => (s.values || []).length));
  const x = (i) => padL + (i * (W - padL - padR)) / Math.max(1, n - 1);
  const y = (v) => padT + (1 - (v - min) / (max - min || 1)) * (H - padT - padB);
  const ticks = [0, 0.25, 0.5, 0.75, 1].map(t => min + t * (max - min));

  return (
    <div style={{ position: "relative", ...style }}>
      <svg viewBox={"0 0 " + W + " " + H} width="100%" height={height} role="img"
        onMouseLeave={() => setHover(null)}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          const px = ((e.clientX - r.left) / r.width) * W;
          const i = Math.round(((px - padL) / (W - padL - padR)) * (n - 1));
          setHover(i >= 0 && i < n ? i : null);
        }}
        style={{ display: "block", overflow: "visible" }}>
        <defs>
          {series.map((s, si) => {
            const color = s.color || SERIES[si % SERIES.length];
            return (
              <linearGradient key={si} id={"sa-g" + si} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={s.accent ? 0.20 : 0.10} />
                <stop offset="100%" stopColor={color} stopOpacity="0" />
              </linearGradient>
            );
          })}
        </defs>
        {ticks.map((t, i) => (
          <g key={i}>
            <line x1={padL} x2={W - padR} y1={y(t)} y2={y(t)} stroke="var(--divider)" strokeWidth="1" opacity={i ? 0.5 : 1} />
            <text x={padL - 12} y={y(t) + 4} textAnchor="end" style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.06em", fill: "var(--fg-muted)" }}>{formatY(t)}</text>
          </g>
        ))}
        {series.map((s, si) => {
          const vals = s.values || [];
          const color = s.color || SERIES[si % SERIES.length];
          const pts = vals.map((v, i) => [x(i), y(v)]);
          const d = smoothPath(pts);
          const area = d + " L" + x(vals.length - 1) + " " + y(min) + " L" + x(0) + " " + y(min) + " Z";
          return (
            <g key={si}>
              {s.fill !== false ? <path d={area} fill={"url(#sa-g" + si + ")"} /> : null}
              <path d={d} fill="none" stroke={color} strokeWidth={s.accent ? 2.6 : 2} strokeLinecap="round" strokeLinejoin="round" />
            </g>
          );
        })}
        {hover != null ? (
          <g>
            <line x1={x(hover)} x2={x(hover)} y1={padT} y2={H - padB} stroke="var(--divider)" strokeWidth="1" />
            {series.map((s, si) => {
              const v = (s.values || [])[hover];
              if (v == null) return null;
              const color = s.color || SERIES[si % SERIES.length];
              return <circle key={si} cx={x(hover)} cy={y(v)} r="5" fill="var(--surface)" stroke={color} strokeWidth="2.5" />;
            })}
          </g>
        ) : null}
        {labels.map((l, i) => (
          <text key={i} x={x(i)} y={H - 8} textAnchor="middle" style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "var(--tr-wide)", fill: hover === i ? "var(--fg)" : "var(--fg-muted)" }}>{l}</text>
        ))}
      </svg>

      {hover != null ? (
        <div style={{
          position: "absolute", left: "calc(" + (x(hover) / W) * 100 + "% + 14px)", top: 18,
          background: "var(--surface)", borderRadius: "var(--r-md)", boxShadow: "var(--shadow-md)",
          padding: "12px 14px", pointerEvents: "none", minWidth: 150, zIndex: 5,
          transform: hover > n / 2 ? "translateX(calc(-100% - 28px))" : "none"
        }}>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 9, fontWeight: 600, letterSpacing: "var(--tr-eyebrow)", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 9 }}>{labels[hover]}</div>
          {series.map((s, si) => {
            const v = (s.values || [])[hover];
            if (v == null) return null;
            return (
              <div key={si} style={{ display: "flex", alignItems: "center", gap: 9, marginTop: si ? 7 : 0 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: s.color || SERIES[si % SERIES.length], flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "var(--tr-normal)", color: "var(--fg-muted)", flex: 1 }}>{s.name}</span>
                <span className="t-num" style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, fontWeight: 600, color: "var(--fg)" }}>{formatTip ? formatTip(v) : formatY(v)}</span>
              </div>
            );
          })}
        </div>
      ) : null}

      <div style={{ display: "flex", gap: "var(--s-4)", flexWrap: "wrap", marginTop: "var(--s-3)" }}>
        {series.map((s, si) => (
          <span key={si} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-sans)", fontSize: "var(--t-eyebrow)", letterSpacing: "var(--tr-wide)", color: "var(--fg-muted)" }}>
            <span style={{ width: 16, height: 4, borderRadius: 2, background: s.color || SERIES[si % SERIES.length] }} />{s.name}
          </span>
        ))}
      </div>
    </div>
  );
}

/* Anillo de porcentaje. accent lo pinta en peach cuando el dato ES el protagonista. */
export function Gauge({ value = 0, size = 200, label, sub, accent = false, style }) {
  const r = size / 2 - 12, c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div style={{ position: "relative", width: size, height: size, ...style }}>
      <svg width={size} height={size} role="img" aria-label={pct + "%"}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--bg-alt)" strokeWidth="12" />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={accent ? "var(--accent)" : "var(--fg)"} strokeWidth="12" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={c * (1 - pct / 100)} transform={"rotate(-90 " + size / 2 + " " + size / 2 + ")"}
          style={{ transition: "stroke-dashoffset var(--d-slow) var(--ease)" }} />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6 }}>
        <span className="t-num" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: size * 0.2, letterSpacing: "-0.02em", color: "var(--fg)", lineHeight: 1 }}>{label != null ? label : pct + "%"}</span>
        {sub ? <span style={{ fontFamily: "var(--font-sans)", fontSize: 9.5, fontWeight: 500, letterSpacing: "var(--tr-eyebrow)", textTransform: "uppercase", color: "var(--fg-muted)" }}>{sub}</span> : null}
      </div>
    </div>
  );
}

/* Columnas. La barra destacada va en peach: es el "mira esto" del gráfico. */
export function BarChart({ data = [], height = 200, suffix = "%", style }) {
  const max = Math.max(1, ...data.map(d => d.value));
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: "var(--s-2)", height, ...style }}>
      {data.map((d, i) => (
        <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, height: "100%", justifyContent: "flex-end" }}>
          <span className="t-num" style={{ fontFamily: "var(--font-sans)", fontSize: 10.5, fontWeight: 600, color: d.highlight ? "var(--fg)" : "var(--fg-muted)" }}>{Math.round(d.value) + suffix}</span>
          <div style={{
            width: "100%", maxWidth: 34, height: (d.value / max) * (height - 52),
            background: d.highlight ? "var(--accent)" : "var(--bg-alt)",
            borderRadius: "var(--r-sm) var(--r-sm) 0 0",
            boxShadow: d.highlight ? "none" : "inset 0 0 0 1px var(--color-ink-08)",
            transition: "height var(--d-slow) var(--ease)"
          }} />
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 9, letterSpacing: "var(--tr-eyebrow)", textTransform: "uppercase", color: "var(--fg-muted)" }}>{d.label}</span>
        </div>
      ))}
    </div>
  );
}
