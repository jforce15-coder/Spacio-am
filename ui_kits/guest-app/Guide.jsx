const { Card, Collapsible, Eyebrow, Icon, Button, Wordmark, Brushstroke, PropertyCard } = window.SpacioAMDesignSystem_2c08fe;

function Guide({ go }) {
  return (
    <div className="g-screen g-narrow">
      <div className="g-top">
        <button className="g-back" onClick={() => go("home")}><Icon name="arrowLeft" size={18} color="var(--fg)" /></button>
        <Wordmark variant="monogram" height={26} base="../.." />
        <Eyebrow>La casa</Eyebrow>
      </div>
      <Brushstroke base="../.." src="../../assets/photos/kitchen.jpeg" alt="Cocina" height={200} radius="var(--r-xl)" />
      <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: 32, lineHeight: 1.1, letterSpacing: "var(--tr-tight)", margin: "var(--s-5) 0 var(--s-4)" }}>
        Todo lo que necesitas saber
      </h1>
      <Card style={{ display: "flex", alignItems: "center", gap: "var(--s-3)", marginBottom: "var(--s-4)" }}>
        <span style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--color-peach-12)", display: "grid", placeItems: "center", flexShrink: 0 }}>
          <Icon name="wifi" size={20} color="var(--fg)" />
        </span>
        <div style={{ minWidth: 0 }}>
          <Eyebrow>Wi-Fi</Eyebrow>
          <div className="t-num" style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600, letterSpacing: "var(--tr-normal)", color: "var(--fg)", marginTop: 4 }}>SpacioAM_Luz · luzdorada2026</div>
        </div>
        <Button size="sm" variant="secondary" icon="copy" style={{ marginLeft: "auto" }}>Copiar</Button>
      </Card>
      <Collapsible title="Cómo entrar" meta="Código">
        <p style={{ margin: 0, fontSize: 13, color: "var(--fg-muted)" }}>La caja de llaves está a la derecha del portón. Código <strong className="t-num" style={{ color: "var(--fg)" }}>4 8 1 2</strong>. Después de las 20:00 te abrimos nosotros.</p>
      </Collapsible>
      <Collapsible title="Electrodomésticos" defaultOpen={false} meta="6 guías" />
      <Collapsible title="Emergencias" defaultOpen={false} meta="24/7" />
      <Eyebrow style={{ margin: "var(--s-6) 0 var(--s-3)" }}>Cerca de ti</Eyebrow>
      <div className="g-near">
        <PropertyCard base="../.." image="../../assets/photos/morning.jpeg" location="A 4 min" name="Café de la Merced" meta="Desayunos · 7:00–12:00" />
        <PropertyCard base="../.." image="../../assets/photos/selfcare.jpeg" location="A 9 min" name="Baños de temazcal" meta="Reserva con un día" />
      </div>
      <div className="g-nav"><Button variant="secondary" full onClick={() => go("home")}>Volver al inicio</Button></div>
    </div>
  );
}
Object.assign(window, { Guide });
