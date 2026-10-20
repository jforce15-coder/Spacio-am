import React, { useState } from "react";
import { Icon } from "../brand/Icon.jsx";

const DENSITY = { compact: "10px 14px", comfortable: "14px 16px" };

/* Default = caja. La variante subrayada (editorial) se reserva a hero/marketing/onboarding. */
export function Input({
  label, value, onChange, placeholder, type = "text", helper, error,
  variant = "box", density = "comfortable", disabled = false, loading = false,
  icon, trailing, id, style, ...rest
}) {
  const [focus, setFocus] = useState(false);
  const underline = variant === "underline";
  const borderColor = error ? "var(--color-error)" : focus ? "var(--fg)" : "var(--divider)";
  const field = {
    width: "100%", boxSizing: "border-box", fontFamily: "var(--font-sans)",
    fontSize: "var(--t-body)", letterSpacing: "var(--tr-normal)", color: "var(--fg)",
    padding: underline ? "10px 0" : DENSITY[density],
    paddingLeft: icon && !underline ? 42 : undefined,
    background: disabled ? "var(--bg-alt)" : underline ? "transparent" : "var(--surface)",
    border: underline ? "none" : "1px solid " + borderColor,
    borderBottom: underline ? "1px solid " + (error ? "var(--color-error)" : "var(--fg)") : undefined,
    borderRadius: underline ? 0 : "var(--r-md)",
    outline: "none", boxShadow: focus ? "var(--focus-ring)" : "none",
    transition: "border-color var(--d-fast) var(--ease), box-shadow var(--d-fast) var(--ease)"
  };
  return (
    <label htmlFor={id} style={{ display: "flex", flexDirection: "column", gap: "var(--s-2)", width: "100%", ...style }}>
      {label ? <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--t-eyebrow)", fontWeight: 500, letterSpacing: "var(--tr-eyebrow)", textTransform: "uppercase", color: "var(--fg-muted)" }}>{label}</span> : null}
      <span style={{ position: "relative", display: "flex", alignItems: "center" }}>
        {icon && !underline ? <span style={{ position: "absolute", left: 15, color: "var(--fg-muted)", display: "flex" }}><Icon name={icon} size={18} /></span> : null}
        {loading
          ? <span style={{ ...field, height: 48, background: "var(--bg-alt)", animation: "sa-fade var(--d-med) var(--ease)" }} />
          : <input id={id} type={type} value={value} placeholder={placeholder} disabled={disabled}
              onChange={onChange ? (e) => onChange(e.target.value) : undefined}
              onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
              style={field} {...rest} />}
        {trailing ? <span style={{ position: "absolute", right: 12, display: "flex", color: "var(--fg-muted)" }}>{trailing}</span> : null}
      </span>
      {error ? <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-sans)", fontSize: "var(--t-eyebrow)", letterSpacing: "var(--tr-normal)", color: "var(--color-error)" }}><Icon name="alert" size={13} />{error}</span>
        : helper ? <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--t-eyebrow)", letterSpacing: "var(--tr-normal)", color: "var(--fg-muted)" }}>{helper}</span> : null}
    </label>
  );
}
