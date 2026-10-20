import React, { useState } from "react";

/* La card es la unidad de información por defecto, sobre todo en móvil. */
export function Card({
  children, variant = "elevated", size = "md", pad, onClick, href, style, ...rest
}) {
  const [hover, setHover] = useState(false);
  const interactive = variant === "interactive" || !!onClick || !!href;
  const radius = size === "lg" ? "var(--r-xl)" : "var(--r-md)";
  const flat = variant === "flat";
  const base = {
    background: "var(--surface)", borderRadius: radius,
    padding: pad != null ? pad : "var(--s-4)",
    boxShadow: flat ? "inset 0 0 0 1px var(--color-ink-08)" : (hover && interactive ? "var(--shadow-md)" : "var(--shadow-sm)"),
    transform: hover && interactive ? "translateY(-3px)" : "none",
    transition: "box-shadow var(--d-med) var(--ease), transform var(--d-med) var(--ease)",
    cursor: interactive ? "pointer" : "default",
    boxSizing: "border-box", textDecoration: "none", color: "var(--fg)", display: "block"
  };
  const Tag = href ? "a" : "div";
  return (
    <Tag href={href} onClick={onClick}
      onMouseEnter={() => interactive && setHover(true)} onMouseLeave={() => interactive && setHover(false)}
      style={{ ...base, ...style }} {...rest}>{children}</Tag>
  );
}

/* Media superior con esquinas top-rounded + bloque de contenido. */
export function CardMedia({ src, alt = "", height = 200, children, style }) {
  return (
    <div style={{ borderRadius: "var(--r-card-top)", overflow: "hidden", height, background: "var(--bg-alt)", position: "relative", ...style }}>
      {src ? <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /> : null}
      {children}
    </div>
  );
}
