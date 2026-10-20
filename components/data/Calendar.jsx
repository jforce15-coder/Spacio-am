import React from "react";

const DOW = ["L", "M", "M", "J", "V", "S", "D"];
const STATE = {
  success: "var(--color-success)", attention: "var(--attention)", warning: "var(--color-warning)",
  error: "var(--color-error)", info: "var(--color-info)", pending: "var(--color-pending)"
};

/* Calendario mensual de EPI: celdas radio --r-sm, día en tabular,
   estado del día por farol (punto), hoy = borde --accent, seleccionado = fondo --fg. */
export function Calendar({ year, month, days = {}, selected, today, onSelect, style }) {
  const first = new Date(year, month, 1);
  const offset = (first.getDay() + 6) % 7;
  const count = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let d = 1; d <= count; d++) cells.push(d);
  return (
    <div style={style}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 4, marginBottom: 6 }}>
        {DOW.map((d, i) => (
          <span key={i} style={{ textAlign: "center", fontFamily: "var(--font-sans)", fontSize: 9, fontWeight: 600, letterSpacing: "var(--tr-eyebrow)", color: "var(--fg-muted)" }}>{d}</span>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 4 }}>
        {cells.map((d, i) => {
          if (d == null) return <span key={i} />;
          const st = days[d];
          const isSel = selected === d;
          const isToday = today === d;
          return (
            <button key={i} type="button" onClick={() => onSelect && onSelect(d)}
              style={{
                aspectRatio: "1", borderRadius: "var(--r-sm)", cursor: onSelect ? "pointer" : "default",
                border: isToday ? "1.5px solid var(--accent)" : "1px solid transparent",
                background: isSel ? "var(--fg)" : "var(--bg-alt)",
                color: isSel ? "var(--fg-inverse)" : "var(--fg)",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3,
                transition: "background var(--d-fast) var(--ease)", padding: 0
              }}>
              <span className="t-num" style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: isSel ? 600 : 500 }}>{d}</span>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: st ? STATE[st] : "transparent" }} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
