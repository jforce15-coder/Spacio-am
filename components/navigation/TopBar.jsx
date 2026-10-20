import React from "react";
import { Wordmark } from "../brand/Wordmark.jsx";
import { Segmented } from "./Segmented.jsx";
import { Select } from "../forms/Select.jsx";
import { Icon } from "../brand/Icon.jsx";

/* Chrome de navegación de las apps de producto (Dashboard, EPI):
   barra superior persistente · filtro global de mes arriba-izquierda ·
   moneda + idioma arriba-derecha. */
export function TopBar({
  base = "", month, months = [], onMonth, scope, scopes, onScope,
  currency, onCurrency, lang, onLang, alert, onAlert, initials, onAvatar, style
}) {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 40, background: "rgba(250,250,250,0.88)",
      backdropFilter: "blur(20px) saturate(120%)", WebkitBackdropFilter: "blur(20px) saturate(120%)",
      borderBottom: "1px solid var(--color-ink-08)", ...style
    }}>
      <div style={{ maxWidth: "var(--container-standard)", margin: "0 auto", padding: "12px var(--s-4)", display: "flex", alignItems: "center", gap: "var(--s-3)", flexWrap: "wrap" }}>
        <Wordmark variant="stacked" height={48} base={base} style={{ marginRight: "var(--s-2)" }} />
        {scopes ? <Select icon="home" value={scope} onChange={onScope} options={scopes} minWidth={200} /> : null}
        {months.length ? <Select icon="calendar" value={month} onChange={onMonth} options={months} minWidth={170} /> : null}
        {alert ? (
          <button type="button" onClick={onAlert} style={{
            display: "inline-flex", alignItems: "center", gap: 8, border: "none", cursor: "pointer",
            background: "var(--accent-tint)", color: "var(--fg)", boxShadow: "inset 0 0 0 1px var(--accent)", borderRadius: "var(--r-pill)",
            padding: "9px 15px", fontFamily: "var(--font-sans)", fontSize: 10.5, fontWeight: 600,
            letterSpacing: "var(--tr-wide)", textTransform: "uppercase"
          }}>
            <Icon name="alert" size={14} />{alert}
          </button>
        ) : null}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "var(--s-2)" }}>
          {currency ? <Segmented size="sm" value={currency} onChange={onCurrency} options={[{ value: "USD", label: "USD" }, { value: "GTQ", label: "GTQ" }]} /> : null}
          {lang ? <Segmented size="sm" value={lang} onChange={onLang} options={[{ value: "es", label: "ES" }, { value: "en", label: "EN" }]} /> : null}
          {initials ? (
            <button type="button" onClick={onAvatar} aria-label="Mi cuenta" style={{
              width: 36, height: 36, borderRadius: "50%", border: "1px solid var(--color-ink-08)",
              background: "var(--bg-alt)", cursor: "pointer", fontFamily: "var(--font-sans)",
              fontSize: 11, fontWeight: 600, letterSpacing: "var(--tr-normal)", color: "var(--fg)"
            }}>{initials}</button>
          ) : null}
        </div>
      </div>
    </header>
  );
}

/* Nav translúcida editorial (marketing / Guest): píldora flotante con blur.
   El logo principal va a escala completa: nunca más bajo que el resto de la píldora. */
export function PillNav({ links = [], active, onSelect, cta, base = "", style }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "var(--s-4) 0", ...style }}>
      <nav style={{
        display: "inline-flex", alignItems: "center", gap: "var(--s-5)", padding: "8px 24px 8px 14px",
        background: "rgba(250,250,250,0.72)", backdropFilter: "blur(20px) saturate(120%)",
        WebkitBackdropFilter: "blur(20px) saturate(120%)", borderRadius: "var(--r-pill)",
        boxShadow: "var(--shadow-sm)", flexWrap: "wrap"
      }}>
        <Wordmark variant="monogram" height={44} base={base} />
        <div style={{ display: "flex", gap: "var(--s-4)", flexWrap: "wrap" }}>
          {links.map(l => (
            <button key={l} type="button" onClick={() => onSelect && onSelect(l)}
              style={{
                border: "none", background: "transparent", cursor: "pointer", padding: 0,
                fontFamily: "var(--font-sans)", fontSize: 10.5, fontWeight: 500,
                letterSpacing: "var(--tr-eyebrow)", textTransform: "uppercase", borderBottom: "2px solid " + (l === active ? "var(--accent)" : "transparent"), paddingBottom: 3,
                color: "var(--fg)", opacity: l === active ? 1 : 0.55,
                transition: "opacity var(--d-fast) var(--ease)"
              }}>{l}</button>
          ))}
        </div>
        {cta}
      </nav>
    </div>
  );
}
