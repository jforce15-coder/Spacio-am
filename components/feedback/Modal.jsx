import React, { useEffect } from "react";
import { Icon } from "../brand/Icon.jsx";
import { Sparkle } from "../brand/Wordmark.jsx";

/* Template estándar de EPI: overlay ink 55% + blur 4, panel radio 28, sombra lg.
   Cierra con Esc y con click en el overlay. En móvil puede subir como hoja inferior. */
export function Modal({ open = true, title, children, actions, onClose, sheet = false, width = 480, sparkle = false }) {
  useEffect(() => {
    if (!open) return;
    const h = (e) => { if (e.key === "Escape" && onClose) onClose(); };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true"
      onClick={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}
      style={{
        position: "absolute", inset: 0, zIndex: 500, background: "var(--overlay)",
        backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)", display: "grid",
        placeItems: sheet ? "end center" : "center", padding: sheet ? 0 : "var(--s-4)"
      }}>
      <div style={{
        width: sheet ? "100%" : "min(" + width + "px, 94%)", background: "var(--surface)",
        borderRadius: sheet ? "var(--r-card-top)" : "var(--r-xl)", padding: "var(--s-5)",
        boxShadow: "var(--shadow-lg)", position: "relative", maxHeight: "86%", overflowY: "auto",
        animation: "sa-rise var(--d-med) var(--ease) both"
      }}>
        {onClose ? (
          <button type="button" onClick={onClose} aria-label="Cerrar"
            style={{ position: "absolute", top: 18, right: 18, background: "transparent", border: "none", cursor: "pointer", color: "var(--fg-muted)", padding: 4, display: "flex" }}>
            <Icon name="x" size={18} />
          </button>
        ) : null}
        {title ? (
          <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: "var(--s-3)", paddingRight: 28 }}>
            {sparkle ? <Sparkle size={13} /> : null}
            <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "var(--t-h3)", lineHeight: "var(--lh-heading)", color: "var(--fg)", margin: 0 }}>{title}</h3>
          </div>
        ) : null}
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: "var(--lh-body)", letterSpacing: "var(--tr-wide)", color: "var(--fg-muted)" }}>{children}</div>
        {actions ? <div style={{ display: "flex", justifyContent: "flex-end", gap: "var(--s-2)", marginTop: "var(--s-5)", flexWrap: "wrap" }}>{actions}</div> : null}
      </div>
    </div>
  );
}
