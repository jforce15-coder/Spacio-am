const { Card, Input, Button, Collapsible, Farol, SectionHead, Eyebrow, KpiCard, Select } = window.SpacioAMDesignSystem_2c08fe;

function Adelantos() {
  const D = window.EPI_DATA;
  const [monto, setMonto] = React.useState("1,000");
  const [motivo, setMotivo] = React.useState("");
  const [prop, setProp] = React.useState("luz");
  const [sent, setSent] = React.useState(false);
  return (
    <div className="epi-grid">
      <div>
        <SectionHead eyebrow="Pagos" title="Solicitar un adelanto" sub="Se descuenta del cierre del mes. Te avisamos por correo cuando quede autorizado." />
        <Card>
          <div className="epi-form">
            <Input label="Monto (GTQ)" density="compact" value={monto} onChange={setMonto} icon="coins" helper="Máximo Q 2,000 por quincena." />
            <Select label="Propiedad" value={prop} onChange={setProp} minWidth={220} icon="home"
              options={[{ value: "luz", label: "Casa de la Luz Dorada" }, { value: "suite", label: "Suite Editorial nº 04" }, { value: "nook", label: "Nook Antigua" }]} />
            <Input label="Motivo" density="compact" value={motivo} onChange={setMotivo} placeholder="Compra de insumos de limpieza"
              error={!motivo && sent ? "Cuéntanos para qué es el adelanto." : null} />
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: "var(--s-4)", flexWrap: "wrap" }}>
            <Button variant="accent" onClick={() => setSent(true)}>Enviar solicitud</Button>
            <Button variant="secondary" onClick={() => { setMotivo(""); setSent(false); }}>Limpiar</Button>
          </div>
        </Card>
        <div style={{ marginTop: "var(--s-5)" }}>
          <Collapsible title="Histórico de adelantos" meta={D.adelantos.length + " solicitudes"}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {D.adelantos.map((a, i) => (
                <div key={i} className="epi-row">
                  <span className="t-num" style={{ fontFamily: "var(--font-sans)", fontSize: 12.5, color: "var(--fg-muted)" }}>{a.fecha}</span>
                  <span className="t-num" style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "var(--fg)" }}>{a.monto}</span>
                  <Farol state={a.st}>{a.stl}</Farol>
                </div>
              ))}
            </div>
          </Collapsible>
          <Collapsible title="Documentos y comprobantes" defaultOpen={false} meta="4 archivos" />
        </div>
      </div>
      <aside className="epi-aside">
        <KpiCard big accent label="Disponible esta quincena" value="Q 2,000" help="Se reinicia el 16 de agosto." />
        <Card variant="flat">
          <Eyebrow style={{ marginBottom: 10 }}>Cómo funciona</Eyebrow>
          <p style={{ margin: 0, fontSize: 12.5, color: "var(--fg-muted)" }}>Pides, revisamos el mismo día y depositamos en tu cuenta. Queda registrado en tu cierre de mes.</p>
        </Card>
      </aside>
    </div>
  );
}
Object.assign(window, { Adelantos });
