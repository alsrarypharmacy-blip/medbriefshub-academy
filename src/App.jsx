import React from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaGraduationCap,
  FaBookMedical,
  FaChartLine,
} from "react-icons/fa";

function App() {
  const services = [
    {
      title: "Medical Research",
      description:
        "Professional support for clinical and academic medical research.",
      image: "/medical-research.jpg",
    },
    {
      title: "Scientific Publication",
      description:
        "Publication assistance for Scopus & ISI indexed journals.",
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
        "Complete research proposal writing for universities and boards.",
      image: "/research-proposal.jpg",
    },
    {
      title: "Saudi Board Support",
      description:
        "Academic and research support for Saudi Board trainees.",
      image: "/saudi-board.jpg",
    },
    {
      title: "CME Courses",
      description:
        "Accredited medical education and CME training programs.",
      image: "/cme-courses.jpg",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f7fb",
        color: "#1e293b",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          background: "#001f54",
          padding: "18px 8%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: "0",
          zIndex: "1000",
          boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            color: "#fff",
            margin: "0",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          MedBriefsHub Academy
        </h1>

        <div style={{ display: "flex", gap: "25px" }}>
          {["Home", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: "600",
                transition: "0.3s",
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          height: "100vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#fff",
          padding: "20px",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "58px",
              fontWeight: "bold",
              marginBottom: "25px",
              lineHeight: "1.3",
            }}
          >
            Empowering Medical Research <br />
            & Scientific Publishing
          </h2>

          <p
            style={{
              maxWidth: "900px",
              margin: "0 auto 35px",
              fontSize: "22px",
              lineHeight: "1.8",
              color: "#e2e8f0",
            }}
          >
            Professional scientific research, publication guidance,
            healthcare education, academic mentoring, and accredited
            medical training programs.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#services"
              style={{
                background: "#2563eb",
                color: "#fff",
                padding: "16px 35px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Get Started
            </a>

            <a
              href="https://wa.me/966549354994"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "2px solid #fff",
                color: "#fff",
                padding: "16px 35px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Book Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        style={{
          padding: "100px 8%",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "48px",
            marginBottom: "70px",
            color: "#001f54",
          }}
        >
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "35px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                transition: "0.3s",
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "230px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "28px" }}>
                <h3
                  style={{
                    fontSize: "28px",
                    marginBottom: "15px",
                    color: "#0f172a",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "#475569",
                  }}
                >
                  {service.description}
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
          padding: "100px 8%",
          background: "#eef2f7",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "48px",
                color: "#001f54",
                marginBottom: "30px",
              }}
            >
              About Us
            </h2>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "2",
                marginBottom: "30px",
                color: "#334155",
              }}
            >
              MedBriefsHub Academy is a professional platform specializing in:
            </p>

            <ul
              style={{
                lineHeight: "2.3",
                fontSize: "20px",
                color: "#1e293b",
              }}
            >
              <li>Medical Research</li>
              <li>Scientific Publication</li>
              <li>Healthcare Education</li>
              <li>Academic Mentorship</li>
              <li>Saudi Board Preparation</li>
            </ul>
          </div>

          <div>
            <img
              src="/about-us.jpg"
              alt="Doctors"
              style={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        style={{
          padding: "90px 8%",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "30px",
            textAlign: "center",
          }}
        >
          <div>
            <FaBookMedical size={55} color="#2563eb" />
            <h3 style={{ fontSize: "40px", margin: "15px 0" }}>120+</h3>
            <p>Published Research Papers</p>
          </div>

          <div>
            <FaGraduationCap size={55} color="#2563eb" />
            <h3 style={{ fontSize: "40px", margin: "15px 0" }}>300+</h3>
            <p>Medical Trainees</p>
          </div>

          <div>
            <FaChartLine size={55} color="#2563eb" />
            <h3 style={{ fontSize: "40px", margin: "15px 0" }}>95%</h3>
            <p>Research Success Rate</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        style={{
          background: "#001f54",
          color: "#fff",
          padding: "100px 8%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "50px",
            marginBottom: "40px",
          }}
        >
          Contact Us
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "22px",
            fontSize: "22px",
          }}
        >
          <p>
            <FaEnvelope /> info@medbriefshub.com
          </p>

          <p>
            <FaWhatsapp /> +966 54 935 4994
          </p>

          <p>Saudi Arabia 🇸🇦</p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#000814",
          color: "#cbd5e1",
          textAlign: "center",
          padding: "25px",
          fontSize: "16px",
        }}
      >
        © 2026 MedBriefsHub Academy — All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
