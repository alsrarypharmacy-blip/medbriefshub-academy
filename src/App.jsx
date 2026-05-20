import React from "react";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
        background: "#f4f7fb",
        color: "#0f172a",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          background: "#031B4E",
          color: "white",
          padding: "20px 50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          width: "100%",
          top: 0,
          zIndex: 1000,
          boxSizing: "border-box",
        }}
      >
        <h2 style={{ margin: 0 }}>MedBriefsHub Academy</h2>

        <div style={{ display: "flex", gap: "25px" }}>
          <a href="#home" style={navLink}>
            Home
          </a>

          <a href="#services" style={navLink}>
            Services
          </a>

          <a href="#about" style={navLink}>
            About
          </a>

          <a href="#contact" style={navLink}>
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px",
          color: "white",

          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/banner.jpg')",

          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            maxWidth: "1000px",
            lineHeight: "1.2",
            marginBottom: "20px",
          }}
        >
          Empowering Medical Research & Scientific Publishing
        </h1>

        <p
          style={{
            maxWidth: "800px",
            fontSize: "22px",
            lineHeight: "1.8",
          }}
        >
          MedBriefsHub Academy provides professional medical research,
          publication support, data analysis, academic mentoring, Saudi board
          preparation, and CME educational programs.
        </p>

        <div
          style={{
            marginTop: "35px",
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <button style={primaryButton}>Get Started</button>

          <button style={secondaryButton}>Book Consultation</button>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        style={{
          padding: "100px 40px",
          background: "white",
        }}
      >
        <h2 style={sectionTitle}>Our Professional Services</h2>

        <div style={gridStyle}>
          {services.map((service, index) => (
            <div key={index} style={cardStyle}>
              <img
                src={service.image}
                alt={service.title}
                style={imageStyle}
              />

              <div style={{ padding: "25px" }}>
                <h3>{service.title}</h3>

                <p
                  style={{
                    color: "#475569",
                    lineHeight: "1.7",
                  }}
                >
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        style={{
          padding: "100px 40px",
          background: "#f8fafc",
          textAlign: "center",
        }}
      >
        <h2 style={sectionTitle}>About MedBriefsHub Academy</h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "auto",
            fontSize: "20px",
            lineHeight: "2",
            color: "#334155",
          }}
        >
          We are a professional academic and medical education platform helping
          researchers, healthcare professionals, and students achieve excellence
          in scientific research, publication, data analysis, and accredited
          medical training.
        </p>
      </section>

      {/* Stats */}
      <section
        style={{
          padding: "80px 40px",
          background: "#031B4E",
          color: "white",
        }}
      >
        <div style={statsGrid}>
          <div>
            <h1>500+</h1>
            <p>Research Projects</p>
          </div>

          <div>
            <h1>300+</h1>
            <p>Published Papers</p>
          </div>

          <div>
            <h1>1000+</h1>
            <p>Healthcare Professionals</p>
          </div>

          <div>
            <h1>50+</h1>
            <p>CME Courses</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        style={{
          padding: "100px 40px",
          background: "white",
          textAlign: "center",
        }}
      >
        <h2 style={sectionTitle}>Contact Us</h2>

        <p style={{ fontSize: "20px", color: "#475569" }}>
          Email: info@medbriefshub.com
        </p>

        <p style={{ fontSize: "20px", color: "#475569" }}>
          WhatsApp: +966 500000000
        </p>

        <button
          style={{
            ...primaryButton,
            marginTop: "30px",
          }}
        >
          Contact via WhatsApp
        </button>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#020617",
          color: "white",
          textAlign: "center",
          padding: "30px",
        }}
      >
        © 2026 MedBriefsHub Academy — All Rights Reserved
      </footer>
    </div>
  );
}

/* ========================= */

const navLink = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
};

const primaryButton = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "16px 35px",
  borderRadius: "12px",
  fontSize: "18px",
  cursor: "pointer",
};

const secondaryButton = {
  background: "transparent",
  color: "white",
  border: "2px solid white",
  padding: "16px 35px",
  borderRadius: "12px",
  fontSize: "18px",
  cursor: "pointer",
};

const sectionTitle = {
  textAlign: "center",
  fontSize: "42px",
  marginBottom: "60px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "30px",
};

const cardStyle = {
  background: "white",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
};

const imageStyle = {
  width: "100%",
  height: "240px",
  objectFit: "cover",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
  gap: "30px",
  textAlign: "center",
};

/* ========================= */

const services = [
  {
    title: "Medical Research",
    image: "/research.jpg",
    desc:
      "Professional medical and scientific research support for healthcare professionals and postgraduate students.",
  },

  {
    title: "Scientific Publication",
    image: "/publication.jpg",
    desc:
      "Publication assistance for indexed journals including editing, formatting, and submission guidance.",
  },

  {
    title: "Data Analysis",
    image: "/data-analysis.jpg",
    desc:
      "Advanced statistical analysis using SPSS, R, and biomedical data interpretation.",
  },

  {
    title: "Research Proposal",
    image: "/research-proposal.jpg",
    desc:
      "Professional proposal writing for master, residency, and fellowship research projects.",
  },

  {
    title: "Saudi Board Preparation",
    image: "/Saudi-board.jpg",
    desc:
      "Comprehensive Saudi Board exam preparation courses with mentoring and mock exams.",
  },

  {
    title: "Academic Promotions",
    image: "/academic-promotions.jpg",
    desc:
      "Academic promotion portfolio preparation and publication support for faculty members.",
  },

  {
    title: "CME Courses",
    image: "/CME-COURSES.jpg",
    desc:
      "Accredited CME medical education courses for healthcare professionals.",
  },

  {
    title: "Healthcare Training",
    image: "/doctors.jpg",
    desc:
      "Professional clinical and healthcare educational workshops and mentorship programs.",
  },
];
<img
  src="/research.jpg"
  alt="Research"
  style={{
    width: "100%",
    borderRadius: "20px"
  }}
/>
<div style={servicesGrid}>
  <div style={cardStyle}>
    <img src="/research.jpg" style={imageStyle} />
    <h3>Medical Research</h3>
  </div>

  <div style={cardStyle}>
    <img src="/publication.jpg" style={imageStyle} />
    <h3>Scientific Publication</h3>
  </div>

  <div style={cardStyle}>
    <img src="/data-analysis.jpg" style={imageStyle} />
    <h3>Data Analysis</h3>
  </div>
</div>
const imageStyle = {
  width: "100%",
  height: "220px",
  objectFit: "cover",
  borderRadius: "16px",
};
