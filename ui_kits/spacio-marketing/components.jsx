// Spacio AM — Marketing UI Kit · Components
// Editorial, warm, minimalist. Valky + Montserrat. Peach used as accent only.

const Sparkle = ({ size = 14, color = "#3E3F3F", style = {} }) => (
  <svg viewBox="0 0 100 100" fill={color} width={size} height={size} style={{ display: "inline-block", verticalAlign: "middle", ...style }} aria-hidden="true">
    <path d="M50 4 C 52 32, 58 42, 96 50 C 58 58, 52 68, 50 96 C 48 68, 42 58, 4 50 C 42 42, 48 32, 50 4 Z" />
  </svg>
);

// --- Wordmark (matches assets/logo-primary.svg) ---
const Wordmark = ({ size = 18, color = "#3E3F3F", withTagline = true }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 2, color, lineHeight: 1 }}>
    <Sparkle size={size * 0.5} color={color} style={{ marginBottom: 2 }} />
    <span style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: size, letterSpacing: "0.04em" }}>SPACIO</span>
    {withTagline && (
      <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--serif)", fontSize: size * 0.32, letterSpacing: "0.18em", color }}>
        <span>A</span>
        <span style={{ width: size * 1.6, height: 1, background: color, display: "inline-block" }}></span>
        <span>M</span>
      </span>
    )}
  </span>
);

// --- Top Navigation ---
const Nav = ({ active = "Filosofía" }) => {
  const links = ["Filosofía", "Propiedades", "Servicios", "Diario", "Contacto"];
  return (
    <header style={{
      position: "fixed", top: 18, left: 0, right: 0, zIndex: 50,
      display: "flex", justifyContent: "center", pointerEvents: "none"
    }}>
      <nav style={{
        pointerEvents: "auto",
        display: "flex", alignItems: "center", gap: 32,
        padding: "12px 22px",
        background: "rgba(250, 250, 250, 0.72)",
        backdropFilter: "blur(20px) saturate(120%)",
        WebkitBackdropFilter: "blur(20px) saturate(120%)",
        borderRadius: 999,
        boxShadow: "0 4px 16px rgba(62,63,63,0.05)"
      }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "var(--ink)" }}>
          <Sparkle size={12} />
          <span style={{ fontFamily: "var(--serif)", fontSize: 16, letterSpacing: "0.04em" }}>Spacio</span>
          <span style={{ fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.32em" }}>AM</span>
        </a>
        <div style={{ display: "flex", gap: 22 }}>
          {links.map(l => (
            <a key={l} href="#" style={{
              fontFamily: "var(--sans)", fontSize: 10.5, letterSpacing: "0.32em", textTransform: "uppercase",
              color: l === active ? "var(--peach)" : "var(--ink)", textDecoration: "none",
              transition: "opacity .18s var(--ease)"
            }}>{l}</a>
          ))}
        </div>
        <button style={{
          fontFamily: "var(--sans)", fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase",
          padding: "10px 18px", borderRadius: 999, background: "var(--ink)", color: "var(--alabaster)",
          border: "none", cursor: "pointer"
        }}>Reservar</button>
      </nav>
    </header>
  );
};

// --- Eyebrow label ---
const Eyebrow = ({ children, color = "var(--earth)" }) => (
  <div style={{
    fontFamily: "var(--sans)", fontSize: 11, fontWeight: 500,
    letterSpacing: "0.32em", textTransform: "uppercase", color
  }}>{children}</div>
);

// --- Big editorial display heading ---
const Display = ({ children, size = 96, italic = false, color = "var(--ink)", style = {} }) => (
  <h1 style={{
    fontFamily: "var(--serif)", fontWeight: 400, fontSize: size, lineHeight: 1.02,
    letterSpacing: "-0.012em", color, margin: 0, textWrap: "balance",
    fontStyle: italic ? "italic" : "normal", ...style
  }}>{children}</h1>
);

// --- Body paragraph ---
const Body = ({ children, max = 520, color = "var(--ink)", size = 14, style = {} }) => (
  <p style={{
    fontFamily: "var(--sans)", fontSize: size, fontWeight: 400,
    letterSpacing: "0.14em", lineHeight: 1.75, color, margin: 0, maxWidth: max, textWrap: "pretty", ...style
  }}>{children}</p>
);

// --- Buttons ---
const Button = ({ children, variant = "primary", arrow = false, onClick }) => {
  const base = {
    fontFamily: "var(--sans)", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase",
    padding: "14px 28px", borderRadius: 999, border: "none", cursor: "pointer",
    display: "inline-flex", alignItems: "center", gap: 10,
    transition: "all .18s var(--ease)"
  };
  const styles = {
    primary: { ...base, background: "var(--ink)", color: "var(--alabaster)" },
    secondary: { ...base, background: "transparent", color: "var(--ink)", boxShadow: "inset 0 0 0 1px var(--ink)" },
    peach: { ...base, background: "var(--peach)", color: "var(--alabaster)" },
    text: { ...base, background: "transparent", color: "var(--ink)", padding: "8px 0", borderRadius: 0, borderBottom: "1px solid var(--ink)", letterSpacing: "0.18em" }
  };
  return (
    <button style={styles[variant]} onClick={onClick}>
      {children}
      {arrow && <span style={{ display: "inline-block", width: 14, height: 1, background: "currentColor", position: "relative" }}>
        <span style={{ position: "absolute", right: 0, top: -3, width: 6, height: 6, borderTop: "1px solid currentColor", borderRight: "1px solid currentColor", transform: "rotate(45deg)" }}></span>
      </span>}
    </button>
  );
};

// --- The PETMA brushstroke as a positioned absolute element ---
const Brush = ({ style = {}, flip = false, opacity = 1 }) => (
  <img src="../../assets/brushstroke.svg" aria-hidden="true" style={{
    position: "absolute", width: "100%", height: "auto",
    transform: flip ? "scaleX(-1)" : "none",
    opacity, pointerEvents: "none", ...style
  }} />
);

// --- Property card (top-rounded image + caption block) ---
const PropertyCard = ({ image, location, name, beds, status = "Disponible", price }) => (
  <article style={{
    background: "var(--alabaster)", borderRadius: 18, overflow: "hidden",
    boxShadow: "0 4px 16px rgba(62,63,63,0.05)",
    display: "flex", flexDirection: "column",
    transition: "transform .36s var(--ease)"
  }}>
    <div style={{
      aspectRatio: "4 / 3", borderRadius: "18px 18px 0 0", overflow: "hidden", background: "var(--beige-soft)"
    }}>
      <img src={image} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
    </div>
    <div style={{ padding: "20px 22px 22px" }}>
      <Eyebrow>{location}</Eyebrow>
      <h3 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 24, color: "var(--ink)", margin: "10px 0 0", letterSpacing: "-0.01em", lineHeight: 1.1 }}>{name}</h3>
      <div style={{ height: 1, background: "var(--warm-grey)", margin: "16px 0 12px" }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "var(--sans)", fontSize: 11, letterSpacing: "0.18em", color: "var(--earth)" }}>{beds}</span>
        <span style={{ fontFamily: "var(--sans)", fontSize: 11, letterSpacing: "0.18em", color: "var(--ink)", display: "inline-flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--peach)" }}></span>
          {status}
        </span>
      </div>
      {price && <div style={{ fontFamily: "var(--sans)", fontSize: 13, fontWeight: 500, letterSpacing: "0.14em", color: "var(--ink)", marginTop: 14 }}>{price}</div>}
    </div>
  </article>
);

// --- Service tier card ---
const TierCard = ({ tier, percent, title, description, features = [], featured = false }) => (
  <div style={{
    background: featured ? "var(--ink)" : "var(--alabaster)",
    color: featured ? "var(--alabaster)" : "var(--ink)",
    borderRadius: 28, padding: "32px 28px 28px",
    boxShadow: featured ? "0 28px 80px rgba(62,63,63,0.10)" : "inset 0 0 0 1px var(--ink-08)",
    display: "flex", flexDirection: "column", gap: 18, minHeight: 380
  }}>
    <div style={{
      fontFamily: "var(--sans)", fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase",
      color: featured ? "var(--warm-grey)" : "var(--earth)"
    }}>{tier}</div>
    <div style={{ fontFamily: "var(--sans)", fontSize: 56, fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 1 }}>
      {percent}<span style={{ fontSize: 22, opacity: 0.6, marginLeft: 4 }}>%</span>
    </div>
    <div style={{ fontFamily: "var(--serif)", fontSize: 24, lineHeight: 1.15 }}>{title}</div>
    <div style={{ height: 1, background: featured ? "rgba(216,212,206,0.25)" : "var(--warm-grey)" }} />
    <p style={{
      fontFamily: "var(--sans)", fontSize: 12, lineHeight: 1.75, letterSpacing: "0.12em",
      color: featured ? "rgba(250,250,250,0.78)" : "var(--earth)", margin: 0
    }}>{description}</p>
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
      {features.map(f => (
        <li key={f} style={{ fontFamily: "var(--sans)", fontSize: 11, letterSpacing: "0.14em", display: "flex", alignItems: "flex-start", gap: 10 }}>
          <span style={{ marginTop: 7, width: 4, height: 4, borderRadius: "50%", background: featured ? "var(--peach)" : "var(--ink)" }}></span>
          {f}
        </li>
      ))}
    </ul>
  </div>
);

// --- Footer ---
const Footer = () => (
  <footer style={{ background: "var(--beige-soft)", padding: "72px 56px 32px", marginTop: 96 }}>
    <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48, maxWidth: 1280, margin: "0 auto" }}>
      <div>
        <Wordmark size={36} />
        <p style={{
          fontFamily: "var(--sans)", fontSize: 12, letterSpacing: "0.14em", lineHeight: 1.8,
          color: "var(--earth)", marginTop: 22, maxWidth: 320
        }}>Diseño, hospitalidad y experiencias que se sienten como hogar. Boutique short-stay management. Guatemala.</p>
      </div>
      {[
        { h: "Compañía", l: ["Filosofía", "Equipo", "Diario", "Prensa"] },
        { h: "Servicios", l: ["Contact Center", "Gestión Operativa", "Full Management", "Interiorismo"] },
        { h: "Contacto", l: ["hola@spacioam.com", "+502 5690 9499", "Ciudad de Guatemala", "Instagram →"] },
      ].map(col => (
        <div key={col.h} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Eyebrow>{col.h}</Eyebrow>
          {col.l.map(item => (
            <a key={item} href="#" style={{ fontFamily: "var(--sans)", fontSize: 12, letterSpacing: "0.14em", color: "var(--ink)", textDecoration: "none" }}>{item}</a>
          ))}
        </div>
      ))}
    </div>
    <div style={{
      borderTop: "1px solid var(--warm-grey)", marginTop: 56, paddingTop: 22,
      display: "flex", justifyContent: "space-between",
      fontFamily: "var(--sans)", fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--earth)"
    }}>
      <span>© Spacio AM · MMXXVI</span>
      <span>Guatemala</span>
    </div>
  </footer>
);

Object.assign(window, { Sparkle, Wordmark, Nav, Eyebrow, Display, Body, Button, Brush, PropertyCard, TierCard, Footer });
