import React from "react";
import { Icon } from "../brand/Icon.jsx";

/* Tabs de sección de las apps de producto: etiqueta eyebrow + ícono 1.5,
   activo subrayado en --accent (el peach como filete: uso gráfico correcto).
   Dashboard: RESUMEN · GASTOS E INVERSIONES · DETALLE DEL MES · … */
export function TabNav({ tabs = [], value, onChange, align = "left", style }) {
  return (
    <div style={{ borderBottom: "1px solid var(--color-ink-08)", ...style }}>
      <div style={{ display: "flex", gap: "var(--s-5)", overflowX: "auto", justifyContent: align === "center" ? "center" : "flex-start", scrollbarWidth: "none" }}>
        {tabs.map(t => {
          const active = t.value === value;
          return (
            <button key={t.value} type="button" onClick={() => onChange && onChange(t.value)}
              style={{
                display: "inline-flex", alignItems: "center", gap: "var(--s-2)", flexShrink: 0,
                background: "transparent", border: "none", cursor: "pointer",
                padding: "14px 2px 12px", borderBottom: "2px solid " + (active ? "var(--accent)" : "transparent"),
                marginBottom: -1, fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500,
                letterSpacing: "var(--tr-eyebrow)", textTransform: "uppercase",
                color: active ? "var(--fg)" : "var(--fg-muted)",
                transition: "color var(--d-fast) var(--ease), border-color var(--d-fast) var(--ease)"
              }}>
              {t.icon ? <Icon name={t.icon} size={16} /> : null}{t.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* Tabs en píldora (chrome secundario de EPI: Dashboard · Formulario · Programa · Calidad · Adelantos). */
export function PillTabs({ tabs = [], value, onChange, style }) {
  return (
    <div style={{ display: "inline-flex", padding: 4, gap: 2, background: "var(--bg-alt)", borderRadius: "var(--r-pill)", maxWidth: "100%", overflowX: "auto", ...style }}>
      {tabs.map(t => {
        const active = t.value === value;
        return (
          <button key={t.value} type="button" onClick={() => onChange && onChange(t.value)}
            style={{
              display: "inline-flex", alignItems: "center", gap: 7, flexShrink: 0,
              border: "none", cursor: "pointer", padding: "10px 18px", borderRadius: "var(--r-pill)",
              background: active ? "var(--fg)" : "transparent",
              color: active ? "var(--fg-inverse)" : "var(--fg-muted)",
              fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 500, letterSpacing: "var(--tr-normal)",
              transition: "all var(--d-fast) var(--ease)"
            }}>
            {t.icon ? <Icon name={t.icon} size={15} /> : null}{t.label}
          </button>
        );
      })}
    </div>
  );
}
