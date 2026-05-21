import React from "react";

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
      image: "/CME-COURSES.jpg",
    },
  ];

  return (
    <div style={appStyle}>
      {/* Navbar */}
      <nav style={navbar}>
        <h2 style={logo}>MedBriefsHub Academy</h2>

        <div style={navLinks}>
          <a href="#home" style={linkStyle}>Home</a>
          <a href="#services" style={linkStyle}>Services</a>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={heroSection}>
        <div style={overlay}>
          <h1 style={heroTitle}>
            Empowering Medical Research <br />
            & Scientific Publishing
          </h1>

          <p style={heroText}>
            Professional scientific research, publication guidance,
            academic mentoring, healthcare education, and accredited
            medical training programs.
          </p>

          <div style={buttonContainer}>
            <button style={primaryBtn}>Get Started</button>
            <button style={secondaryBtn}>Book Consultation</button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={sectionStyle}>
        <h2 style={sectionTitle}>Our Services</h2>

        <div style={servicesGrid}>
          {services.map((service, index) => (
            <div key={index} style={cardStyle}>
              <img
                src={service.image}
                alt={service.title}
                style={imageStyle}
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

          <p style={paragraph}>
            MedBriefsHub Academy is a professional platform specializing in:
          </p>

          <ul style={listStyle}>
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

const appStyle = {
  fontFamily: "Arial, sans-serif",
  background: "#f4f7fb",
  color: "#0b1f3a",
};

const navbar = {
  position: "fixed",
  top: 0,
  width: "100%",
  background: "#001f4d",
  padding: "20px 40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 1000,
  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
};

const logo = {
  color: "white",
  fontSize: "28px",
};

const navLinks = {
  display: "flex",
  gap: "20px",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

const heroSection = {
  height: "100vh",
  backgroundImage:
    "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/banner.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "white",
  padding: "20px",
};

const overlay = {
  maxWidth: "900px",
};

const heroTitle = {
  fontSize: "60px",
  marginBottom: "20px",
  fontWeight: "bold",
};

const heroText = {
  fontSize: "22px",
  lineHeight: "1.8",
  marginBottom: "40px",
};

const buttonContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
};

const primaryBtn = {
  background: "#2563eb",
  color: "white",
  padding: "15px 35px",
  border: "none",
  borderRadius: "10px",
  fontSize: "18px",
  cursor: "pointer",
};

const secondaryBtn = {
  background: "transparent",
  color: "white",
  padding: "15px 35px",
  border: "2px solid white",
  borderRadius: "10px",
  fontSize: "18px",
  cursor: "pointer",
};

const sectionStyle = {
  padding: "100px 40px",
};

const sectionTitle = {
  textAlign: "center",
  fontSize: "42px",
  marginBottom: "60px",
  color: "#001f4d",
};

const servicesGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "30px",
};

const cardStyle = {
  background: "white",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  transition: "0.3s",
};

const imageStyle = {
  width: "100%",
  height: "220px",
  objectFit: "cover",
};

const cardContent = {
  padding: "25px",
};

const aboutSection = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  alignItems: "center",
  gap: "40px",
  padding: "100px 40px",
};

const aboutText = {
  fontSize: "20px",
  lineHeight: "2",
};

const paragraph = {
  marginBottom: "20px",
};

const listStyle = {
  lineHeight: "2.2",
};

const aboutImage = {
  width: "100%",
  borderRadius: "20px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
};

const contactSection = {
  background: "#001f4d",
  color: "white",
  textAlign: "center",
  padding: "100px 20px",
  lineHeight: "2.5",
};

const contactTitle = {
  fontSize: "42px",
  marginBottom: "30px",
};

const footer = {
  background: "#001633",
  color: "white",
  textAlign: "center",
  padding: "20px",
};
