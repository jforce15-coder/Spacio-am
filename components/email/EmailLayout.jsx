import React from "react";

/* Sistema de correo basado en el template de EPI. Los tokens NO viven como var() en email:
   se compilan a hex. Esta es la paleta compilada — misma marca, estilos inline. */
export const EMAIL_HEX = {
  ink: "#3E3F3F", alabaster: "#FAFAFA", beige: "#F5F3F0", graphite: "#6F6867",
  warmGrey: "#D8D4CE", peach: "#E9826A", peachNeon: "#F2755A", white: "#FFFFFF"
};

/* Cabecera con logo, cuerpo Montserrat, botón primario ink, acentos peach gráficos, pie en graphite. */
export function EmailLayout({ preheader, logo, band, eyebrow, title, children, cta, ctaHref = "#", footer, width = 600 }) {
  const H = EMAIL_HEX;
  const cell = { fontFamily: "Montserrat, Helvetica, Arial, sans-serif", letterSpacing: "0.06em" };
  return (
    <table role="presentation" cellPadding="0" cellSpacing="0" style={{ width: "100%", background: H.beige, borderCollapse: "collapse" }}>
      <tbody>
        <tr><td align="center" style={{ padding: "28px 16px" }}>
          {preheader ? <div style={{ display: "none", fontSize: 1, color: H.beige }}>{preheader}</div> : null}
          <table role="presentation" cellPadding="0" cellSpacing="0" style={{ width: width, maxWidth: "100%", background: H.white, borderCollapse: "collapse", borderRadius: 14, overflow: "hidden" }}>
            <tbody>
              <tr><td align="center" style={{ padding: "26px 32px 18px", borderBottom: "1px solid " + H.warmGrey }}>
                {logo ? <img src={logo} alt="Spacio AM" width="150" style={{ display: "block", border: 0 }} /> : null}
              </td></tr>
              {band ? <tr><td><img src={band} alt="" width={width} style={{ display: "block", width: "100%", height: "auto", border: 0 }} /></td></tr> : null}
              <tr><td style={{ padding: "30px 32px 8px" }}>
                {eyebrow ? <div style={{ ...cell, fontSize: 10, fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: H.graphite, marginBottom: 12 }}>{eyebrow}</div> : null}
                <h1 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, fontSize: 28, lineHeight: 1.15, color: H.ink, margin: 0 }}>{title}</h1>
                <div style={{ width: 34, height: 2, background: H.peach, margin: "18px 0 0" }} />
              </td></tr>
              <tr><td style={{ ...cell, padding: "16px 32px 6px", fontSize: 14, lineHeight: 1.75, color: H.graphite }}>{children}</td></tr>
              {cta ? <tr><td style={{ padding: "22px 32px 30px" }}>
                <a href={ctaHref} style={{ ...cell, display: "inline-block", background: H.ink, color: H.alabaster, textDecoration: "none", padding: "14px 28px", borderRadius: 999, fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}>{cta}</a>
              </td></tr> : null}
              <tr><td style={{ ...cell, padding: "20px 32px 26px", borderTop: "1px solid " + H.warmGrey, fontSize: 10.5, lineHeight: 1.7, color: H.graphite, letterSpacing: "0.14em" }}>
                {footer || "Spacio AM · Guatemala · hola@spacioam.com"}
              </td></tr>
            </tbody>
          </table>
        </td></tr>
      </tbody>
    </table>
  );
}
