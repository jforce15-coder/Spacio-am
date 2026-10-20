import React from "react";
import { Icon } from "../brand/Icon.jsx";

/* Navegación inferior móvil. Dos formas reales del sistema:
   - "bar": barra a ancho completo con FAB peach central e ícono de casita blanco (EPI App).
   - "pill": píldora flotante con blur (Dashboard de Propietarios).
   Alturas de toque mínimo 44px. */
export function BottomNav({ items = [], value, onChange, variant = "bar", fab, onFab, style }) {
  const pill = variant === "pill";
  const shell = pill
    ? { left: "var(--s-3)", right: "var(--s-3)", bottom: "var(--s-3)", borderRadius: "var(--r-pill)", background: "rgba(250,250,250,0.9)", backdropFilter: "blur(20px) saturate(120%)", WebkitBackdropFilter: "blur(20px) saturate(120%)", boxShadow: "var(--shadow-md)", padding: "10px var(--s-3)" }
    : { left: 0, right: 0, bottom: 0, background: "rgba(250,250,250,0.94)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderTop: "1px solid var(--color-ink-08)", padding: "8px var(--s-3)" };
  return (
    <nav style={{ position: "sticky", zIndex: 45, display: "flex", alignItems: "center", justifyContent: "space-around", gap: 4, ...shell, ...style }}>
      {items.map((it, i) => {
        const active = it.value === value;
        const node = (
          <button key={it.value} type="button" onClick={() => onChange && onChange(it.value)}
            style={{
              flex: 1, minHeight: 44, background: "transparent", border: "none", cursor: "pointer",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 5, padding: "4px 2px",
              color: active ? "var(--fg)" : "var(--fg-muted)"
            }}>
            <Icon name={it.icon} size={20} />
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 9, fontWeight: 500, letterSpacing: "var(--tr-wide)", textTransform: "uppercase", lineHeight: 1.2, textAlign: "center" }}>{it.label}</span>
            {active ? <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--accent)" }} /> : null}
          </button>
        );
        if (fab && i === Math.floor(items.length / 2)) {
          return (
            <React.Fragment key={"fab" + i}>
              <button type="button" onClick={onFab} aria-label={fab.label || "Inicio"}
                style={{
                  width: 58, height: 58, minWidth: 58, borderRadius: "50%", border: "none", cursor: "pointer",
                  background: "var(--accent)", color: "var(--color-white)", display: "grid", placeItems: "center",
                  boxShadow: "var(--shadow-md)", marginTop: -26, flexShrink: 0
                }}>
                <Icon name={fab.icon || "home"} size={22} color="var(--color-white)" />
              </button>
              {node}
            </React.Fragment>
          );
        }
        return node;
      })}
    </nav>
  );
}
