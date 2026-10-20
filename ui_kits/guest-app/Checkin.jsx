const { Card, Input, Button, Checkbox, Eyebrow, Icon, Wordmark, Farol, Skeleton, Sparkle } = window.SpacioAMDesignSystem_2c08fe;
const STEPS = ["Reservante", "Documentos", "Contacto", "Reglas"];

function Steps({ step }) {
  return (
    <div className="g-steps">
      {STEPS.map((l, i) => (
        <React.Fragment key={l}>
          <div className="g-step">
            <div className="g-step-dot" style={{ background: i <= step ? "var(--fg)" : "transparent", border: "1px solid " + (i <= step ? "var(--fg)" : "var(--divider)") }}>
              {i < step ? <Icon name="check" size={13} color="var(--fg-inverse)" />
                : <span style={{ color: i === step ? "var(--accent)" : "var(--fg-muted)", fontSize: 10, fontFamily: "var(--font-sans)", fontWeight: 600 }}>{i + 1}</span>}
            </div>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 8.5, fontWeight: 500, letterSpacing: "var(--tr-wide)", textTransform: "uppercase", color: i <= step ? "var(--fg)" : "var(--fg-muted)" }}>{l}</span>
          </div>
          {i < STEPS.length - 1 ? <div className="g-step-line" style={{ background: i < step ? "var(--fg)" : "var(--divider)" }} /> : null}
        </React.Fragment>
      ))}
    </div>
  );
}

function DocCapture() {
  const [state, setState] = React.useState("empty");
  return (
    <Card variant="flat">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <span style={{ fontFamily: "var(--font-serif)", fontSize: 19, color: "var(--fg)" }}>Reservante</span>
        {state === "done" ? <Farol state="success">Leído</Farol> : null}
        <div style={{ display: "flex", gap: 8, marginLeft: "auto" }}>
          <Button size="sm" icon="camera" onClick={() => { setState("reading"); setTimeout(() => setState("done"), 1100); }}>Tomar foto</Button>
          <Button size="sm" variant="secondary" onClick={() => { setState("reading"); setTimeout(() => setState("done"), 1100); }}>Elegir archivo</Button>
        </div>
      </div>
      {state === "reading" ? (
        <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
          <Eyebrow>Leyendo tu documento…</Eyebrow>
          <Skeleton height={46} radius="var(--r-md)" /><Skeleton height={46} radius="var(--r-md)" />
        </div>
      ) : null}
      {state === "done" ? (
        <div style={{ marginTop: 16, background: "var(--bg-alt)", borderRadius: "var(--r-md)", padding: "var(--s-3)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <Sparkle size={11} /><Eyebrow>Prellenado desde tu documento</Eyebrow>
          </div>
          <Input label="Nombre completo" value="Sofía Elena Ramírez Cruz" onChange={() => {}} density="compact" />
          <div style={{ marginTop: 12 }}><Input label="Número de identificación" value="2451 88903 0101" onChange={() => {}} density="compact" helper="Confirma que coincide con tu documento." /></div>
        </div>
      ) : null}
    </Card>
  );
}

function Checkin({ go }) {
  const [step, setStep] = React.useState(1);
  const [ok, setOk] = React.useState(false);
  return (
    <div className="g-screen g-narrow">
      <div className="g-top">
        <button className="g-back" onClick={() => go("home")}><Icon name="arrowLeft" size={18} color="var(--fg)" /></button>
        <Wordmark variant="monogram" height={26} base="../.." />
        <Eyebrow>Check-in</Eyebrow>
      </div>
      <Steps step={step} />
      <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: 34, lineHeight: 1.08, letterSpacing: "var(--tr-tight)", color: "var(--fg)", margin: "0 0 10px", textAlign: "center" }}>
        {step === 1 ? "Tu documento" : step === 2 ? "Cómo te contactamos" : "Las reglas de la casa"}
      </h1>
      <p style={{ textAlign: "center", fontFamily: "var(--font-sans)", fontSize: 13.5, lineHeight: 1.65, letterSpacing: "var(--tr-wide)", color: "var(--fg-muted)", margin: "0 auto var(--s-5)", maxWidth: 380 }}>
        {step === 1 ? "Toma una foto de tu DPI o pasaporte y llenamos los datos por ti." : step === 2 ? "Solo lo usamos para avisarte de tu llegada." : "Un espacio que se cuida se disfruta más."}
      </p>
      {step === 1 ? <DocCapture /> : null}
      {step === 2 ? (
        <Card variant="flat">
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Input label="Correo" value="sofia@correo.com" onChange={() => {}} icon="mail" />
            <Input label="Teléfono" value="+502 5555 1234" onChange={() => {}} helper="WhatsApp, de preferencia." />
          </div>
        </Card>
      ) : null}
      {step === 3 ? (
        <Card variant="flat">
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 18px", display: "flex", flexDirection: "column", gap: 12 }}>
            {["Sin fiestas ni eventos.", "No se permite fumar dentro de la casa.", "Silencio después de las 22:00.", "Máximo 4 huéspedes."].map(r => (
              <li key={r} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontFamily: "var(--font-sans)", fontSize: 13, letterSpacing: "var(--tr-wide)", color: "var(--fg)" }}>
                <span style={{ marginTop: 7, width: 5, height: 5, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />{r}
              </li>
            ))}
          </ul>
          <Checkbox checked={ok} onChange={setOk} label="Acepto las reglas de la casa" />
        </Card>
      ) : null}
      <div className="g-nav">
        <Button variant="secondary" onClick={() => (step > 1 ? setStep(step - 1) : go("home"))}>Atrás</Button>
        <Button variant="accent" iconRight="arrowRight" disabled={step === 3 && !ok}
          onClick={() => (step < 3 ? setStep(step + 1) : go("home"))}>{step < 3 ? "Continuar" : "Terminar"}</Button>
      </div>
    </div>
  );
}
Object.assign(window, { Checkin, Steps });
