import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
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

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-overlay">
          <div className="container hero-content">
            <h2>
              Empowering Medical Research <br />
              & Scientific Publishing
            </h2>

            <p>
              Professional support for clinical research, scientific publication,
              CME programs, and Saudi board preparation.
            </p>

            <div className="hero-buttons">
              <a href="#services" className="btn-primary">
                Explore Services
              </a>

              <a href="#contact" className="btn-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services section">
        <div className="container">

          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              High-quality academic and medical support services.
            </p>
          </div>

          <div className="services-grid">

            <div className="service-card">
              <img
                src="/medical-research.jpg"
                alt="Medical Research"
              />

              <div className="service-content">
                <h3>Medical Research</h3>

                <p>
                  Clinical and academic research support with advanced
                  methodologies and scientific consultation.
                </p>
              </div>
            </div>

            <div className="service-card">
              <img
                src="/scientific-publication.jpg"
                alt="Scientific Publication"
              />

              <div className="service-content">
                <h3>Scientific Publication</h3>

                <p>
                  Manuscript writing, editing, and publication support
                  for indexed journals.
                </p>
              </div>
            </div>

            <div className="service-card">
              <img
                src="/data-analysis.jpg"
                alt="Data Analysis"
              />

              <div className="service-content">
                <h3>Data Analysis</h3>

                <p>
                  Advanced biostatistics, medical data visualization,
                  and professional reporting.
                </p>
              </div>
            </div>

            <div className="service-card">
              <img
                src="/saudi-board.jpg"
                alt="Saudi Board"
              />

              <div className="service-content">
                <h3>Saudi Board Preparation</h3>

                <p>
                  Structured mentorship and exam-focused preparation
                  programs for trainees.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about section">
        <div className="container about-grid">

          <div className="about-image">
            <img
              src="/about-doctors.jpg"
              alt="Doctors Team"
            />
          </div>

          <div className="about-content">
            <h2>About MedBriefsHub Academy</h2>

            <p>
              MedBriefsHub Academy is a modern medical educational platform
              focused on empowering healthcare professionals, researchers,
              and trainees through high-quality academic solutions.
            </p>

            <ul>
              <li>✔ Medical Research Support</li>
              <li>✔ Scientific Publication Assistance</li>
              <li>✔ CME Accredited Courses</li>
              <li>✔ Saudi Board Mentorship</li>
              <li>✔ Academic Data Analysis</li>
            </ul>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section id="stats" className="stats section">
        <div className="container stats-grid">

          <div className="stat-card">
            <h2>120+</h2>
            <p>Published Research Papers</p>
          </div>

          <div className="stat-card">
            <h2>300+</h2>
            <p>Medical Trainees</p>
          </div>

          <div className="stat-card">
            <h2>95%</h2>
            <p>Research Success Rate</p>
          </div>

          <div className="stat-card">
            <h2>50+</h2>
            <p>International Collaborations</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact section">
        <div className="container">

          <div className="section-title">
            <h2>Contact Us</h2>

            <p>
              Reach out for collaborations, mentorship, or publication support.
            </p>
          </div>

          <div className="contact-box">
            <p>📧 info@medbriefshub.com</p>
            <p>📞 +966 50 123 4567</p>
            <p>📍 Saudi Arabia 🇸🇦</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p>
            © 2026 MedBriefsHub Academy — All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
