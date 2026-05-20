export default function App() {
  const services = [
    {
      title: "Medical Research Support",
      desc: "Full research supervision from idea selection to publication."
    },
    {
      title: "Scientific Publishing",
      desc: "Publishing support in Scopus, PubMed and Web of Science journals."
    },
    {
      title: "Saudi Board Research",
      desc: "Research pathways designed for Saudi Board applicants."
    },
    {
      title: "Academic Promotion",
      desc: "Professional support for academic promotion and fellowships."
    },
    {
      title: "CME Accredited Courses",
      desc: "Certified medical education and scientific workshops."
    },
    {
      title: "Data Analysis",
      desc: "Advanced biostatistics and SPSS analysis services."
    }
  ];

  return (
    <div style={{ fontFamily: "Arial", background: "#f4f7fb" }}>
      
      {/* NAVBAR */}
      <nav
        style={{
          background: "#071739",
          color: "white",
          padding: "20px 50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000
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

      {/* HERO */}
      <section
        id="home"
        style={{
          minHeight: "90vh",
          background:
            "linear-gradient(to right,#071739,#0b2d67,#145da0)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px"
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            maxWidth: "900px",
            marginBottom: "20px"
          }}
        >
          Empowering Medical Research & Scientific Publishing
        </h1>

        <p
          style={{
            maxWidth: "700px",
            fontSize: "20px",
            lineHeight: "1.8"
          }}
        >
          MedBriefsHub Academy provides professional scientific research,
          publication guidance, academic mentoring, and accredited medical
          training programs for healthcare professionals and students.
        </p>

        <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
          <button style={primaryButton}>Get Started</button>
          <button style={secondaryButton}>Book Consultation</button>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{
          padding: "100px 40px",
          background: "white"
        }}
      >
        <h2 style={sectionTitle}>Our Services</h2>

        <div style={gridStyle}>
          {services.map((service, index) => (
            <div key={index} style={cardStyle}>
              <h3>{service.title}</h3>

              <p style={{ color: "#444", lineHeight: "1.8" }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          padding: "100px 40px",
          background: "#eef4ff",
          textAlign: "center"
        }}
      >
        <h2 style={sectionTitle}>About MedBriefsHub Academy</h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "auto",
            lineHeight: "2",
            fontSize: "18px",
            color: "#333"
          }}
        >
          We are a professional medical research and publishing academy focused
          on supporting doctors, researchers, students, and healthcare
          professionals throughout their scientific journey.
        </p>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "100px 40px",
          background: "#071739",
          color: "white",
          textAlign: "center"
        }}
      >
        <h2 style={sectionTitleWhite}>Contact Us</h2>

        <p>Email: info@medbriefshub.com</p>
        <p>WhatsApp: +966 500000000</p>

        <button
          style={{
            marginTop: "25px",
            background: "#145da0",
            color: "white",
            border: "none",
            padding: "15px 30px",
            borderRadius: "10px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Contact Now
        </button>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#020c1b",
          color: "white",
          textAlign: "center",
          padding: "25px"
        }}
      >
        © 2026 MedBriefsHub Academy — All Rights Reserved
      </footer>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px"
};

const primaryButton = {
  background: "#1e88e5",
  color: "white",
  border: "none",
  padding: "15px 30px",
  borderRadius: "10px",
  fontSize: "16px",
  cursor: "pointer"
};

const secondaryButton = {
  background: "transparent",
  color: "white",
  border: "2px solid white",
  padding: "15px 30px",
  borderRadius: "10px",
  fontSize: "16px",
  cursor: "pointer"
};

const sectionTitle = {
  textAlign: "center",
  fontSize: "42px",
  marginBottom: "60px",
  color: "#071739"
};

const sectionTitleWhite = {
  textAlign: "center",
  fontSize: "42px",
  marginBottom: "40px",
  color: "white"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
  gap: "30px"
};

const cardStyle = {
  background: "#f8fbff",
  padding: "30px",
  borderRadius: "15px",
  boxShadow: "0 5px 20px rgba(0,0,0,0.08)"
};
