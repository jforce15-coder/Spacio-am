import React from "react";

/* Display de filtros: control segmentado en píldora sobre --bg-alt. */
export function Segmented({ options = [], value, onChange, size = "md", style }) {
  const pad = size === "sm" ? "7px 12px" : "9px 16px";
  const fs = size === "sm" ? 10.5 : 11;
  return (
    <div style={{ display: "inline-flex", padding: 3, background: "var(--bg-alt)", borderRadius: "var(--r-pill)", gap: 2, ...style }}>
      {options.map(o => {
        const active = o.value === value;
        return (
          <button key={o.value} type="button" onClick={() => onChange && onChange(o.value)}
            style={{
              border: "none", cursor: "pointer", padding: pad, borderRadius: "var(--r-pill)",
              fontFamily: "var(--font-sans)", fontSize: fs, fontWeight: 500,
              letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap",
              background: active ? "var(--bg)" : "transparent",
              color: active ? "var(--fg)" : "var(--fg-muted)",
              boxShadow: active ? "var(--shadow-xs)" : "none",
              transition: "all var(--d-fast) var(--ease)"
            }}>{o.label}</button>
        );
      })}
    </div>
  );
}
