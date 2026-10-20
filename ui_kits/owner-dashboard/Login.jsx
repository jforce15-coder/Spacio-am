const { useState } = React;
const { Wordmark, Sparkle, Eyebrow, Input, Button, Segmented, Icon } = window.SpacioAMDesignSystem_2c08fe;

function Login({ lang, setLang, onLogin }) {
  const [user, setUser] = useState("ana@spacioam.com");
  const [pass, setPass] = useState("spacioam");
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false);
  const submit = (e) => { e.preventDefault(); setBusy(true); setTimeout(onLogin, 520); };
  return (
    <div className="kit-login">
      <aside className="kit-login-aside">
        <img src="../../assets/brushstroke.svg" alt="" aria-hidden="true" className="kit-login-brush" />
        <div style={{ position: "relative", zIndex: 2 }}>
          <Wordmark variant="stamp" height={64} base="../.." />
        </div>
        <div style={{ position: "relative", zIndex: 2, maxWidth: 460 }}>
          <Sparkle size={22} />
          <p style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: 1.18, letterSpacing: "var(--tr-tight)", color: "var(--fg)", margin: "20px 0 0", textWrap: "balance" }}>
            “Hay espacios donde despertar se siente como un sueño.”
          </p>
          <div style={{ width: 38, height: 1, background: "var(--fg)", margin: "26px 0 14px" }} />
          <Eyebrow>Spacio AM · {lang === "es" ? "Portal de propietarios" : "Owner portal"}</Eyebrow>
        </div>
        <Eyebrow style={{ position: "relative", zIndex: 2 }}>Guatemala · {lang === "es" ? "Ayuda" : "Help"}</Eyebrow>
      </aside>
      <main className="kit-login-main">
        <div style={{ position: "absolute", top: 20, right: 20 }}>
          <Segmented size="sm" value={lang} onChange={setLang} options={[{ value: "es", label: "ES" }, { value: "en", label: "EN" }]} />
        </div>
        <div style={{ width: "100%", maxWidth: 380 }}>
          <Wordmark variant="stacked" height={92} base="../.." style={{ marginBottom: 30 }} />
          <Eyebrow style={{ marginBottom: 14 }}>{lang === "es" ? "Reportes de propietario" : "Owner reports"}</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: 38, letterSpacing: "var(--tr-tight)", lineHeight: 1.08, color: "var(--fg)", margin: 0 }}>
            {lang === "es" ? "Bienvenida de vuelta" : "Welcome back"}
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, letterSpacing: "var(--tr-wide)", lineHeight: 1.7, color: "var(--fg-muted)", margin: "12px 0 30px" }}>
            {lang === "es" ? "Tus propiedades, tu mes y tus números — en una sola página." : "Your properties, your month and your numbers — on one page."}
          </p>
          <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <Input label={lang === "es" ? "Usuario o correo" : "User or email"} value={user} onChange={setUser} icon="user" />
            <Input label={lang === "es" ? "Contraseña" : "Password"} type={show ? "text" : "password"} value={pass} onChange={setPass}
              trailing={<button type="button" onClick={() => setShow(s => !s)} aria-label="ver" style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--fg-muted)", display: "flex", padding: 4 }}><Icon name={show ? "eyeOff" : "eye"} size={18} /></button>} />
            <Button type="submit" full loading={busy} icon="lock">{lang === "es" ? "Entrar" : "Enter"}</Button>
          </form>
          <div style={{ marginTop: 30, paddingTop: 22, borderTop: "1px solid var(--divider)", display: "flex", gap: 11, alignItems: "flex-start" }}>
            <span style={{ flexShrink: 0, width: 34, height: 34, borderRadius: "50%", background: "var(--color-peach-12)", display: "grid", placeItems: "center" }}>
              <Icon name="key" size={15} color="var(--fg)" />
            </span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, letterSpacing: "var(--tr-normal)", lineHeight: 1.65, color: "var(--fg-muted)", margin: 0 }}>
              {lang === "es" ? "Tu contraseña por defecto es " : "Your default password is "}
              <strong style={{ color: "var(--fg)", fontWeight: 600 }}>spacioam</strong>
              {lang === "es" ? ". Puedes cambiarla en Mi cuenta." : ". You can change it under My account."}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
Object.assign(window, { Login });
