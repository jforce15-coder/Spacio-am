import React, { useState } from "react";
import { Icon } from "../brand/Icon.jsx";

const VARIANTS = {
  primary:   { background: "var(--fg)", color: "var(--accent-contrast)", boxShadow: "none" },
  accent:    { background: "var(--accent-tint)", color: "var(--fg)", boxShadow: "inset 0 0 0 1px var(--accent)" },
  secondary: { background: "transparent", color: "var(--fg)", boxShadow: "inset 0 0 0 1px var(--fg)" },
  text:      { background: "transparent", color: "var(--fg)", boxShadow: "none", borderBottom: "1px solid var(--fg)", borderRadius: 0, padding: "8px 0" },
  danger:    { background: "var(--color-error)", color: "var(--accent-contrast)", boxShadow: "none" }
};
const SIZES = {
  sm: { padding: "10px 20px", fontSize: 10.5 },
  md: { padding: "14px 28px", fontSize: 11.5 },
  lg: { padding: "17px 34px", fontSize: 12 }
};

/* Píldora siempre. El peach NUNCA carga texto (blanco 2.56:1, ink 3.96:1 — ambos fallan):
   el CTA cálido es tinte peach + borde peach + texto ink. Máximo un primario por vista. */
export function Button({
  children, variant = "primary", size = "md", icon, iconRight, uppercase = true,
  disabled = false, loading = false, full = false, type = "button", onClick, style, ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const off = disabled || loading;
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "var(--s-2)",
    fontFamily: "var(--font-sans)", fontWeight: 500, letterSpacing: "var(--tr-wide)",
    textTransform: uppercase ? "uppercase" : "none",
    border: "none", borderRadius: "var(--r-pill)", cursor: off ? "not-allowed" : "pointer",
    width: full ? "100%" : "auto", whiteSpace: "nowrap",
    transition: "background var(--d-fast) var(--ease), box-shadow var(--d-fast) var(--ease), transform var(--d-fast) var(--ease)",
    transform: press && !off ? "scale(0.98)" : "none"
  };
  const v = VARIANTS[variant] || VARIANTS.primary;
  const offStyle = off ? { background: "var(--divider)", color: "var(--fg-subtle)", boxShadow: "none" } : null;
  const hoverStyle = hover && !off && variant !== "text"
    ? { boxShadow: "var(--shadow-sm)" + (v.boxShadow !== "none" ? ", " + v.boxShadow : ""), filter: "brightness(0.94)" }
    : null;
  return (
    <button type={type} disabled={off} onClick={off ? undefined : onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{ ...base, ...SIZES[size], ...v, ...offStyle, ...hoverStyle, ...style }} {...rest}>
      {loading
        ? <span aria-hidden="true" style={{ width: 13, height: 13, borderRadius: "50%", border: "1.75px solid color-mix(in oklab, currentColor 26%, transparent)", borderTopColor: "var(--color-peach-neon)", animation: "sa-spin 720ms linear infinite" }} />
        : icon ? <Icon name={icon} size={16} /> : null}
      {children}
      {iconRight && !loading ? <Icon name={iconRight} size={16} /> : null}
    </button>
  );
}
