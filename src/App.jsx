import React from "react";
import "./App.css";

function App() {
  const services = [
    {
      title: "Medical Research",
      description:
        "Professional support for clinical and academic medical research.",
      image:
        "https://images.unsplash.com/photo-1579165466741-7f35e4755660?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Scientific Publication",
      description:
        "Publication assistance for Scopus & ISI indexed journals.",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Data Analysis",
      description:
        "Advanced statistical analysis and healthcare data visualization.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Research Proposal",
      description:
        "Complete research proposal writing for universities and boards.",
      image:
        "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Saudi Board Support",
      description:
        "Academic and research support for Saudi Board trainees.",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "CME Courses",
      description:
        "Accredited medical education and CME training programs.",
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">MedBriefsHub Academy</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>
            Empowering Medical Research
            <br />
            & Scientific Publishing
          </h1>

          <p>
            Professional scientific research, publication guidance,
            academic mentoring, healthcare education, and accredited
            medical training programs.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section" id="services">
        <h2>Our Services</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={service.title} />

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="about-section" id="about">
        <div className="about-text">
          <h2>About Us</h2>

          <p>
            MedBriefsHub Academy is a professional platform
            specializing in:
          </p>

          <ul>
            <li>Medical Research</li>
            <li>Scientific Publication</li>
            <li>Healthcare Education</li>
            <li>Academic Mentorship</li>
            <li>Saudi Board Preparation</li>
          </ul>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
            alt="Doctors"
          />
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <h2>Contact Us</h2>

        <p>Email: info@medbriefshub.com</p>
        <p>WhatsApp: +966 500000000</p>
        <p>Saudi Arabia 🇸🇦</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2026 MedBriefsHub Academy — All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
