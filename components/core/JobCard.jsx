import React from "react";
import { Card } from "./Card.jsx";
import { DomainBadge } from "./DomainBadge.jsx";
import { Farol } from "./Farol.jsx";
import { Amount } from "./Amount.jsx";

const EDGE = {
  success: "var(--color-success)", attention: "var(--attention)", warning: "var(--color-warning)",
  error: "var(--color-error)", info: "var(--color-info)", pending: "var(--color-pending)"
};

/* Card de trabajo de la EPI App: filete de estado a la izquierda, badge de categoría,
   propiedad en serif, descripción, técnico, total y farol de pago. Es la presentación
   móvil de la tabla de trabajos (regla de densidad: cards en teléfono). */
export function JobCard({
  property, category, description, date, technician, amount, currency = "GTQ",
  state = "pending", statusLabel, payer, onClick, style
}) {
  return (
    <Card variant={onClick ? "interactive" : "elevated"} pad="var(--s-3)" onClick={onClick}
      style={{ borderLeft: "3px solid " + (EDGE[state] || EDGE.pending), ...style }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--s-3)", flexWrap: "wrap" }}>
        {category ? <DomainBadge category={category} /> : null}
        {date ? <span className="t-num" style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "var(--tr-normal)", color: "var(--fg-muted)" }}>{date}</span> : null}
      </div>
      <div style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 20, lineHeight: 1.2, color: "var(--fg)", marginTop: 10 }}>{property}</div>
      {description ? <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, lineHeight: 1.6, letterSpacing: "var(--tr-normal)", color: "var(--fg-muted)", margin: "6px 0 0" }}>{description}</p> : null}
      <hr style={{ border: 0, borderTop: "1px solid var(--divider)", margin: "14px 0 12px" }} />
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "var(--s-3)", flexWrap: "wrap" }}>
        <div style={{ minWidth: 0 }}>
          {technician ? (
            <>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 9.5, fontWeight: 600, letterSpacing: "var(--tr-eyebrow)", textTransform: "uppercase", color: "var(--fg-muted)" }}>Técnico</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, letterSpacing: "var(--tr-normal)", color: "var(--fg)", marginTop: 4 }}>{technician}</div>
            </>
          ) : null}
          {payer ? <span style={{ display: "inline-block", marginTop: 10, fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, letterSpacing: "var(--tr-normal)", padding: "4px 10px", borderRadius: "var(--r-pill)", background: "var(--dom-mantenimiento-bg)", color: "var(--dom-mantenimiento-fg)" }}>{payer}</span> : null}
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
          {amount != null ? <Amount value={amount} currency={currency} size={22} decimals={false} /> : null}
          {statusLabel ? <Farol state={state}>{statusLabel}</Farol> : null}
        </div>
      </div>
    </Card>
  );
}
