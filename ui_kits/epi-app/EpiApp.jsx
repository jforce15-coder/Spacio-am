const { useState, useEffect } = React;
const { TopBar, PillTabs, BottomNav, Wordmark, Eyebrow, Button, Farol, Icon } = window.SpacioAMDesignSystem_2c08fe;

const TABS = [
  { value: "dash", label: "Dashboard", icon: "grid" },
  { value: "form", label: "Formulario", icon: "pencil" },
  { value: "prog", label: "Programa", icon: "calendar" },
  { value: "cal", label: "Calidad", icon: "star" },
  { value: "adel", label: "Adelantos", icon: "coins" }
];

function EpiApp() {
  const D = window.EPI_DATA;
  const [tab, setTab] = useState("dash");
  const [filter, setFilter] = useState("all");
  const [day, setDay] = useState(14);
  const [job, setJob] = useState(null);
  const [month, setMonth] = useState("2026-08");
  const [lang, setLang] = useState("es");
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const on = () => setNarrow(window.innerWidth < 780);
    on(); window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return (
    <div>
      <TopBar base="../.." month={month} onMonth={setMonth}
        months={[{ value: "2026-08", label: "Agosto 2026" }, { value: "2026-07", label: "Julio 2026" }]}
        lang={lang} onLang={setLang} initials={D.user.initials} />
      <div className="epi-tabs">
        {!narrow ? <PillTabs value={tab} onChange={setTab} tabs={TABS} /> : <Eyebrow>{TABS.find(t => t.value === tab).label}</Eyebrow>}
        <Eyebrow>{D.user.name} · {D.user.role}</Eyebrow>
      </div>
      <main className="epi-main">
        {tab === "dash" ? <EpiDashboard narrow={narrow} /> : null}
        {tab === "form" ? <Formulario /> : null}
        {tab === "prog" ? <Agenda filter={filter} setFilter={setFilter} day={day} setDay={setDay} onOpen={setJob} /> : null}
        {tab === "cal" ? <Calidad /> : null}
        {tab === "adel" ? <Adelantos /> : null}
        <footer className="epi-footer">
          <Wordmark variant="monogram" height={24} base="../.." />
          <Eyebrow>Última actualización hace 2 min</Eyebrow>
          <Button variant="text" uppercase={false} icon="refresh">Actualizar</Button>
        </footer>
      </main>
      <JobDetail job={job} onClose={() => setJob(null)} />
      {narrow ? (
        <BottomNav variant="bar" value={tab} onChange={setTab} style={{ position: "fixed", bottom: 0 }}
          fab={{ icon: "home", label: "Dashboard" }} onFab={() => setTab("dash")}
          items={TABS.filter(t => t.value !== "dash")} />
      ) : null}
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<EpiApp />);
