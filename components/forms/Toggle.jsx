import React from "react";
import { Icon } from "../brand/Icon.jsx";

/* Pista 36x20 píldora: --fg encendido, --divider apagado. */
export function Toggle({ checked = false, onChange, label, disabled = false, style }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: "var(--s-3)", cursor: disabled ? "not-allowed" : "pointer", ...style }}>
      <span role="switch" aria-checked={checked} tabIndex={disabled ? -1 : 0}
        onClick={() => !disabled && onChange && onChange(!checked)}
        onKeyDown={(e) => { if ((e.key === " " || e.key === "Enter") && !disabled) { e.preventDefault(); onChange && onChange(!checked); } }}
        style={{
          width: 36, height: 20, borderRadius: "var(--r-pill)", flexShrink: 0,
          background: disabled ? "var(--bg-alt)" : checked ? "var(--fg)" : "var(--divider)",
          position: "relative", transition: "background var(--d-fast) var(--ease)", display: "block"
        }}>
        <span style={{
          position: "absolute", top: 2, left: checked ? 18 : 2, width: 16, height: 16, borderRadius: "50%",
          background: "var(--surface)", boxShadow: "var(--shadow-xs)", transition: "left var(--d-fast) var(--ease)"
        }} />
      </span>
      {label ? <span style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, letterSpacing: "var(--tr-wide)", color: disabled ? "var(--fg-subtle)" : "var(--fg)" }}>{label}</span> : null}
    </label>
  );
}

/* Checkbox: radio --r-sm, borde 1.5px, check con ícono 1.5. */
export function Checkbox({ checked = false, onChange, label, disabled = false, style }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: "var(--s-3)", cursor: disabled ? "not-allowed" : "pointer", ...style }}>
      <span role="checkbox" aria-checked={checked} tabIndex={disabled ? -1 : 0}
        onClick={() => !disabled && onChange && onChange(!checked)}
        onKeyDown={(e) => { if ((e.key === " " || e.key === "Enter") && !disabled) { e.preventDefault(); onChange && onChange(!checked); } }}
        style={{
          width: 20, height: 20, borderRadius: "var(--r-sm)", flexShrink: 0, display: "grid", placeItems: "center",
          border: "1.5px solid " + (disabled ? "var(--divider)" : checked ? "var(--fg)" : "var(--divider)"),
          background: disabled ? "var(--bg-alt)" : checked ? "var(--fg)" : "transparent",
          transition: "background var(--d-fast) var(--ease), border-color var(--d-fast) var(--ease)"
        }}>
        {checked ? <Icon name="check" size={13} color="var(--fg-inverse)" /> : null}
      </span>
      {label ? <span style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, letterSpacing: "var(--tr-wide)", color: disabled ? "var(--fg-subtle)" : "var(--fg)" }}>{label}</span> : null}
    </label>
  );
}
