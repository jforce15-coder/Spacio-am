import React from "react";
import { Sparkle } from "../brand/Wordmark.jsx";

/* Bento de la Guest App: pantalla de inicio / lanzador y cara visual de marca (el bento vivo de Alma está más abajo).
   2 columnas en móvil → 4 desde --bp-md. NO es la navegación permanente. */
export function Bento({ children, style }) {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "repeat(2,1fr)", gridAutoRows: "minmax(120px, auto)",
      gap: "var(--s-3)", gridAutoFlow: "dense", maxWidth: "var(--container-standard)", margin: "0 auto", ...style
    }}>{children}</div>
  );
}

/* Tile: imagen (con degradado de protección) o bloque de color con label. */
export function BentoTile({ image, label, tone = "solid", span = 1, rows = 1, icon, sparkle = false, onClick, style }) {
  const TONES = {
    solid: { background: "var(--bg-alt)", color: "var(--fg)" },
    ink: { background: "var(--fg)", color: "var(--fg-inverse)" },
    peach: { background: "var(--accent-tint)", color: "var(--fg)" },
    image: { background: "var(--bg-alt)", color: "var(--color-white)" }
  };
  const t = TONES[image ? "image" : tone];
  return (
    <button type="button" onClick={onClick} style={{
      gridColumn: "span " + span, gridRow: "span " + rows, position: "relative", overflow: "hidden",
      border: "none", cursor: onClick ? "pointer" : "default", textAlign: "left",
      borderRadius: "var(--r-lg)", boxShadow: "var(--shadow-sm)", padding: "var(--s-3)",
      display: "flex", alignItems: "flex-end", ...t, ...style
    }}>
      {image ? (
        <>
          <img src={image} alt="" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <span aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 45%,rgba(62,63,63,.55))" }} />
        </>
      ) : null}
      {sparkle ? <Sparkle size={16} style={{ position: "absolute", top: 12, right: 12 }} /> : null}
      <span style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "var(--tr-normal)" }}>
        {icon}{label}
      </span>
    </button>
  );
}

/* ───────────────────────── Bento vivo · pantalla de inicio y de reposo de Alma ─────────────────────────
   El modelo del Hub (alma/inicio.html + js/alma-bento.js, #810 y #895), para que toda app de Spacio AM lo arme igual:
   · Siempre 1 imagen (la foto del tema; sin foto, la galería o la de la marca) y nunca un cuadro vacío: lo que falta no se
     pinta y los demás crecen (cada tarjeta crece según su peso).
   · La información va en vidrio líquido claro sobre el atardecer, sin oscurecerlo. El GIF nunca va en el bento: va en su
     ventana de vidrio oscuro arriba de la roca (GifWindow).
   · La roca no se mueve ni se achica: queda al centro y las tarjetas le dejan el hueco (subtítulos, «Chat», «Llamada»).
   · Orden por prioridad (menor primero). Reposo: Necesita tu sí (1) · Tu agenda (1.2) · Familia (1.4) · Avisos (2) · Tus áreas (3).
   · Reparto (repartir() del Hub): horizontal → derecha las 3 primeras, izquierda la imagen + 1, abajo del hueco 2.
     vertical (iPad vertical) → lados angostos (mapa o galería + 1), abajo la imagen con 2 a su lado.
     telefono → el Tablero bento: 6 columnas, la imagen arriba a lo ancho y las tarjetas debajo (en reposo, el
     teléfono no lleva bento: el inicio de siempre). */

/* Tarjeta de vidrio líquido: título chico (kicker), número o texto grande, renglones y una frase. */
export function GlassTile({ kicker, value, items, more, quote, empty, children, onClick, style }) {
  const press = onClick ? { role: "button", tabIndex: 0, onClick,
    onKeyDown: (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(); } } } : {};
  const nada = !value && !(items && items.length) && !children && !quote;
  return (
    <div className="sa-glass" {...press} style={{ padding: "16px 18px", letterSpacing: "normal", minWidth: 0, minHeight: 0, cursor: onClick ? "pointer" : "default", ...style }}>
      {kicker ? <small style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 9.5, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--fg-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{kicker}</small> : null}
      {value != null && value !== "" ? <b style={{ display: "block", marginTop: 4, fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: 30, lineHeight: 1.05 }}>{value}</b> : null}
      {nada && empty ? <b style={{ display: "block", marginTop: 6, fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: 22, color: "var(--fg-muted)" }}>{empty}</b> : null}
      {items && items.length ? (
        <ul style={{ listStyle: "none", margin: "8px 0 0", padding: 0 }}>
          {items.slice(0, 4).map((x, i) => (
            <li key={i} style={{ display: "flex", gap: 8, alignItems: "baseline", padding: "6px 0", borderBottom: i < Math.min(items.length, 4) - 1 ? "1px solid var(--color-ink-08)" : "none", fontSize: 13 }}>
              {x.b ? <b style={{ flex: "none", fontWeight: 600 }}>{x.b}</b> : null}
              <span style={{ minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: "var(--fg)" }}>{x.t}</span>
            </li>
          ))}
          {items.length > 4 || more ? <li style={{ paddingTop: 6, fontSize: 12, color: "var(--fg-muted)" }}>{more || "y " + (items.length - 4) + " más"}</li> : null}
        </ul>
      ) : null}
      {quote ? <q style={{ display: "block", marginTop: 8, quotes: "none", fontSize: 13, lineHeight: 1.45, fontStyle: "italic", color: "var(--fg-muted)" }}>{quote}</q> : null}
      {children}
    </div>
  );
}

/* La imagen del bento: foto con su título en Valky sobre un degradado de protección. Sin foto, la de la marca. */
export function BentoImage({ src, title, sub, avatar, style }) {
  return (
    <div className="sa-glass sa-glass--media" style={{ minWidth: 0, minHeight: 0, ...style }}>
      {src ? <img src={src} alt="" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} /> : null}
      {avatar ? <img src={avatar} alt="" aria-hidden="true" style={{ position: "absolute", left: 18, bottom: 18, zIndex: 2, width: 64, height: 64, borderRadius: "50%", objectFit: "cover", boxShadow: "0 0 0 3px rgba(255,253,251,.9)" }} /> : null}
      {title || sub ? (
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 1, letterSpacing: "normal", padding: avatar ? "44px 18px 18px 96px" : "44px 18px 18px", color: "#FFFDFB", background: "linear-gradient(to top, rgba(30,22,20,.72), rgba(30,22,20,0))" }}>
          {title ? <b style={{ display: "block", fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: 30, lineHeight: 1.05, textWrap: "balance" }}>{title}</b> : null}
          {sub ? <small style={{ display: "block", marginTop: 4, fontSize: 13, opacity: .92, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{sub}</small> : null}
        </div>
      ) : null}
    </div>
  );
}

/* La píldora del tema, arriba en el hueco: «● Huésped · Valeria Ríos». Solo cuando Alma habla de algo. */
export function BentoTopic({ children, style }) {
  return (
    <div className="sa-glass" style={{ display: "inline-flex", alignItems: "center", gap: 8, maxWidth: 420, padding: "9px 16px", borderRadius: "var(--r-pill)", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, letterSpacing: "normal", whiteSpace: "nowrap", ...style }}>
      <i style={{ flex: "none", width: 7, height: 7, borderRadius: "50%", background: "var(--color-peach)" }} />
      <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{children}</span>
    </div>
  );
}

/* La ventana del GIF: vidrio gris oscuro arriba de la roca. Asoma de vez en cuando y se va; nunca un emoji. */
export function GifWindow({ src, alt = "GIF", credit = "GIPHY", width = 300, height = 200, style }) {
  return (
    <div className="sa-glass-dark" role="img" aria-label={alt} style={{ width, height, ...style }}>
      <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100%", borderRadius: 18, overflow: "hidden", background: "rgba(0,0,0,.28)", boxShadow: "0 0 0 1px rgba(255,255,255,.08)" }}>
        {src ? <img src={src} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} /> : null}
      </div>
      {credit ? <small style={{ position: "absolute", right: 14, bottom: 11, zIndex: 2, fontFamily: "var(--font-sans)", fontSize: 8.5, fontWeight: 600, letterSpacing: ".06em", color: "rgba(255,255,255,.82)", textShadow: "0 1px 2px rgba(0,0,0,.55)" }}>{credit}</small> : null}
    </div>
  );
}

/* Ordena por prioridad y reparte como el Hub. info: [{ p, peso, tipo, el }] */
export function bentoRepartir(info, layout = "horizontal") {
  const q = info.filter(Boolean).slice().sort((a, b) => (a.p ?? 9) - (b.p ?? 9));
  if (layout === "vertical") {
    const k = q.findIndex((x) => x.tipo === "galeria" || x.tipo === "mapa");
    const L = k >= 0 ? q.splice(k, 1) : [];
    return { L, B: q.splice(0, 2), R: q.splice(0, 1) };
  }
  if (layout === "telefono") return { L: [], B: q, R: [] };
  return { R: q.splice(0, 3), L: q.splice(0, 1), B: q.splice(0, 2) };
}

/* El bento vivo completo. image: { src, title, sub, avatar } · info: [{ p, peso, tipo, el }] · topic: texto de la píldora
   (vacío en reposo) · center: lo que va en el hueco (la roca, sus subtítulos y botones) · gif: { src } para la ventana. */
export function BentoVivo({ image, info = [], topic, center, gif, layout = "horizontal", background, height, style }) {
  const rep = bentoRepartir(info, layout);
  const gap = "var(--bento-gap)";
  const img = <BentoImage key="img" {...(image || {})} style={{ flex: "3 1 0" }} />;
  const cell = (x, i, extra) => <div key={i} className="sa-bento-in" style={{ display: "flex", flex: (x.peso || 2) + " 1 0", minHeight: 0, minWidth: 0, "--i": i, ...extra }}>{React.cloneElement(x.el, { style: { flex: 1, ...(x.el.props.style || {}) } })}</div>;
  const col = (kids, extra) => <div style={{ display: "flex", flexDirection: "column", gap, minHeight: 0, minWidth: 0, ...extra }}>{kids}</div>;
  const hole = (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, padding: "6px 0", minHeight: 0 }}>
      {topic ? <BentoTopic>{topic}</BentoTopic> : <div style={{ height: 37 }} />}
      {gif ? <GifWindow src={gif.src} alt={gif.alt} width={240} height={150} /> : null}
      {center}
    </div>
  );
  const frame = { position: "relative", boxSizing: "border-box", overflow: "hidden", background: background ? `center/cover no-repeat url(${background})` : "var(--sunset)", borderRadius: "var(--r-xl)", height, ...style };
  if (layout === "telefono") {
    return (
      <div style={{ ...frame, padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
        {topic ? <div style={{ textAlign: "center" }}><BentoTopic>{topic}</BentoTopic></div> : null}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0,1fr))", gridAutoRows: "minmax(84px, auto)", gap: 12, flex: 1 }}>
          <BentoImage {...(image || {})} style={{ gridColumn: "span 6", gridRow: "span 2", borderRadius: "var(--r-bento-phone)" }} />
          {rep.B.map((x, i) => <div key={i} style={{ display: "flex", gridColumn: "span " + ((x.peso || 2) >= 4 ? 6 : 3), minWidth: 0 }}>{React.cloneElement(x.el, { style: { flex: 1, borderRadius: "var(--r-bento-phone)", ...(x.el.props.style || {}) } })}</div>)}
        </div>
        {center}
      </div>
    );
  }
  if (layout === "vertical") {
    return (
      <div style={{ ...frame, padding: "20px var(--bento-rail)", display: "grid", gridTemplateRows: "minmax(0,1.1fr) minmax(0,1fr)", gap }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(120px,1fr) minmax(var(--bento-hole),auto) minmax(120px,1fr)", gap, minHeight: 0 }}>
          {col(rep.L.map((x, i) => cell(x, i)))}{hole}{col(rep.R.map((x, i) => cell(x, i + 1)))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridAutoRows: "1fr", gap, minHeight: 0 }}>
          <div style={{ display: "flex", gridRow: "span 2", minHeight: 0 }}>{img}</div>
          {rep.B.map((x, i) => cell(x, i + 2))}
        </div>
      </div>
    );
  }
  return (
    <div style={{ ...frame, padding: "20px var(--bento-rail)", display: "grid", gridTemplateColumns: "minmax(200px,1fr) minmax(var(--bento-hole),1.1fr) minmax(200px,1fr)", gap }}>
      {col([img].concat(rep.L.map((x, i) => cell(x, i + 3))))}
      <div style={{ display: "flex", flexDirection: "column", gap, minHeight: 0 }}>
        <div style={{ flex: "1.4 1 0", minHeight: 0 }}>{hole}</div>
        {rep.B.length ? <div style={{ display: "flex", gap, flex: "1 1 0", minHeight: 110 }}>{rep.B.map((x, i) => cell(x, i + 4, { flex: "1 1 0" }))}</div> : null}
      </div>
      {col(rep.R.map((x, i) => cell(x, i)))}
    </div>
  );
}
