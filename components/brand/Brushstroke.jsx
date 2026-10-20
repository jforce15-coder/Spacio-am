import React from "react";

/* Tratamiento canónico de imagen: el ribbon 3D teje por DETRÁS y reemerge por DELANTE.
   Regla del sistema: toda imagen editorial/destacada >= ~160px lo lleva.
   Miniaturas, avatares e íconos de foto quedan exentos. */
export function Brushstroke({
  src, alt = "", height = 240, radius = "var(--r-card-top)", base = "",
  frontMask = "radial-gradient(120% 90% at 24% 92%, #000 0 38%, transparent 60%)",
  overlay, children, style
}) {
  const stroke = (base ? base.replace(/\/$/, "") + "/" : "") + "assets/brushstroke.svg";
  const layer = { position: "absolute", inset: "-26px -16px -22px", pointerEvents: "none" };
  const img = { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 };
  return (
    <div style={{ position: "relative", ...style }}>
      <div style={{ ...layer, zIndex: 0 }}><img src={stroke} alt="" aria-hidden="true" style={img} /></div>
      <div style={{ position: "relative", zIndex: 1, height, borderRadius: radius, overflow: "hidden", boxShadow: "var(--shadow-sm)", background: "var(--bg-alt)" }}>
        {src ? <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> : null}
        {overlay}
        {children}
      </div>
      <div style={{ ...layer, zIndex: 2, WebkitMaskImage: frontMask, maskImage: frontMask, filter: "drop-shadow(0 6px 14px rgba(62,63,63,.10))" }}>
        <img src={stroke} alt="" aria-hidden="true" style={img} />
      </div>
    </div>
  );
}
