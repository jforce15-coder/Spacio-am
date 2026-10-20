import React from "react";

/* Monto editorial: símbolo + enteros con peso, decimales atenuados.
   Los números SIEMPRE en Montserrat tabular. */
export function Amount({ value = 0, currency = "GTQ", size = 34, decimals = true, weight = 600, color = "var(--fg)", style }) {
  const sym = currency === "USD" ? "$" : currency === "GTQ" ? "Q" : currency;
  const neg = value < 0;
  const abs = Math.abs(Number(value) || 0);
  const int = Math.floor(abs).toLocaleString("es-GT");
  const dec = Math.round((abs - Math.floor(abs)) * 100).toString().padStart(2, "0");
  return (
    <span className="t-num" style={{ fontFamily: "var(--font-sans)", fontWeight: weight, fontSize: size, letterSpacing: "-0.02em", lineHeight: 1, color, whiteSpace: "nowrap", ...style }}>
      {(neg ? "−" : "") + sym + (currency === "GTQ" ? "" : "") + int}
      {decimals ? <span style={{ color: "var(--fg-subtle)", fontSize: "0.62em" }}>.{dec}</span> : null}
    </span>
  );
}
