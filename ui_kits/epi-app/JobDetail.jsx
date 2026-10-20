const { Modal, Button, DomainBadge, Farol, Eyebrow, Brushstroke, Checkbox } = window.SpacioAMDesignSystem_2c08fe;

function JobDetail({ job, onClose }) {
  const [done, setDone] = React.useState(false);
  if (!job) return null;
  return (
    <Modal title={job.prop} onClose={onClose} width={520} sparkle
      actions={<><Button variant="secondary" size="sm" onClick={onClose}>Cerrar</Button>
                 <Button size="sm" icon="check" onClick={onClose}>Marcar atendido</Button></>}>
      <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", marginBottom: 16 }}>
        <DomainBadge category={job.cat} />
        <Farol state={job.st}>{job.stl}</Farol>
        <span className="t-num" style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-muted)" }}>{job.hora} · {job.zona}</span>
      </div>
      <Brushstroke base="../.." src="../../assets/photos/kitchen.jpeg" alt="" height={150} radius="var(--r-md)" />
      <p style={{ margin: "22px 0 0" }}>{job.nota}</p>
      <div style={{ marginTop: 18, padding: "14px 16px", background: "var(--bg-alt)", borderRadius: "var(--r-md)" }}>
        <Eyebrow style={{ marginBottom: 12 }}>Checklist</Eyebrow>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Checkbox checked={done} onChange={setDone} label="Fotos de entrada y salida subidas" />
          <Checkbox checked={false} onChange={() => {}} label="Inventario verificado" />
        </div>
      </div>
    </Modal>
  );
}
Object.assign(window, { JobDetail });
