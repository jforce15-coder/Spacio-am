const { Card, KpiCard, Eyebrow, Icon, Select, SectionHead, Farol } = window.SpacioAMDesignSystem_2c08fe;

function Calidad() {
  const D = window.EPI_DATA;
  return (
    <div>
      <SectionHead eyebrow="Calidad percibida" title="Rating de limpieza de los huéspedes"
        sub="Se genera una vez al mes: lee lo que los huéspedes escribieron y busca temas que se repiten por área."
        right={<Select icon="calendar" value="all" onChange={() => {}} minWidth={150} options={[{ value: "all", label: "Todo el período" }]} />} />
      <div className="epi-kpirow" style={{ marginBottom: "var(--s-5)" }}>
        <KpiCard label="Promedio general" value="4.75" help="193 reviews" />
        <KpiCard label="Este mes" value="4.41" trend={-2.4} help="17 reviews" />
        <KpiCard label="Estándar de marca" value="4.70" help="Cumplido" />
        <KpiCard label="Bajo estándar" value="19%" invert trend={3.1} help="47/252 reviews" />
      </div>
      <div className="epi-jobs">
        {D.tecnicos.map((t, i) => (
          <Card key={t.n} variant="interactive" pad="var(--s-3)"
            style={i === 0 ? { boxShadow: "inset 0 0 0 1px var(--color-success)" } : null}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--s-3)" }}>
              <span className="t-num" style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, color: i === 0 ? "var(--fg)" : "var(--fg-muted)", minWidth: 18 }}>{i + 1}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, letterSpacing: "var(--tr-normal)", color: "var(--fg)" }}>{t.n}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 11.5, color: "var(--fg-muted)", marginTop: 3 }}>{t.r} reviews de huéspedes</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div className="t-num" style={{ fontFamily: "var(--font-sans)", fontSize: 22, fontWeight: 600, color: t.v >= 4.7 ? "var(--color-success)" : "var(--color-warning)" }}>{t.v.toFixed(2)}</div>
                <div style={{ display: "flex", gap: 2, justifyContent: "flex-end", marginTop: 4 }}>
                  {[0, 1, 2, 3, 4].map(s => <Icon key={s} name="star" size={11} color={s < Math.round(t.v) ? "var(--color-success)" : "var(--divider)"} />)}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
Object.assign(window, { Calidad });
