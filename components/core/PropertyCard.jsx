import React from "react";
import { Card } from "./Card.jsx";
import { Brushstroke } from "../brand/Brushstroke.jsx";
import { Eyebrow } from "./Eyebrow.jsx";
import { Farol } from "./Farol.jsx";

/* Card de propiedad: media con brushstroke + bloque editorial. */
export function PropertyCard({ image, location, name, meta, status, state = "success", base = "", onClick, style }) {
  return (
    <Card variant={onClick ? "interactive" : "elevated"} pad={0} onClick={onClick} style={{ overflow: "visible", ...style }}>
      <Brushstroke base={base} src={image} alt={name} height={190} />
      <div style={{ padding: "18px 20px 20px" }}>
        <Eyebrow>{location}</Eyebrow>
        <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: 22, lineHeight: 1.15, letterSpacing: "var(--tr-tight)", color: "var(--fg)", margin: "8px 0 0" }}>{name}</h3>
        <hr style={{ border: 0, borderTop: "1px solid var(--divider)", margin: "14px 0 12px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--s-3)" }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "var(--tr-wide)", color: "var(--fg-muted)" }}>{meta}</span>
          {status ? <Farol state={state}>{status}</Farol> : null}
        </div>
      </div>
    </Card>
  );
}
