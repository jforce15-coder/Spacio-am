import React from "react";

export const DOMAIN_CATEGORIES = [
  "limpieza-tradicional", "limpieza-profunda", "mantenimiento", "nuevo-producto",
  "ajuste", "danos", "supervision", "cancelacion", "wifi"
];
const LABELS = {
  "limpieza-tradicional": "Limpieza tradicional",
  "limpieza-profunda": "Limpieza profunda",
  "mantenimiento": "Mantenimiento",
  "nuevo-producto": "Nuevo producto",
  "ajuste": "Ajuste",
  "danos": "Daños",
  "supervision": "Supervisión",
  "cancelacion": "Cancelación",
  "wifi": "Wi-Fi"
};

/* CAPA DE DOMINIO de la EPI App: hereda forma y tipo del core, pero sus colores
   viven en tokens/domain.css. Guest y Dashboard NO cargan esta capa. */
export function DomainBadge({ category, children, style }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600,
      letterSpacing: "var(--tr-normal)", padding: "4px 10px", borderRadius: "var(--r-pill)",
      background: "var(--dom-" + category + "-bg)", color: "var(--dom-" + category + "-fg)",
      whiteSpace: "nowrap", ...style
    }}>{children || LABELS[category] || category}</span>
  );
}
