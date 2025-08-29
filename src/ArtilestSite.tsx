import { useState } from "react";

export default function ArtilestSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "", consent: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  };

  return (
    <div style={{ fontFamily: "system-ui, Arial, sans-serif", color: "#0f172a", background: "#f8fafc" }}>
      <style>{`
        .container{max-width:1100px;margin:0 auto;padding:0 16px;}
        header{position:sticky;top:0;background:#ffffffe6;backdrop-filter:saturate(180%) blur(6px);
          border-bottom:1px solid #e2e8f0;z-index:50}
        nav a{margin:0 10px;text-decoration:none;color:#0f172a}
        nav a:hover{color:#1e40af}
        .btn{background:#1e40af;color:#fff;border:none;border-radius:14px;padding:10px 16px;cursor:pointer}
        .btn:hover{background:#1b3a9c}
        .section{padding:64px 0}
        .hero{background:linear-gradient(180deg,#2563eb,#1e40af);color:#fff;text-align:center;padding:72px 0}
        .card{background:#fff;border:1px solid #e2e8f0;border-radius:16px;padding:18px}
        .grid{display:grid;gap:16px}
        @media(min-width:768px){.grid-3{grid-template-columns:repeat(3,1fr)} .grid-4{grid-template-columns:repeat(4,1fr)}}
        .logos{overflow:hidden;white-space:nowrap}
        @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        .track{display:inline-flex;gap:40px;animation:marquee 18s linear infinite;align-items:center}
        .pill{display:inline-block;border:1px solid #e2e8f0;border-radius:999px;padding:6px 10px;background:#fff;color:#334155;margin:0 6px}
        .input, .textarea{width:100%;padding:10px;border:1px solid #cbd5e1;border-radius:10px;background:#fff}
        .label{display:flex;gap:8px;align-items:flex-start;color:#475569;font-size:14px}
        .muted{color:#475569}
        .title{font-weight:800}
        .h1{font-size:40px;margin:0 0 16px}
        .h2{font-size:28px;margin:0 0 24px}
        .h3{font-size:18px;margin:0 0 8px;color:#1e40af}
        .center{text-align:center}
        .row{display:flex;gap:12px;flex-wrap:wrap;justify-content:center}
        .mobile-nav{display:none}
        @media(max-width:768px){.desktop-nav{display:none}.mobile-nav{display:block}}
      `}</style>

      {/* Header */}
      <header>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <strong style={{ color: "#1e40af", fontSize: 22 }}>Artilest</strong>
          </div>
          <nav className="desktop-nav">
            <a href="#services">Services</a>
            <a href="#sectors">Secteurs</a>
            <a href="#expertise">Références</a>
            <a href="#stack">Écosystème</a>
            <a href="#about">À propos</a>
            <a href="#contact">Contact</a>
            <button className="btn" style={{ marginLeft: 8 }}>Demander un appel</button>
          </nav>
          <button className="mobile-nav btn" onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
        </div>
        {menuOpen && (
          <div className="container" style={{ paddingBottom: 12 }}>
            <div className="card" style={{ marginBottom: 12 }}>
              <a href="#services">Services</a> · <a href="#sectors">Secteurs</a> · <a href="#expertise">Références</a> ·{" "}
              <a href="#stack">Écosystème</a> · <a href="#about">À propos</a> · <a href="#contact">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1 className="h1 title">Experts e-Invoicing & Transformation Digitale en Europe</h1>
          <p className="muted" style={{ maxWidth: 820, margin: "0 auto 20px" }}>
            Nous accompagnons les entreprises européennes dans leurs projets de facturation électronique, de supply chain et de transformation digitale.
          </p>
          <div className="row">
            <a className="btn" href="#services">Découvrir nos services</a>
            <a className="btn" style={{ background: "transparent", border: "1px solid #fff" }} href="#contact">Contactez-nous</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <div className="container">
          <h2 className="h2 title center">Nos Services</h2>
          <div className="grid grid-3">
            {[
              { t: "Facturation Électronique & EDI", d: "Conformité FR/UE (Chorus Pro, OpenPeppol), API, PDP et interopérabilité." },
              { t: "Gestion de Projets Internationaux", d: "Prince2/PPM, multi-pays, multi-secteurs et grands comptes." },
              { t: "Optimisation Supply Chain", d: "Audit, cartographie et optimisation des achats, logistique et automatisation." },
              { t: "Management SI & Transition Digitale", d: "Intérim DSI, gestion de crise, alignement IT/Business (ERP)." },
              { t: "Cloud, IA & Blockchain", d: "Stratégies Cloud RGPD, IA appliquée et traçabilité." },
              { t: "Formation & Conseil", d: "e-invoicing, EDI et management digital (executive & académique)." }
            ].map((s, i) => (
              <div key={i} className="card">
                <div className="h3">{s.t}</div>
                <div className="muted">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs */}
      <section id="sectors" className="section" style={{ background: "#f1f5f9" }}>
        <div className="container center">
          <h2 className="h2 title">Secteurs</h2>
          <div className="row">
            <span className="pill">⚡ Énergie & Utilities</span>
            <span className="pill">🏥 Santé & Assurances</span>
            <span className="pill">🚗 Industrie & Automobile</span>
            <span className="pill">🛒 Retail & Distribution</span>
            <span className="pill">💻 High-Tech & Innovation</span>
          </div>
        </div>
      </section>

      {/* Références (logos défilants) */}
      <section id="expertise" className="section">
        <div className="container center">
          <h2 className="h2 title">Références & Expérience</h2>
          <p className="muted" style={{ maxWidth: 720, margin: "0 auto 24px" }}>
            Plus de 20 ans d’expérience auprès de clients internationaux.
          </p>
          <div className="logos">
            <div className="track">
              {[
                ["Coca-Cola","https://upload.wikimedia.org/wikipedia/commons/1/1b/Coca-Cola_logo.svg"],
                ["Repsol","https://upload.wikimedia.org/wikipedia/commons/5/54/Repsol_2025.svg"],
                ["Roche","https://upload.wikimedia.org/wikipedia/commons/0/08/F._Hoffmann-La_Roche_2021_logo.svg"],
                ["PSA","https://upload.wikimedia.org/wikipedia/commons/5/5b/Groupe_PSA_logo.svg"],
                ["Suez","https://upload.wikimedia.org/wikipedia/commons/7/79/Suez_logo.svg"],
                ["Lindt","https://upload.wikimedia.org/wikipedia/commons/2/2f/Lindt-Logo.svg"],
                ["Compass","https://upload.wikimedia.org/wikipedia/commons/2/21/Logo-compass.svg"],
              ].concat([
                ["Coca-Cola","https://upload.wikimedia.org/wikipedia/commons/1/1b/Coca-Cola_logo.svg"],
                ["Repsol","https://upload.wikimedia.org/wikipedia/commons/5/54/Repsol_2025.svg"],
                ["Roche","https://upload.wikimedia.org/wikipedia/commons/0/08/F._Hoffmann-La_Roche_2021_logo.svg"],
                ["PSA","https://upload.wikimedia.org/wikipedia/commons/5/5b/Groupe_PSA_logo.svg"],
                ["Suez","https://upload.wikimedia.org/wikipedia/commons/7/79/Suez_logo.svg"],
                ["Lindt","https://upload.wikimedia.org/wikipedia/commons/2/2f/Lindt-Logo.svg"],
                ["Compass","https://upload.wikimedia.org/wikipedia/commons/2/21/Logo-compass.svg"],
              ]).map(([alt, src], i) => (
                <img key={i} src={src} alt={alt} style={{ height: 28, opacity: .85, filter: "grayscale(1)" }}
                     onMouseOver={(e)=>{(e.target as HTMLImageElement).style.filter="grayscale(0)";(e.target as HTMLImageElement).style.opacity="1";}}
                     onMouseOut={(e)=>{(e.target as HTMLImageElement).style.filter="grayscale(1)";(e.target as HTMLImageElement).style.opacity=".85";}}/>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Écosystème (SAP / Sage X3 / EDI) */}
      <section id="stack" className="section" style={{ background: "#f1f5f9" }}>
        <div className="container center">
          <h2 className="h2 title">Écosystème & logiciels</h2>
        </div>
        <div className="container row">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP-Logo.svg" alt="SAP" height={28} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Sage_logo.svg" alt="Sage" height={28} />
          <span className="pill">Sage X3</span>
          <span className="pill">Lobster EDI</span>
          <span className="pill">TradeXpress (Generix)</span>
        </div>
      </section>

      {/* À propos */}
      <section id="about" className="section">
        <div className="container center">
          <h2 className="h2 title">À propos d’Artilest</h2>
          <p className="muted" style={{ maxWidth: 820, margin: "0 auto 24px" }}>
            Société de conseil et d’édition logicielle spécialisée en transformation digitale, e-invoicing et optimisation de processus.
          </p>
          <div className="grid grid-3">
            <div className="card"><div className="h3">Vision</div><div className="muted">Interopérabilité et efficacité pour les entreprises européennes.</div></div>
            <div className="card"><div className="h3">Valeurs</div><div className="muted">Conformité, transparence, innovation, résultats durables.</div></div>
            <div className="card"><div className="h3">Gouvernance</div><div className="muted">Pilotage international — FR / DE / EN.</div></div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section" style={{ background: "linear-gradient(#eef2ff,#dbeafe)" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 className="h2 title center">Contactez-nous</h2>
          <div className="card">
            <div style={{ display: "grid", gap: 12 }}>
              <input className="input" name="name" placeholder="Nom" value={form.name} onChange={handleChange} />
              <input className="input" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
              <textarea className="textarea" name="message" placeholder="Message" value={form.message} onChange={handleChange} />
              <label className="label">
                <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} />
                <span>J’accepte que mes données soient utilisées conformément au RGPD.</span>
              </label>
              <button className="btn" onClick={()=>alert(\"Formulaire prêt — connecte-le à Formspree ou un webhook.\")}>Envoyer</button>\n            </div>\n          </div>\n        </div>\n      </section>\n\n      {/* Footer */}\n      <footer style={{ background:\"#0f172a\", color:\"#cbd5e1\", textAlign:\"center\", padding:\"20px 0\" }}>\n        <div className=\"container\">\n          © {new Date().getFullYear()} Artilest — 14 rue Rabelais, 59650 Lille · contact@artilest.com\n        </div>\n      </footer>\n    </div>\n  );\n}\n```
