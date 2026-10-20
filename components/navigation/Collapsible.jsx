import React, { useState } from "react";
import { Icon } from "../brand/Icon.jsx";

/* Patrón de EPI: minimizar todo lo que no se está usando.
   En móvil, las secciones secundarias arrancan colapsadas; en escritorio, expandidas. */
export function Collapsible({ title, meta, children, defaultOpen = true, style }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderTop: "1px solid var(--divider)", ...style }}>
      <button type="button" onClick={() => setOpen(o => !o)} aria-expanded={open}
        style={{
          width: "100%", display: "flex", alignItems: "center", gap: "var(--s-3)",
          background: "transparent", border: "none", cursor: "pointer", padding: "16px 0", textAlign: "left"
        }}>
        <span style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 20, lineHeight: 1.2, color: "var(--fg)", flex: 1 }}>{title}</span>
        {meta ? <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--t-eyebrow)", letterSpacing: "var(--tr-eyebrow)", textTransform: "uppercase", color: "var(--fg-muted)" }}>{meta}</span> : null}
        <Icon name="chevronDown" size={18} color="var(--fg-muted)"
          style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform var(--d-med) var(--ease)" }} />
      </button>
      {open ? <div style={{ paddingBottom: "var(--s-4)", animation: "sa-fade var(--d-med) var(--ease)" }}>{children}</div> : null}
    </div>
  );
}
