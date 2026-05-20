export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f8fafc", color: "#0f172a" }}>
      
      {/* Navbar */}
      <nav
        style={{
          background: "#0B1F3A",
          color: "white",
          padding: "18px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <h2>MedBriefsHub Academy</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#home" style={linkStyle}>Home</a>
          <a href="#services" style={linkStyle}>Services</a>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px",
          background:
            "linear-gradient(to right, #0B1F3A, #2563EB)",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "56px", maxWidth: "900px" }}>
          Empowering Medical Research & Scientific Publishing
        </h1>

        <p
          style={{
            marginTop: "20px",
            maxWidth: "700px",
            fontSize: "20px",
            lineHeight: "1.8",
          }}
        >
          Professional academic platform helping doctors, researchers,
          and healthcare students publish high-quality scientific research
          in international indexed journals.
        </p>

        <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
          <button style={primaryButton}>Get Started</button>
          <button style={secondaryButton}>Book Consultation</button>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        style={{
          padding: "80px 40px",
          background: "#ffffff",
        }}
      >
        <h2 style={sectionTitle}>Our Services</h2>

        <div style={gridStyle}>
          {services.map((service, index) => (
            <div key={index} style={cardStyle}>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        style={{
          padding: "80px 40px",
          background: "#eef4ff",
          textAlign: "center",
        }}
      >
        <h2 style={sectionTitle}>About MedBriefsHub Academy</h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "auto",
            fontSize: "18px",
            lineHeight: "1.9",
          }}
        >
          MedBriefsHub Academy is a specialized medical research and
          scientific publishing platform dedicated to supporting healthcare
          professionals and students throughout their complete research
          journey — from idea generation to publication in Q1/Q2 indexed journals.
        </p>

        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          <div style={statCard}>
            <h1>95%</h1>
            <p>Publication Success</p>
          </div>

          <div style={statCard}>
            <h1>500+</h1>
            <p>Researchers Supported</p>
          </div>

          <div style={statCard}>
            <h1>Q1/Q2</h1>
            <p>Indexed Journals</p>
          </div>
        </div>
      </section>

      {/* Publication Path */}
      <section
        style={{
          padding: "80px 40px",
          background: "white",
          textAlign: "center",
        }}
      >
        <h2 style={sectionTitle}>Research Journey</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          {[
            "Idea",
            "Proposal",
            "Ethics",
            "Data Collection",
            "Analysis",
            "Writing",
            "Publication",
          ].map((step, index) => (
            <div key={index} style={timelineStep}>
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        style={{
          padding: "80px 40px",
          background: "#0B1F3A",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={sectionTitleWhite}>Contact Us</h2>

        <p>Email: info@medbriefshub.com</p>
        <p>WhatsApp: +966 57 233 8037</p>
        <p>Telegram: @MedBriefsHub</p>

        <button style={{ ...primaryButton, marginTop: "20px" }}>
          Contact Now
        </button>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#061120",
          color: "#cbd5e1",
          textAlign: "center",
          padding: "20px",
        }}
      >
        © 2025 MedBriefsHub Academy. All rights reserved.
      </footer>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

const primaryButton = {
  background: "#06B6D4",
  color: "white",
  border: "none",
  padding: "14px 28px",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "16px",
};

const secondaryButton = {
  background: "transparent",
  color: "white",
  border: "2px solid white",
  padding: "14px 28px",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "16px",
};

const sectionTitle = {
  textAlign: "center",
  marginBottom: "50px",
  fontSize: "40px",
};

const sectionTitleWhite = {
  textAlign: "center",
  marginBottom: "40px",
  fontSize: "40px",
  color: "white",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
  gap: "25px",
};

const cardStyle = {
  background: "#f8fafc",
  padding: "30px",
  borderRadius: "16px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const statCard = {
  background: "white",
  padding: "30px",
  borderRadius: "16px",
  minWidth: "220px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const timelineStep = {
  background: "#2563EB",
  color: "white",
  padding: "16px 24px",
  borderRadius: "12px",
  fontWeight: "bold",
};

const services = [
  {
    title: "Research Proposal",
    desc: "Professional proposal development for academic and medical research.",
  },
  {
    title: "Biostatistics",
    desc: "Advanced statistical analysis and interpretation for healthcare studies.",
  },
  {
    title: "Scientific Writing",
    desc: "Manuscript preparation following international journal standards.",
  },
  {
    title: "Publication Support",
    desc: "Complete submission support for Q1/Q2 indexed journals.",
  },
  {
    title: "Saudi Board Research",
    desc: "Research assistance for Saudi Board and residency applicants.",
  },
  {
    title: "SCFHS CME Courses",
    desc: "Accredited medical education and CME activities.",
  },
];
