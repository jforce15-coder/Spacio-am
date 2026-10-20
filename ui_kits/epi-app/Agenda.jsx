const { Card, Calendar, Eyebrow, Farol, DomainBadge, Icon, Segmented, SectionHead, KpiCard } = window.SpacioAMDesignSystem_2c08fe;

function Agenda({ filter, setFilter, day, setDay, onOpen }) {
  const D = window.EPI_DATA;
  const jobs = filter === "all" ? D.jobs : D.jobs.filter(j => j.st === filter);
  return (
    <div className="epi-grid">
      <div>
        <SectionHead eyebrow={"Agosto 2026 · día " + day} title="Tu agenda"
          right={<Segmented size="sm" value={filter} onChange={setFilter}
            options={[{ value: "all", label: "Todo" }, { value: "pending", label: "Pend." }, { value: "error", label: "Vencido" }]} />} />
        <div className="epi-jobs">
          {jobs.map(j => (
            <Card key={j.id} variant="interactive" pad="var(--s-3)" onClick={() => onOpen(j)}>
              <div className="epi-job">
                <div className="epi-job-time">
                  <Farol state={j.st} dotOnly label={j.stl} />
                  <span className="t-num" style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "var(--fg)" }}>{j.hora}</span>
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: 19, lineHeight: 1.2, color: "var(--fg)" }}>{j.prop}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
                    <DomainBadge category={j.cat} />
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "var(--tr-wide)", color: "var(--fg-muted)" }}>{j.zona}</span>
                  </div>
                </div>
                <div className="epi-job-right">
                  <Farol state={j.st}>{j.stl}</Farol>
                  <Icon name="chevronRight" size={18} color="var(--fg-muted)" />
                </div>
              </div>
            </Card>
          ))}
          {!jobs.length ? <Card variant="flat" style={{ textAlign: "center", color: "var(--fg-muted)", fontFamily: "var(--font-sans)", fontSize: 12.5 }}>Nada por aquí con ese filtro.</Card> : null}
        </div>
      </div>
      <aside className="epi-aside">
        <Card>
          <Eyebrow style={{ marginBottom: 14 }}>Agosto 2026</Eyebrow>
          <Calendar year={D.month.year} month={D.month.month} today={D.month.today} selected={day} days={D.dayStates} onSelect={setDay} />
        </Card>
        <div className="epi-mini-kpis">
          <KpiCard label="Trabajos hoy" value={D.jobs.length} />
          <KpiCard label="Vencidos" value={D.jobs.filter(j => j.st === "error").length} invert trend={-50} />
        </div>
      </aside>
    </div>
  );
}
Object.assign(window, { Agenda });
