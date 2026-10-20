import React from "react";

/* Label en mayúsculas, tracking 0.32em. El susurro sobre el titular. */
export function Eyebrow({ children, as = "div", color = "var(--fg-muted)", style, ...rest }) {
  const Tag = as;
  return (
    <Tag style={{
      fontFamily: "var(--font-sans)", fontSize: "var(--t-eyebrow)", fontWeight: 500,
      letterSpacing: "var(--tr-eyebrow)", textTransform: "uppercase", color, ...style
    }} {...rest}>{children}</Tag>
  );
}

/* Cabecera de sección editorial: eyebrow + titular serif + subtítulo. */
export function SectionHead({ eyebrow, title, sub, right, style }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "var(--s-4)", flexWrap: "wrap", marginBottom: "var(--s-4)", ...style }}>
      <div style={{ minWidth: 0 }}>
        {eyebrow ? <Eyebrow style={{ marginBottom: "var(--s-2)" }}>{eyebrow}</Eyebrow> : null}
        <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(24px,3.2vw,34px)", lineHeight: "var(--lh-heading)", letterSpacing: "var(--tr-tight)", color: "var(--fg)", margin: 0, textWrap: "balance" }}>{title}</h2>
        {sub ? <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: "var(--lh-body)", letterSpacing: "var(--tr-wide)", color: "var(--fg-muted)", margin: "10px 0 0", maxWidth: 520, textWrap: "pretty" }}>{sub}</p> : null}
      </div>
      {right}
    </div>
  );
}
