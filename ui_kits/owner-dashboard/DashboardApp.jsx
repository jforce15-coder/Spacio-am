const { useState, useEffect } = React;
const { TopBar, TabNav, BottomNav, Wordmark, Eyebrow, Button, Icon, LoadingScreen } = window.SpacioAMDesignSystem_2c08fe;

const TABS = [
  { value: "resumen", label: "Resumen", icon: "home" },
  { value: "gastos", label: "Gastos e inversiones", icon: "coins" },
  { value: "detalle", label: "Detalle del mes", icon: "file" },
  { value: "depositos", label: "Depósitos a socios", icon: "bank" },
  { value: "conta", label: "Contabilidad", icon: "bank" },
  { value: "setup", label: "Setup", icon: "settings" }
];

function DashboardApp() {
  const D = window.KIT_DATA;
  const [screen, setScreen] = useState("login");
  const [lang, setLang] = useState("es");
  const [month, setMonth] = useState("2026-08");
  const [prop, setProp] = useState("luz");
  const [currency, setCurrency] = useState("GTQ");
  const [narrow, setNarrow] = useState(false);
  const [tab, setTab] = useState("resumen");
  useEffect(() => {
    const on = () => setNarrow(window.innerWidth < 780);
    on(); window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);

  const rate = currency === "GTQ" ? 1 : 0.13;
  const sym = currency === "GTQ" ? "Q " : "$ ";
  const money = (v) => sym + Math.round(v * rate).toLocaleString("es-GT");
  const moneyShort = (v) => sym + Math.round(v * rate / 1000) + "k";
  const k = D.kpis[month];
  const periodText = D.months.find(m => m.value === month).label;
  const context = "Tu mejor agosto: " + money(k.neto) + " netos con " + k.occ + "% de ocupación ajustada.";

  if (screen === "login") return <Login lang={lang} setLang={setLang} onLogin={() => setScreen("loading")} />;
  if (screen === "loading") { setTimeout(() => setScreen("app"), 900); return <div style={{ position: "relative", minHeight: "100vh" }}><LoadingScreen base="../.." label="Cargando tu mes" /></div>; }

  return (
    <div>
      <TopBar base="../.." month={month} months={D.months} onMonth={setMonth}
        scope={prop} scopes={D.props} onScope={setProp}
        currency={currency} onCurrency={setCurrency} lang={lang} onLang={setLang}
        initials={D.owner.initials} alert="Factura pendiente" onAvatar={() => setScreen("login")} />
      {!narrow ? (
        <div className="kit-tabs"><TabNav value={tab} onChange={setTab} tabs={TABS} /></div>
      ) : null}
      <main className="kit-main">
        <Hero prop={prop} periodText={periodText} context={context} />
        <SummaryKPIs k={k} money={money} currency={currency} />
        <Financial k={k} money={money} moneyShort={moneyShort} />
        <Distribution k={k} />
        <Occupancy k={k} />
        <Admin money={money} narrow={narrow} />
        <footer className="kit-footer">
          <Wordmark variant="monogram" height={26} base="../.." />
          <Eyebrow>Spacio AM · Guatemala · MMXXVI</Eyebrow>
          <Button variant="text" uppercase={false} onClick={() => setScreen("login")}>Cerrar sesión</Button>
        </footer>
      </main>
      {narrow ? (
        <BottomNav variant="pill" value={tab} onChange={setTab} style={{ position: "fixed" }}
          items={[{ value: "resumen", label: "Resumen", icon: "home" },
                  { value: "gastos", label: "Gastos e inversiones", icon: "coins" },
                  { value: "detalle", label: "Detalle del mes", icon: "file" },
                  { value: "setup", label: "Más", icon: "plus" }]} />
      ) : null}
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<DashboardApp />);
