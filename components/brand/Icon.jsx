import React from "react";

/* Set Lucide curado, inline. Grosor único 1.5, tamaños 20/24.
   Los paths vienen del set inline de las apps de Spacio AM. */
export const ICON_PATHS = {
  chevronDown: "M6 9l6 6 6-6",
  chevronRight: "M9 6l6 6-6 6",
  chevronLeft: "M15 6l-6 6 6 6",
  chevronUp: "M6 15l6-6 6 6",
  arrowRight: "M5 12h14M13 6l6 6-6 6",
  arrowLeft: "M19 12H5M11 6l-6 6 6 6",
  arrowUpRight: "M7 17L17 7M8 7h9v9",
  calendar: "M8 2v4M16 2v4M3.5 9h17M5 5h14a1.5 1.5 0 011.5 1.5v12A1.5 1.5 0 0119 20H5a1.5 1.5 0 01-1.5-1.5v-12A1.5 1.5 0 015 5z",
  copy: "M9 9h10a1 1 0 011 1v10a1 1 0 01-1 1H9a1 1 0 01-1-1V10a1 1 0 011-1zM5 15H4a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v1",
  upload: "M12 16V4M7 9l5-5 5 5M5 20h14",
  download: "M12 4v12M7 11l5 5 5-5M5 20h14",
  alert: "M12 3.2L2.4 19.6a1 1 0 00.87 1.5h17.46a1 1 0 00.87-1.5L12 3.2zM12 9v5M12 17.2v.05",
  search: "M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.3-4.3",
  trash: "M4 7h16M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2M6 7l1 13a1 1 0 001 1h8a1 1 0 001-1l1-13",
  pencil: "M4 20h4L18.5 9.5a2 2 0 00-2.8-2.8L5 17.2V20zM14.5 6.5l3 3",
  user: "M12 12a4 4 0 100-8 4 4 0 000 8zM4.5 20a7.5 7.5 0 0115 0",
  logout: "M9 21H5a1.5 1.5 0 01-1.5-1.5v-15A1.5 1.5 0 015 3h4M16 17l5-5-5-5M21 12H9",
  home: "M3.5 11L12 4l8.5 7M5.5 9.5V20h13V9.5",
  info: "M12 16v-5M12 8h.01M12 21a9 9 0 100-18 9 9 0 000 18z",
  x: "M6 6l12 12M18 6L6 18",
  plus: "M12 5v14M5 12h14",
  menu: "M4 7h16M4 12h16M4 17h16",
  trendUp: "M3 17l6-6 4 4 8-8M15 7h6v6",
  trendDown: "M3 7l6 6 4-4 8 8M15 17h6v-6",
  dots: "M5 12h.01M12 12h.01M19 12h.01",
  key: "M15 7a4 4 0 11-3.9 5H7v2H5v2H2v-3l5.1-5.1A4 4 0 1115 7zM16 7h.01",
  lock: "M7 11V8a5 5 0 0110 0v3M5.5 11h13a1 1 0 011 1v8a1 1 0 01-1 1h-13a1 1 0 01-1-1v-8a1 1 0 011-1z",
  pin: "M12 21s7-6.4 7-11a7 7 0 10-14 0c0 4.6 7 11 7 11zM12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  bed: "M3 18v-7m0 0a2 2 0 012-2h11a3 3 0 013 3v6M3 11h18M3 18h18M6.5 9V8a1 1 0 011-1h2a1 1 0 011 1v1",
  guests: "M9 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM2.5 20a6.5 6.5 0 0113 0M16 11a3.5 3.5 0 000-7M17 14.5a6.5 6.5 0 014.5 5.5",
  clock: "M12 7v5l3 2M12 21a9 9 0 100-18 9 9 0 000 18z",
  star: "M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6L12 16.8 6.6 19.6l1.2-6L3.3 9.4l6.1-.8L12 3z",
  link: "M9 15l6-6M10 6l1-1a4 4 0 015.7 5.7l-1 1M14 18l-1 1A4 4 0 017.3 13.3l1-1",
  paperclip: "M21.2 11.1l-8.9 8.9a5.5 5.5 0 01-7.8-7.8l8.9-8.9a3.7 3.7 0 015.2 5.2l-8.9 8.9a1.85 1.85 0 01-2.6-2.6l8.2-8.2",
  eye: "M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12zM12 15a3 3 0 100-6 3 3 0 000 6z",
  eyeOff: "M3 3l18 18M10.6 10.7a3 3 0 004.2 4.2M9.4 5.7A9.5 9.5 0 0112 5.5c6 0 9.5 6.5 9.5 6.5a16 16 0 01-2.6 3.3M6.2 6.3A16 16 0 002.5 12S6 18.5 12 18.5a9 9 0 003.6-.7",
  check: "M5 12.5l4.5 4.5L19 7",
  globe: "M12 21a9 9 0 100-18 9 9 0 000 18zM3.5 12h17M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z",
  coins: "M9 8.5a4.5 2.5 0 109 0 4.5 2.5 0 10-9 0zM4.5 15.5a4.5 2.5 0 109 0M4.5 11.5a4.5 2.5 0 109 0M4.5 11.5v8c0 1.4 2 2.5 4.5 2.5s4.5-1.1 4.5-2.5M18 8.5v8",
  wrench: "M14.5 6.5a3.5 3.5 0 01-4.6 4.6L5 16l3 3 4.9-4.9a3.5 3.5 0 004.6-4.6l-2.1 2.1-2-.5-.5-2 2.1-2.1z",
  sofa: "M5 11V8.5A2.5 2.5 0 017.5 6h9A2.5 2.5 0 0119 8.5V11M3 12.5A1.5 1.5 0 014.5 11h0A1.5 1.5 0 016 12.5V16h12v-3.5A1.5 1.5 0 0119.5 11h0a1.5 1.5 0 011.5 1.5V18H3v-5.5zM6 18v2M18 18v2",
  file: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M9 13h6M9 17h4",
  grid: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  mail: "M3.5 6.5h17v11h-17zM3.5 7l8.5 6 8.5-6",
  bank: "M3 9.5L12 4l9 5.5M4 9.5h16M5.5 10v8M9.5 10v8M14.5 10v8M18.5 10v8M3.5 18.5h17M3 21h18",
  wifi: "M2 8.5C5.5 5.5 18.5 5.5 22 8.5M5 12c3-2.5 11-2.5 14 0M8 15.5c2-1.5 6-1.5 8 0M12 19h.01",
  camera: "M4 8a2 2 0 012-2h1.5l1-2h5l1 2H18a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2zM12 16.4a3.4 3.4 0 100-6.8 3.4 3.4 0 000 6.8z",
  refresh: "M3 12a9 9 0 0115-6.7L21 8M21 3v5h-5M21 12a9 9 0 01-15 6.7L3 16M3 21v-5h5",
  settings: "M12 15a3 3 0 100-6 3 3 0 000 6zM12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
};

export function Icon({ name, size = 20, color = "currentColor", strokeWidth = 1.5, style, title }) {
  const d = ICON_PATHS[name] || "";
  /* El stroke va por `style`, no por atributo: un atributo de presentación SVG
     no resuelve var(--token), y el ícono terminaría pintado del color por defecto. */
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      role={title ? "img" : undefined} aria-hidden={title ? undefined : true}
      style={{ display: "block", flexShrink: 0, stroke: color, ...style }}>
      {title ? <title>{title}</title> : null}
      {d.split("M").filter(Boolean).map((seg, i) => <path key={i} d={"M" + seg} />)}
    </svg>
  );
}
