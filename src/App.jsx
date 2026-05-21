export default function App() {

  const services = [
    {
      title: "Medical Research",
      desc: "Professional support for clinical and academic medical research.",
      image: "/research.jpg",
    },
    {
      title: "Scientific Publication",
      desc: "Publication assistance for Scopus & ISI indexed journals.",
      image: "/publication.jpg",
    },
    {
      title: "Data Analysis",
      desc: "Advanced statistical analysis and healthcare data visualization.",
      image: "/data-analysis.jpg",
    },
    {
      title: "Research Proposal",
      desc: "Complete research proposal writing for universities and boards.",
      image: "/research-proposal.jpg",
    },
    {
      title: "Saudi Board Support",
      desc: "Academic and research support for Saudi Board trainees.",
      image: "/saudi-board.jpg",
    },
    {
      title: "CME Courses",
      desc: "Accredited medical education and CME training programs.",
      image: "/cme-courses.jpg",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial", background: "#f4f7fb" }}>

      {/* Navbar */}
      <nav style={navbar}>
        <h2>MedBriefsHub Academy</h2>

        <div style={navLinks}>
          <a href="#home" style={link}>Home</a>
          <a href="#services" style={link}>Services</a>
          <a href="#about" style={link}>About</a>
          <a href="#contact" style={link}>Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" style={hero}>

        <div style={overlay}></div>

        <div style={heroContent}>
          <h1 style={heroTitle}>
            Empowering Medical Research
            <br />
            & Scientific Publishing
          </h1>

          <p style={heroText}>
            Professional scientific research, publication guidance,
            academic mentoring, healthcare education,
            and accredited medical training programs.
          </p>

          <div style={heroButtons}>
            <button style={primaryBtn}>Get Started</button>
            <button style={secondaryBtn}>Book Consultation</button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={section}>
        <h2 style={sectionTitle}>Our Services</h2>

        <div style={grid}>

          {services.map((service, index) => (

            <div key={index} style={card}>

              <img
                src={service.image}
                alt={service.title}
                style={cardImage}
              />

              <div style={cardContent}>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>

            </div>

          ))}

        </div>
      </section>

      {/* About */}
      <section id="about" style={aboutSection}>

        <div style={aboutText}>
          <h2 style={sectionTitle}>About Us</h2>

          <p style={aboutParagraph}>
            MedBriefsHub Academy is a professional platform specializing in:
          </p>

          <ul style={list}>
            <li>Medical Research</li>
            <li>Scientific Publication</li>
            <li>Healthcare Education</li>
            <li>Academic Mentorship</li>
            <li>Saudi Board Preparation</li>
          </ul>
        </div>

        <img
          src="/doctors.jpg"
          alt="Doctors"
          style={aboutImage}
        />

      </section>

      {/* Contact */}
      <section id="contact" style={contactSection}>

        <h2 style={contactTitle}>Contact Us</h2>

        <p>Email: info@medbriefshub.com</p>
        <p>WhatsApp: +966 500000000</p>
        <p>Saudi Arabia 🇸🇦</p>

      </section>

      {/* Footer */}
      <footer style={footer}>
        © 2026 MedBriefsHub Academy — All Rights Reserved.
      </footer>

    </div>
  );
}

/* ================= STYLES ================= */

const navbar = {
  background: "#061B3A",
  color: "white",
  padding: "20px 40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  width: "100%",
  top: 0,
  zIndex: 1000,
};

const navLinks = {
  display: "flex",
  gap: "20px",
};

const link = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

const hero = {
  position: "relative",
  minHeight: "100vh",
  backgroundImage: "url('/banner.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "white",
};

const overlay = {
  position: "absolute",
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.55)",
};

const heroContent = {
  position: "relative",
  zIndex: 2,
  padding: "20px",
  maxWidth: "900px",
};

const heroTitle = {
  fontSize: "58px",
  fontWeight: "bold",
};

const heroText = {
  fontSize: "22px",
  lineHeight: "1.8",
  marginTop: "20px",
};

const heroButtons = {
  marginTop: "40px",
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
};

const primaryBtn = {
  background: "#2563EB",
  color: "white",
  border: "none",
  padding: "16px 32px",
  borderRadius: "10px",
  fontSize: "18px",
  cursor: "pointer",
};

const secondaryBtn = {
  background: "transparent",
  color: "white",
  border: "2px solid white",
  padding: "16px 32px",
  borderRadius: "10px",
  fontSize: "18px",
  cursor: "pointer",
};

const section = {
  padding: "100px 40px",
};

const sectionTitle = {
  textAlign: "center",
  fontSize: "42px",
  color: "#061B3A",
  marginBottom: "60px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "30px",
};

const card = {
  background: "white",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
};

const cardImage = {
  width: "100%",
  height: "240px",
  objectFit: "cover",
};

const cardContent = {
  padding: "25px",
};

const aboutSection = {
  padding: "100px 40px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "50px",
  alignItems: "center",
};

const aboutText = {};

const aboutParagraph = {
  fontSize: "20px",
  lineHeight: "1.8",
};

const list = {
  marginTop: "20px",
  lineHeight: "2",
  fontSize: "18px",
};

const aboutImage = {
  width: "100%",
  borderRadius: "20px",
};

const contactSection = {
  background: "#061B3A",
  color: "white",
  textAlign: "center",
  padding: "100px 20px",
};

const contactTitle = {
  fontSize: "42px",
  marginBottom: "30px",
};

const footer = {
  background: "#04142D",
  color: "white",
  textAlign: "center",
  padding: "25px",
};
