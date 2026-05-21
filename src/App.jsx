import "./App.css";
import {
  FaWhatsapp,
  FaEnvelope,
  FaBookMedical,
  FaGraduationCap,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

function App() {
  const services = [
    {
      title: "Medical Research",
      description:
        "Professional clinical and academic medical research support.",
      image: "/medical-research.jpg",
    },
    {
      title: "Scientific Publication",
      description:
        "Publication support for Scopus & ISI indexed journals.",
      image: "/scientific-publication.jpg",
    },
    {
      title: "Data Analysis",
      description:
        "Advanced statistical analysis and healthcare data visualization.",
      image: "/data-analysis.jpg",
    },
    {
      title: "Research Proposal",
      description:
        "Complete proposal writing for universities and medical boards.",
      image: "/research-proposal.jpg",
    },
    {
      title: "Saudi Board Support",
      description:
        "Academic mentorship and Saudi Board exam preparation.",
      image: "/saudi-board.jpg",
    },
    {
      title: "CME Courses",
      description:
        "Accredited CME programs and medical training courses.",
      image: "/cme-courses.jpg",
    },
  ];

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <div className="container nav-container">
          <h1 className="logo">MedBriefsHub Academy</h1>

          <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="hero"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="hero-badge">
            Medical Research & Scientific Excellence
          </span>

          <h2>
            Empowering Medical Research
            <br />
            & Scientific Publishing
          </h2>

          <p>
            Professional scientific research, publication guidance,
            academic mentorship, healthcare education, and accredited
            medical training programs.
          </p>

          <div className="hero-buttons">
            <a href="#services" className="btn-primary">
              Explore Services
            </a>

            <a
              href="https://wa.me/966549354994"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">What We Offer</span>
            <h2 className="section-title">Our Professional Services</h2>

            <p className="section-description">
              Specialized medical research and academic support
              tailored for healthcare professionals and trainees.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                  />
                </div>

                <div className="service-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <button className="service-btn">
                    Learn More <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about section">
        <div className="container about-container">
          <div className="about-image-box">
            <img
              src="/about-doctors.jpg"
              alt="Doctors"
              className="about-image"
            />
          </div>

          <div className="about-image-box">
  <img
    src="/about-doctors.jpg"
    alt="Doctors"
    className="about-image"
  />
</div>
            <span className="section-subtitle">
              About MedBriefsHub
            </span>

            <h2 className="section-title">
              Excellence in Medical Education & Research
            </h2>

            <p>
              MedBriefsHub Academy provides high-quality academic,
              research, and scientific publication services for
              healthcare professionals and medical trainees.
            </p>

            <ul className="about-list">
              <li>✔ Medical Research Support</li>
              <li>✔ Scientific Publication Assistance</li>
              <li>✔ Healthcare Education Programs</li>
              <li>✔ Academic Mentorship</li>
              <li>✔ Saudi Board Preparation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container stats-grid">
          <div className="stat-card">
            <FaBookMedical className="stat-icon" />

            <h3>120+</h3>

            <p>Published Research Papers</p>
          </div>

          <div className="stat-card">
            <FaGraduationCap className="stat-icon" />

            <h3>300+</h3>

            <p>Medical Trainees</p>
          </div>

          <div className="stat-card">
            <FaChartLine className="stat-icon" />

            <h3>95%</h3>

            <p>Research Success Rate</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle white-text">
              Contact Information
            </span>

            <h2 className="section-title white-text">
              Contact Us
            </h2>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <FaEnvelope className="contact-icon" />

              <h3>Email</h3>

              <p>info@medbriefshub.com</p>
            </div>

            <div className="contact-card">
              <FaWhatsapp className="contact-icon" />

              <h3>WhatsApp</h3>

              <p>+966 54 935 4994</p>
            </div>

            <div className="contact-card">
              <h3>Location</h3>

              <p>Saudi Arabia 🇸🇦</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-content">
          <h3>MedBriefsHub Academy</h3>

          <p>
            Professional Medical Research & Scientific Publication
            Services.
          </p>

          <span>
            © 2026 MedBriefsHub Academy — All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
