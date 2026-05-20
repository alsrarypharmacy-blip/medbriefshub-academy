import React from "react";

export default function App() {
  return (
    <div style={appStyle}>
      
      {/* Navbar */}
      <nav style={navbar}>
        <h2 style={logo}>MedBriefsHub Academy</h2>

        <div style={navLinks}>
          <a href="#home" style={link}>Home</a>
          <a href="#services" style={link}>Services</a>
          <a href="#about" style={link}>About</a>
          <a href="#contact" style={link}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          ...heroSection,
          backgroundImage:
            "linear-gradient(rgba(2,12,27,0.75), rgba(11,31,58,0.85)), url('/banner.jpg')",
        }}
      >
        <div style={heroContent}>
          <h1 style={heroTitle}>
            Empowering Medical Research & Scientific Publishing
          </h1>

          <p style={heroText}>
            MedBriefsHub Academy provides professional scientific research,
            publication guidance, academic mentoring, and accredited medical
            training programs for healthcare professionals and students.
          </p>

          <div style={heroButtons}>
            <button style={primaryButton}>Get Started</button>
            <button style={secondaryButton}>Book Consultation</button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={sectionStyle}>
        <h2 style={sectionTitle}>Our Services</h2>

        <div style={servicesGrid}>
          
          <div style={cardStyle}>
            <img
              src="/research.jpg"
              alt="Research"
              style={imageStyle}
            />
            <div style={cardContent}>
              <h3>Medical Research</h3>
              <p>
                Professional support for clinical and academic medical research.
              </p>
            </div>
          </div>

          <div style={cardStyle}>
            <img
              src="/publication.jpg"
              alt="Publication"
              style={imageStyle}
            />
            <div style={cardContent}>
              <h3>Scientific Publication</h3>
              <p>
                Publication assistance for Scopus & ISI indexed journals.
              </p>
            </div>
          </div>

          <div style={cardStyle}>
            <img
              src="/data-analysis.jpg"
              alt="Data Analysis"
              style={imageStyle}
            />
            <div style={cardContent}>
              <h3>Data Analysis</h3>
              <p>
                Advanced statistical analysis and healthcare data visualization.
              </p>
            </div>
          </div>

          <div style={cardStyle}>
            <img
              src="/research-proposal.jpg"
              alt="Research Proposal"
              style={imageStyle}
            />
            <div style={cardContent}>
              <h3>Research Proposal</h3>
              <p>
                Complete research proposal writing for universities and boards.
              </p>
            </div>
          </div>

          <div style={cardStyle}>
            <img
              src="/Saudi-board.jpg"
              alt="Saudi Board"
              style={imageStyle}
            />
            <div style={cardContent}>
              <h3>Saudi Board Support</h3>
              <p>
                Academic and research support for Saudi Board trainees.
              </p>
            </div>
          </div>

          <div style={cardStyle}>
            <img
              src="/CME-COURSES.jpg"
              alt="CME Courses"
              style={imageStyle}
            />
            <div style={cardContent}>
              <h3>CME Courses</h3>
              <p>
                Accredited medical education and CME training programs.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* About */}
      <section style={aboutSection} id="about">
        <div style={aboutContainer}>
          
          <div style={aboutText}>
            <h2 style={sectionTitle}>About Us</h2>

            <p style={aboutParagraph}>
              MedBriefsHub Academy is a professional platform specializing in
              scientific research, medical publication, academic mentorship,
              healthcare education, and advanced statistical analysis.
            </p>

            <p style={aboutParagraph}>
              Our mission is to empower healthcare professionals, researchers,
              and students with world-class academic solutions and publication
              excellence.
            </p>
          </div>

          <img
            src="/doctors.jpg"
            alt="Doctors"
            style={aboutImage}
          />

        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={contactSection}>
        <h2 style={sectionTitle}>Contact Us</h2>

        <div style={contactBox}>
          <p>Email: info@medbriefshub.com</p>
          <p>WhatsApp: +966 500000000</p>
          <p>Saudi Arabia 🇸🇦</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={footer}>
        <p>
          © 2026 MedBriefsHub Academy — All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}

/* Styles */

const appStyle = {
  fontFamily: "Arial, sans-serif",
  margin: 0,
  padding: 0,
  background: "#f4f7fb",
  color: "#0B1F3A",
};

const navbar = {
  background: "#081B33",
  color: "white",
  padding: "20px 40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "sticky",
  top: 0,
  zIndex: 1000,
};

const logo = {
  margin: 0,
  fontSize: "28px",
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

const heroSection = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  textAlign: "center",
  color: "white",
  padding: "40px",
};

const heroContent = {
  maxWidth: "900px",
};

const heroTitle = {
  fontSize: "60px",
  lineHeight: "1.2",
};

const heroText = {
  fontSize: "22px",
  marginTop: "20px",
  lineHeight: "1.8",
};

const heroButtons = {
  marginTop: "40px",
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  flexWrap: "wrap",
};

const primaryButton = {
  background: "#1D4ED8",
  color: "white",
  border: "none",
  padding: "16px 36px",
  borderRadius: "12px",
  fontSize: "18px",
  cursor: "pointer",
};

const secondaryButton = {
  background: "transparent",
  color: "white",
  border: "2px solid white",
  padding: "16px 36px",
  borderRadius: "12px",
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
};

const servicesGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "30px",
};

const cardStyle = {
  background: "white",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
};

const imageStyle = {
  width: "100%",
  height: "240px",
  objectFit: "cover",
};

const cardContent = {
  padding: "25px",
};

const aboutSection = {
  padding: "100px 40px",
  background: "#ffffff",
};

const aboutContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
  gap: "40px",
  alignItems: "center",
};

const aboutText = {};

const aboutParagraph = {
  fontSize: "20px",
  lineHeight: "1.8",
};

const aboutImage = {
  width: "100%",
  borderRadius: "20px",
};

const contactSection = {
  padding: "100px 40px",
  background: "#0B1F3A",
  color: "white",
  textAlign: "center",
};

const contactBox = {
  fontSize: "22px",
  lineHeight: "2",
};

const footer = {
  background: "#081B33",
  color: "white",
  textAlign: "center",
  padding: "30px",
};
