import React, { useState, useRef, useEffect } from "react";
import { Icon } from "../brand/Icon.jsx";

/* Select editorial: disparador píldora + panel radio lg. Usado en el chrome del Dashboard. */
export function Select({ value, options = [], onChange, icon, label, align = "left", minWidth = 200, disabled = false, style }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const cur = options.find(o => o.value === value);
  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block", ...style }}>
      {label ? <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "var(--t-eyebrow)", fontWeight: 500, letterSpacing: "var(--tr-eyebrow)", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: "var(--s-2)" }}>{label}</span> : null}
      <button type="button" disabled={disabled} onClick={() => setOpen(o => !o)}
        style={{
          display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer",
          background: disabled ? "var(--bg-alt)" : "var(--bg)", border: "1px solid var(--color-ink-08)",
          borderRadius: "var(--r-pill)", padding: "10px 14px 10px 16px",
          fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 500, letterSpacing: "var(--tr-normal)",
          color: disabled ? "var(--fg-subtle)" : "var(--fg)", boxShadow: "var(--shadow-xs)", minWidth
        }}>
        {icon ? <Icon name={icon} size={15} color="var(--fg-muted)" /> : null}
        <span style={{ flex: 1, textAlign: "left" }}>{cur ? cur.label : "—"}</span>
        <Icon name="chevronDown" size={14} color="var(--fg-muted)" style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform var(--d-fast) var(--ease)" }} />
      </button>
      {open ? (
        <div style={{
          position: "absolute", top: "calc(100% + 8px)", [align]: 0, zIndex: 60, minWidth,
          background: "var(--bg)", border: "1px solid var(--color-ink-08)", borderRadius: "var(--r-lg)",
          boxShadow: "var(--shadow-md)", padding: 6, maxHeight: 320, overflowY: "auto",
          animation: "sa-fade var(--d-fast) var(--ease)"
        }}>
          {options.map(o => {
            const active = o.value === value;
            return (
              <button key={o.value} type="button" onClick={() => { onChange && onChange(o.value); setOpen(false); }}
                style={{
                  display: "flex", alignItems: "center", gap: 10, width: "100%", textAlign: "left",
                  border: "none", cursor: "pointer", background: active ? "var(--bg-alt)" : "transparent",
                  borderRadius: "var(--r-sm)", padding: "11px 12px", fontFamily: "var(--font-sans)",
                  fontSize: 12.5, letterSpacing: "var(--tr-normal)", color: "var(--fg)", fontWeight: active ? 500 : 400
                }}>
                <span style={{ display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
                  <span>{o.label}</span>
                  {o.sub ? <span style={{ fontSize: 10.5, color: "var(--fg-muted)" }}>{o.sub}</span> : null}
                </span>
                {active ? <Icon name="check" size={15} color="var(--accent)" /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
