import React from "react";
import { Card } from "../core/Card.jsx";

/* Tabla-resumen: SOLO escritorio denso (admin, configuración).
   Colapsa a cards por debajo de --bp-md — pásale collapse para renderizar la vista de cards. */
export function SummaryTable({ columns = [], rows = [], collapse = false, empty = "Sin datos para este periodo.", style }) {
  if (collapse) {
    if (!rows.length) return <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: "var(--fg-muted)" }}>{empty}</p>;
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-3)", ...style }}>
        {rows.map((r, i) => (
          <Card key={i} variant="flat" pad="var(--s-3)">
            {columns.map((c, j) => (
              <div key={j} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--s-3)", padding: "5px 0" }}>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--t-eyebrow)", letterSpacing: "var(--tr-eyebrow)", textTransform: "uppercase", color: "var(--fg-muted)" }}>{c.header}</span>
                <span className={c.num ? "t-num" : undefined} style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, fontWeight: j === 0 ? 600 : 400, color: "var(--fg)" }}>{r[c.key]}</span>
              </div>
            ))}
          </Card>
        ))}
      </div>
    );
  }
  return (
    <div style={{ overflowX: "auto", ...style }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-sans)" }}>
        <thead>
          <tr>
            {columns.map((c, j) => (
              <th key={j} style={{
                position: "sticky", top: 0, background: "var(--bg-alt)", textAlign: c.num ? "right" : "left",
                fontSize: "var(--t-eyebrow)", fontWeight: 600, letterSpacing: "var(--tr-eyebrow)",
                textTransform: "uppercase", color: "var(--fg-muted)", padding: "12px 14px", whiteSpace: "nowrap"
              }}>{c.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length ? rows.map((r, i) => (
            <tr key={i}>
              {columns.map((c, j) => (
                <td key={j} className={c.num ? "t-num" : undefined} style={{
                  borderTop: "1px solid var(--color-ink-08)", padding: "13px 14px", fontSize: 12.5,
                  letterSpacing: "var(--tr-normal)", color: "var(--fg)", textAlign: c.num ? "right" : "left",
                  fontWeight: j === 0 ? 500 : 400
                }}>{r[c.key]}</td>
              ))}
            </tr>
          )) : (
            <tr><td colSpan={columns.length} style={{ borderTop: "1px solid var(--color-ink-08)", padding: "22px 14px", fontSize: 12.5, color: "var(--fg-muted)", textAlign: "center" }}>{empty}</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
