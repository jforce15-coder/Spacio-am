const { Bento, BentoTile, Brushstroke, Wordmark, Eyebrow, Icon, Farol, Button, Sparkle } = window.SpacioAMDesignSystem_2c08fe;

function Home({ go }) {
  return (
    <div className="g-screen">
      <div className="g-top">
        <Wordmark variant="monogram" height={28} base="../.." />
        <Eyebrow>Antigua Guatemala</Eyebrow>
      </div>
      <Brushstroke base="../.." src="../../assets/photos/welcome-weave.jpeg" alt="Tu estadía" height={230} radius="var(--r-xl)"
        overlay={
          <div style={{ position: "absolute", inset: 0, padding: "var(--s-4)", display: "flex", flexDirection: "column", justifyContent: "flex-end", background: "linear-gradient(180deg,transparent 38%,rgba(62,63,63,.6))" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(250,250,250,.9)" }}>14 – 18 de agosto</span>
            <span style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: 32, lineHeight: 1.1, color: "var(--fg-inverse)", marginTop: 8 }}>Casa de la Luz Dorada</span>
          </div>
        } />
      <div className="g-welcome">
        <Sparkle size={14} />
        <p style={{ margin: "12px 0 0", fontFamily: "var(--font-serif)", fontWeight: 300, fontStyle: "italic", fontSize: 24, lineHeight: 1.25, color: "var(--fg)" }}>
          Bienvenida, Sofía. Todo está listo para que solo llegues.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
          <Farol state="warning">Check-in pendiente</Farol>
          <Button size="sm" variant="accent" onClick={() => go("checkin")}>Completar check-in</Button>
        </div>
      </div>
      <Eyebrow style={{ margin: "var(--s-5) 0 var(--s-3)" }}>Tu estadía</Eyebrow>
      <Bento>
        <BentoTile image="../../assets/photos/bedroom.jpeg" label="La casa" span={2} rows={2} sparkle onClick={() => go("guide")} />
        <BentoTile label="Check-in" icon={<Icon name="check" size={16} />} onClick={() => go("checkin")} />
        <BentoTile label="Wi-Fi" tone="peach" icon={<Icon name="wifi" size={16} />} onClick={() => go("guide")} />
        <BentoTile label="Guía" tone="ink" icon={<Icon name="file" size={16} />} onClick={() => go("guide")} />
        <BentoTile image="../../assets/photos/rooftop.jpeg" label="Rooftop" onClick={() => go("guide")} />
        <BentoTile image="../../assets/photos/antigua.jpeg" label="Cerca de ti" span={2} onClick={() => go("guide")} />
        <BentoTile label="Facturación" icon={<Icon name="coins" size={16} />} onClick={() => {}} />
        <BentoTile label="Escríbenos" icon={<Icon name="mail" size={16} />} onClick={() => {}} />
      </Bento>
    </div>
  );
}
Object.assign(window, { Home });
