const { Brushstroke, Wordmark, Eyebrow, KpiCard, Icon, Card, Amount } = window.SpacioAMDesignSystem_2c08fe;

function Hero({ prop, periodText, context }) {
  const D = window.KIT_DATA;
  const isAll = prop === "all";
  const photo = D.photos[prop];
  return (
    <div className="kit-hero">
      <div>
        {isAll ? (
          <div className="kit-hero-all">
            <Wordmark variant="stamp" height={72} base="../.." style={{ opacity: .85 }} />
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,30px)", color: "var(--fg)", marginTop: 16, letterSpacing: "var(--tr-tight)" }}>Todas las propiedades</div>
            <Eyebrow style={{ marginTop: 8 }}>3 propiedades</Eyebrow>
          </div>
        ) : (
          <Brushstroke base="../.." src={"../../assets/photos/" + photo} alt="" height={240} radius="var(--r-xl)"
            overlay={
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "var(--s-4)", background: "linear-gradient(180deg,transparent 40%,rgba(62,63,63,.62))" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-sans)", fontSize: 10.5, fontWeight: 500, letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(250,250,250,0.88)" }}>
                  <Icon name="pin" size={13} color="var(--accent)" />{D.locations[prop]}
                </span>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px,3.2vw,34px)", color: "var(--fg-inverse)", letterSpacing: "var(--tr-tight)", lineHeight: 1.08, marginTop: 8 }}>
                  {D.props.find(p => p.value === prop).label}
                </span>
              </div>
            } />
        )}
      </div>
      <div className="kit-hero-ctx">
        <Eyebrow>{periodText}</Eyebrow>
        <p style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(20px,2.5vw,27px)", lineHeight: 1.25, letterSpacing: "var(--tr-tight)", color: "var(--fg)", margin: "16px 0 0", textWrap: "pretty" }}>{context}</p>
        <a className="kit-listing" href="#" onClick={e => e.preventDefault()}>
          <Icon name="link" size={14} color="var(--fg-muted)" /> spacioam.com/casa-de-la-luz
        </a>
      </div>
    </div>
  );
}

function SummaryKPIs({ k, money, currency }) {
  const amt = (v, size) => <Amount value={v} currency={currency} size={size} />;
  return (
    <div className="kit-kpis">
      <KpiCard big accent label="Ingreso neto" value={amt(k.neto, 42)} trend={k.d.neto} help="Lo que recibes tú, después de todo." />
      <KpiCard label="Ingreso bruto" value={amt(k.bruto, 30)} trend={k.d.bruto} help="Ingresos antes de gastos y comisión." />
      <KpiCard label="Ocupación ajustada" value={k.occ + "%"} trend={k.d.occ} help="Sobre noches realmente disponibles." />
      <KpiCard label="Precio por noche" value={amt(k.adr, 30)} trend={k.d.adr} help="Precio promedio por noche." />
      <KpiCard label="Estadías" value={k.estadias} trend={k.d.estadias} help="Reservas completadas." />
      <KpiCard label="Noches reservadas" value={k.noches} trend={k.d.noches} help="Total de noches vendidas." />
    </div>
  );
}
Object.assign(window, { Hero, SummaryKPIs });
