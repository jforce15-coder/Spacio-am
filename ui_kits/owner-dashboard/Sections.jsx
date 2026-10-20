const { Card, SectionHead, Eyebrow, LineChart, Gauge, BarChart, Donut, SummaryTable, Farol, Select, Icon, Button, Trend, Amount } = window.SpacioAMDesignSystem_2c08fe;

function Distribution({ k }) {
  const q = (v, size) => <Amount value={v} currency="GTQ" size={size || 15} />;
  const rows = [
    { label: "Ingreso neto", value: k.neto, amount: q(k.neto) },
    { label: "Fee Spacio AM", value: k.fee, amount: q(k.fee) },
    { label: "Insumos & gastos", value: Math.round(k.bruto * 0.11), amount: q(Math.round(k.bruto * 0.11)) },
    { label: "IVA", value: Math.round(k.bruto * 0.1), amount: q(Math.round(k.bruto * 0.1)) },
    { label: "Reparaciones", value: Math.round(k.bruto * 0.01), amount: q(Math.round(k.bruto * 0.01)) }
  ];
  return (
    <section className="kit-section">
      <SectionHead eyebrow="Distribución" title="¿A dónde fue el dinero?" sub="Cómo se reparte tu operación entre lo que recibes y lo que cuesta." />
      <Card size="lg">
        <Donut size={200} total={q(k.bruto, 26)} totalLabel="Ingreso bruto" data={rows} />
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 11.5, letterSpacing: "var(--tr-normal)", color: "var(--fg-muted)", margin: "var(--s-4) 0 0" }}>
          El IVA mostrado corresponde al IVA total recaudado (dueño + Spacio AM).
        </p>
      </Card>
    </section>
  );
}

function Financial({ k, money, moneyShort }) {
  const D = window.KIT_DATA;
  return (
    <section className="kit-section">
      <SectionHead eyebrow="Financiero" title="Cómo se movió el mes" sub="Ingreso bruto contra neto, y qué se quedó la comisión." />
      <div className="kit-fin">
        <Card>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 8 }}>
            <div><Eyebrow style={{ letterSpacing: "0.2em" }}>Neto</Eyebrow>
              <div className="t-num" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 28, letterSpacing: "-0.02em", color: "var(--fg)", marginTop: 6 }}>{money(k.neto)}</div></div>
            <div style={{ textAlign: "right" }}><Eyebrow style={{ letterSpacing: "0.2em" }}>Comisión</Eyebrow>
              <div className="t-num" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 20, color: "var(--fg-muted)", marginTop: 6 }}>{money(k.fee)}</div></div>
          </div>
          <LineChart height={230} labels={D.hist.labels} formatY={moneyShort}
            formatTip={v => money(v)}
            series={[{ name: "Ingreso bruto", values: D.hist.bruto },
                     { name: "Ingreso neto", values: D.hist.neto, accent: true }]} />
        </Card>
        <div className="kit-highlights">
          <Eyebrow>Contexto</Eyebrow>
          {[{ i: "trendUp", t: "Temporada", b: "Agosto es tu mejor mes del semestre: +12% sobre julio y el bruto más alto del año." },
            { i: "coins", t: "Comisión", b: "La comisión del mes fue " + money(k.fee) + ", un 15% del bruto según tu plan Full Management." }].map((h, i) => (
            <div key={i} className="kit-highlight">
              <span className="kit-highlight-ic"><Icon name={h.i} size={17} color="var(--fg)" /></span>
              <div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "var(--tr-wide)", textTransform: "uppercase", color: "var(--fg)", marginBottom: 6 }}>{h.t}</div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.65, letterSpacing: "var(--tr-normal)", color: "var(--fg-muted)", margin: 0 }}>{h.b}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Occupancy({ k }) {
  const D = window.KIT_DATA;
  return (
    <section className="kit-section">
      <SectionHead eyebrow="Ocupación" title="Cuánto se vivió tu espacio" sub="Ajustada descuenta las noches que bloqueamos por mantenimiento." />
      <div className="kit-occ">
        <Card pad={26} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Eyebrow style={{ alignSelf: "flex-start", letterSpacing: "0.2em" }}>Ocupación ajustada</Eyebrow>
          <div style={{ margin: "18px 0 6px" }}><Gauge value={k.occ} size={210} sub="Este mes" /></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, width: "100%", marginTop: 14 }}>
            {[["Ocupación total", k.occ + 4 + "%"], ["Noches vendidas", k.noches], ["Noches bloqueadas", 11]].map(([l, v], i) => (
              <div key={i} style={{ textAlign: "center", padding: "12px 6px", background: "var(--bg-alt)", borderRadius: "var(--r-md)" }}>
                <div className="t-num" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 19, color: "var(--fg)" }}>{v}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 9, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-muted)", marginTop: 5, lineHeight: 1.3 }}>{l}</div>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <Eyebrow style={{ letterSpacing: "0.2em" }}>Ocupación ajustada · mensual</Eyebrow>
          <BarChart height={250} style={{ marginTop: 18 }} data={D.hist.labels.map((l, i) => ({ label: l, value: D.hist.occ[i], highlight: i === D.hist.labels.length - 1 }))} />
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, lineHeight: 1.65, letterSpacing: "var(--tr-normal)", color: "var(--fg-muted)", margin: "14px 0 0" }}>
            Bajaste 3 puntos contra julio, pero con una tarifa promedio 5% más alta: menos noches, mejor pagadas.
          </p>
        </Card>
      </div>
    </section>
  );
}

function Admin({ money, narrow }) {
  const D = window.KIT_DATA;
  const [zona, setZona] = React.useState("all");
  const rows = (zona === "all" ? D.rows : D.rows.filter(r => r.z === zona)).map(r => ({
    p: r.p, z: r.z, neto: money(r.neto), occ: r.occ + "%", adr: money(r.adr),
    st: <Farol state={r.st}>{r.stl}</Farol>
  }));
  return (
    <section className="kit-section">
      <SectionHead eyebrow="Administración" title="Todas tus propiedades" sub="La tabla-resumen es un lujo de escritorio: bajo 780px colapsa a cards."
        right={<Select icon="pin" value={zona} onChange={setZona} minWidth={160}
          options={[{ value: "all", label: "Todas las zonas" }, { value: "Antigua", label: "Antigua" }, { value: "Ciudad", label: "Ciudad" }]} />} />
      <Card pad={narrow ? "var(--s-3)" : 0} style={{ overflow: "hidden" }}>
        <SummaryTable collapse={narrow} rows={rows}
          columns={[{ key: "p", header: "Propiedad" }, { key: "z", header: "Zona" },
                    { key: "neto", header: "Neto", num: true }, { key: "occ", header: "Ocupación", num: true },
                    { key: "adr", header: "ADR", num: true }, { key: "st", header: "Estado" }]} />
      </Card>
    </section>
  );
}
Object.assign(window, { Financial, Distribution, Occupancy, Admin });
