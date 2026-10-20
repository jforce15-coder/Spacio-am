const { Card, Input, Select, Button, Eyebrow, Icon, Checkbox, SectionHead } = window.SpacioAMDesignSystem_2c08fe;
const { useState } = React;

const TIPOS = ["Limpieza tradicional", "Limpieza profunda", "Mantenimiento", "Nuevo Producto", "Ajuste", "Reporte de Daños"];

function Formulario() {
  const [tipo, setTipo] = useState("Limpieza tradicional");
  const [desc, setDesc] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <div className="epi-form-screen">
      <Eyebrow>Nuevo reporte</Eyebrow>
      <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: 34, lineHeight: 1.1, letterSpacing: "var(--tr-tight)", color: "var(--fg)", margin: "12px 0 var(--s-5)" }}>
        ¿Qué trabajo se realizó?
      </h1>
      <Card variant="flat" style={{ marginBottom: "var(--s-3)" }}>
        <Eyebrow style={{ paddingBottom: 14, borderBottom: "1px solid var(--divider)", display: "block", marginBottom: 16 }}>Tipo de trabajo</Eyebrow>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {TIPOS.map(t => (
            <Button key={t} size="sm" uppercase={false} variant={t === tipo ? "primary" : "secondary"} onClick={() => setTipo(t)}>{t}</Button>
          ))}
        </div>
      </Card>
      <Card variant="flat" style={{ marginBottom: "var(--s-3)" }}>
        <Eyebrow style={{ paddingBottom: 14, borderBottom: "1px solid var(--divider)", display: "block", marginBottom: 16 }}>Responsable</Eyebrow>
        <Select label="Técnico / proveedor" value="all" onChange={() => {}} minWidth={0} style={{ width: "100%" }}
          options={[{ value: "all", label: "Seleccionar…" }, { value: "j", label: "Jackeline Ruano" }, { value: "s", label: "Sucely Morales" }]} />
      </Card>
      <Card variant="flat" style={{ marginBottom: "var(--s-3)" }}>
        <Eyebrow style={{ paddingBottom: 14, borderBottom: "1px solid var(--divider)", display: "block", marginBottom: 16 }}>Propiedad</Eyebrow>
        <div className="epi-form-two">
          <Select label="Propiedad" value="all" onChange={() => {}} minWidth={0} style={{ width: "100%" }}
            options={[{ value: "all", label: "Seleccionar…" }, { value: "a", label: "Z1 - Centro Vivo - 1107" }]} />
          <Input label="Fecha" density="compact" value="14 ago 2026" onChange={() => {}} icon="calendar" />
        </div>
      </Card>
      <Card variant="flat" style={{ marginBottom: "var(--s-3)" }}>
        <Eyebrow style={{ paddingBottom: 14, borderBottom: "1px solid var(--divider)", display: "block", marginBottom: 16 }}>Descripción</Eyebrow>
        <Input label="¿Qué se hizo?" value={desc} onChange={setDesc} placeholder="Describe brevemente el trabajo realizado…"
          error={sent && !desc ? "Cuéntanos qué se hizo antes de enviar." : null} />
      </Card>
      <Card variant="flat" style={{ marginBottom: "var(--s-3)" }}>
        <Eyebrow style={{ paddingBottom: 14, borderBottom: "1px solid var(--divider)", display: "block", marginBottom: 16 }}>Evidencia fotográfica</Eyebrow>
        <div className="epi-form-two">
          <div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 10.5, fontWeight: 600, letterSpacing: "var(--tr-wide)", textTransform: "uppercase", color: "var(--fg-muted)", marginBottom: 10 }}>Fotos antes <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>máx. 2</span></div>
            <button className="epi-drop"><Icon name="plus" size={18} color="var(--fg-muted)" /><span>Subir</span></button>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 10.5, fontWeight: 600, letterSpacing: "var(--tr-wide)", textTransform: "uppercase", color: "var(--fg)", marginBottom: 10 }}>Fotos después <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0, color: "var(--fg-muted)" }}>máx. 3</span></div>
            <button className="epi-drop epi-drop--req"><Icon name="plus" size={18} color="var(--fg)" /><span>Subir</span></button>
          </div>
        </div>
      </Card>
      <Card variant="flat" style={{ marginBottom: "var(--s-3)" }}>
        <Eyebrow style={{ paddingBottom: 14, borderBottom: "1px solid var(--divider)", display: "block", marginBottom: 16 }}>Factura</Eyebrow>
        <div style={{ background: "var(--bg-alt)", borderRadius: "var(--r-md)", padding: "14px 16px", fontFamily: "var(--font-sans)", fontSize: 12.5, lineHeight: 1.7, color: "var(--fg-muted)" }}>
          Favor emitir su factura a nombre de <strong style={{ color: "var(--fg)" }}>Spacio AM S.A.</strong><br />NIT: <strong style={{ color: "var(--fg)" }}>118287796</strong>
        </div>
        <button className="epi-drop epi-drop--wide" style={{ marginTop: 14 }}><Icon name="paperclip" size={16} color="var(--fg-muted)" /><span>Adjuntar factura (PDF o imagen)</span></button>
      </Card>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Button onClick={() => setSent(true)}>Enviar reporte</Button>
        <Button variant="secondary" onClick={() => { setDesc(""); setSent(false); }}>Limpiar</Button>
      </div>
    </div>
  );
}
Object.assign(window, { Formulario });
