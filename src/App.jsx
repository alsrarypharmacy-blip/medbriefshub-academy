import React from "react";
import "./App.css";
import {
  FaWhatsapp,
  FaEnvelope,
  FaGraduationCap,
  FaBookMedical,
  FaChartLine,
  FaFlask,
} from "react-icons/fa";

function App() {
  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="container nav-container">
          <h1 className="logo">MedBriefsHub Academy</h1>

          <nav>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#stats">Statistics</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="hero"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      >
        <div className="overlay"></div>

        <div className="hero-content container">
          <h2>
            Empowering Medical Research <br />
            & Scientific Publishing
          </h2>

          <p>
            Professional support in medical research, scientific publication,
            healthcare education, CME programs, and Saudi Board preparation.
          </p>

          <div className="hero-buttons">
            <a href="#services" className="btn primary-btn">
              Explore Services
            </a>

            <a
              href="https://wa.me/966549354994"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary-btn"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="services section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>

          <div className="services-grid">

            {/* CARD 1 */}
            <div className="service-card">
              <img
                src="/medical-research.jpg"
                alt="Medical Research"
              />

              <div className="card-content">
                <FaFlask className="card-icon" />

                <h3>Medical Research</h3>

                <p>
                  Clinical and academic research support with advanced
                  methodologies and scientific consultation.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="service-card">
              <img
                src="/scientific-publication.jpg"
                alt="Scientific Publication"
              />

              <div className="card-content">
                <FaBookMedical className="card-icon" />

                <h3>Scientific Publication</h3>

                <p>
                  Professional manuscript preparation and publication support
                  for Scopus and ISI indexed journals.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="service-card">
              <img
                src="/research-analysis.jpg"
                alt="Data Analysis"
              />

              <div className="card-content">
                <FaChartLine className="card-icon" />

                <h3>Data Analysis</h3>

                <p>
                  Advanced statistical analysis, interpretation, and medical
                  data visualization.
                </p>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="service-card">
              <img
                src="/saudi-board.jpg"
                alt="Saudi Board"
              />

              <div className="card-content">
                <FaGraduationCap className="card-icon" />

                <h3>Saudi Board Support</h3>

                <p>
                  Comprehensive preparation programs and academic mentoring
                  for Saudi Board trainees.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="about section">
        <div className="container about-container">

          <div className="about-text">
            <h2 className="section-title">About Us</h2>

            <p>
              MedBriefsHub Academy is a professional educational and scientific
              platform dedicated to supporting healthcare professionals,
              researchers, and medical trainees.
            </p>

            <ul>
              <li>Medical Research Support</li>
              <li>Scientific Publication Assistance</li>
              <li>CME Accredited Courses</li>
              <li>Saudi Board Preparation</li>
              <li>Healthcare Academic Mentorship</li>
            </ul>
          </div>

          <div className="about-image">
            <img
              src="/about-doctors.jpg"
              alt="Doctors Team"
            />
          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section id="stats" className="stats section">
        <div className="container">

          <div className="stats-grid">

            <div className="stat-card">
              <h3>120+</h3>
              <p>Published Research Papers</p>
            </div>

            <div className="stat-card">
              <h3>300+</h3>
              <p>Medical Trainees</p>
            </div>

            <div className="stat-card">
              <h3>95%</h3>
              <p>Research Success Rate</p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="contact section">

        <div className="container">

          <h2 className="section-title white">Contact Us</h2>

          <div className="contact-info">

            <p>
              <FaEnvelope /> info@medbriefshub.com
            </p>

            <p>
              <FaWhatsapp /> +966 54 935 4994
            </p>

            <p>Saudi Arabia 🇸🇦</p>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <p>
          © 2026 MedBriefsHub Academy — All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;
