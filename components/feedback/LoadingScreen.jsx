import React from "react";
import { Wordmark } from "../brand/Wordmark.jsx";

/* Loader inicial canónico del sistema (del Dashboard). EPI y Guest se alinean a este.
   Respeta prefers-reduced-motion vía tokens/motion.css. */
export function LoadingScreen({ base = "", label, variant = "stamp", full = true, style }) {
  return (
    <div style={{
      position: full ? "absolute" : "relative", inset: full ? 0 : undefined,
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      gap: "var(--s-4)", background: "var(--bg)", minHeight: full ? undefined : 240, ...style
    }}>
      <div style={{ animation: "sa-bounce 1.5s var(--ease) infinite" }}>
        <Wordmark variant={variant} height={variant === "primary" ? 64 : 72} base={base} />
      </div>
      <span aria-hidden="true" style={{ width: 46, height: 5, borderRadius: "var(--r-pill)", background: "var(--divider)", animation: "sa-shadow 1.5s var(--ease) infinite" }} />
      {label ? <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--t-eyebrow)", fontWeight: 500, letterSpacing: "var(--tr-eyebrow)", textTransform: "uppercase", color: "var(--fg-muted)" }}>{label}</span> : null}
    </div>
  );
}

/* Skeleton localizado: nunca dejes un control vacío sin feedback. */
export function Skeleton({ height = 14, width = "100%", radius = "var(--r-sm)", style }) {
  return <span aria-hidden="true" style={{ display: "block", height, width, borderRadius: radius, background: "var(--bg-alt)", ...style }} />;
}
