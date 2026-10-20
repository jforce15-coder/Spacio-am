const { Card, KpiCard, Amount, JobCard, SummaryTable, Farol, DomainBadge, Select, Segmented, Eyebrow, Button, SectionHead, Icon } = window.SpacioAMDesignSystem_2c08fe;
const { useState } = React;

function EpiDashboard({ narrow }) {
  const D = window.EPI_DATA;
  const [view, setView] = useState("lista");
  const [pago, setPago] = useState("all");
  const jobs = pago === "all" ? D.jobs : D.jobs.filter(j => j.st !== "success");
  return (
    <div>
      <div className="epi-alert">
        <Icon name="alert" size={16} color="var(--attention)" />
        <span>3 trabajos con pago pendiente</span>
      </div>
      <div className="epi-deposit">
        <div>
          <Eyebrow>A depositar · semanas anteriores</Eyebrow>
          <Amount value={0} currency="GTQ" size={44} decimals={false} color="var(--color-success)" style={{ display: "block", marginTop: 10 }} />
        </div>
        <div style={{ textAlign: "right" }}>
          <Eyebrow>En curso</Eyebrow>
          <Amount value={3616} currency="GTQ" size={26} decimals={false} style={{ display: "block", marginTop: 8 }} />
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--fg-muted)" }}>43 trab. · aún no pagable</span>
        </div>
      </div>
      <div className="epi-kpirow">
        <KpiCard label="Trabajos" value="3" help="Pendientes" />
        <KpiCard label="Facturado" value={<Amount value={238} currency="GTQ" size={30} decimals={false} />} help="Sin pagar" />
        <KpiCard label="Cobrado" value={<Amount value={76216} currency="GTQ" size={30} decimals={false} color="var(--color-success)" />} />
        <KpiCard label="Adelanto / sem" value={<Amount value={-625} currency="GTQ" size={30} decimals={false} color="var(--attention-text)" />} help="Descuento automático" />
      </div>
      <div className="epi-filters">
        {[["Técnico", "tec"], ["Vínculo", "vin"], ["Tipo de trabajo", "tipo"], ["Estado de pago", "est"]].map(([l, k]) => (
          <Select key={k} label={l} value="all" onChange={() => {}} minWidth={0}
            options={[{ value: "all", label: "Todos" }]} style={{ width: "100%" }} />
        ))}
      </div>
      <div className="epi-toolbar">
        <Button variant="text" uppercase={false} size="sm">Filtros avanzados</Button>
        <div style={{ display: "flex", gap: 8, marginLeft: "auto", alignItems: "center" }}>
          <Button variant="secondary" size="sm" icon="refresh" style={{ padding: "9px 14px" }} />
          <Segmented size="sm" value={view} onChange={setView} options={[{ value: "lista", label: "Lista" }, { value: "cal", label: "Cal" }]} />
        </div>
      </div>
      <div className="epi-bulk">
        <span>45 trabajos pendientes de pago</span>
        <Button size="sm" icon="check" onClick={() => setPago("pend")}>Marcar todos como pagados</Button>
      </div>
      {narrow || view === "cal" ? (
        <div className="epi-jobs">
          {jobs.map(j => (
            <JobCard key={j.id} property={j.prop} category={j.cat} description={j.nota} date="14 ago 2026"
              technician={j.tecnico} amount={j.monto} state={j.st} statusLabel={j.stl} payer="Paga Spacio AM" />
          ))}
        </div>
      ) : (
        <Card pad={0} style={{ overflow: "hidden" }}>
          <SummaryTable rows={jobs.map(j => ({
            prop: <span><span style={{ display: "block", fontWeight: 500 }}>{j.prop}</span><span style={{ display: "inline-block", marginTop: 6 }}><DomainBadge category={j.cat} /></span></span>,
            fecha: "14 ago 2026", trabajo: j.nota,
            total: <Amount value={j.monto} currency="GTQ" size={14} decimals={false} />,
            estado: <Farol state={j.st}>{j.stl}</Farol>
          }))} columns={[{ key: "prop", header: "Propiedad" }, { key: "fecha", header: "Fecha" },
                        { key: "trabajo", header: "Trabajo realizado" }, { key: "total", header: "Total", num: true },
                        { key: "estado", header: "Estado de pago" }]} />
        </Card>
      )}
    </div>
  );
}
Object.assign(window, { EpiDashboard });
