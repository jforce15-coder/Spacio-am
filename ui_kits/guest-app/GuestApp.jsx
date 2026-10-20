const { useState } = React;
function GuestApp() {
  const [screen, setScreen] = useState("home");
  const go = (s) => setScreen(s);
  return (
    <div className="g-shell">
      {screen === "home" ? <Home go={go} /> : screen === "checkin" ? <Checkin go={go} /> : <Guide go={go} />}
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<GuestApp />);
