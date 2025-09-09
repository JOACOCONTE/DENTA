import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

// Import the new repair images
import oro1 from "../assets/cintillos/oro 1.jpg";
import oro2 from "../assets/cintillos/oro 2.jpg";
import oro3 from "../assets/cintillos/oro 3.jpg";
import plata1 from "../assets/cintillos/PLATA 1.jpg";
import plata2 from "../assets/cintillos/plata 2.jpg";
import plata3 from "../assets/cintillos/plata 3.jpg";
import alianzas1 from "../assets/cintillos/Alianzas 1.jpg";
import alianzas2 from "../assets/cintillos/Alianzas 2.jpg";
import alianzas3 from "../assets/cintillos/Alianzas 3.jpg";

export const Projects = () => {
  const projects = [
    // Cintillos de ORO
    {
      title: "Cintillo de oro personalizado",
      description: "Diseño y fabricación artesanal de cintillos en oro, adaptados al gusto y medida de cada cliente.",
      imgUrl: oro1,
    },
    {
      title: "Cintillo de oro personalizado",
      description: "Diseño y fabricación artesanal de cintillos en oro, adaptados al gusto y medida de cada cliente.",
      imgUrl: oro2,
    },
    {
      title: "Cintillo de oro personalizado",
      description: "Diseño y fabricación artesanal de cintillos en oro, adaptados al gusto y medida de cada cliente.",
      imgUrl: oro3,
    },
    // Cintillos de PLATA
    {
      title: "Cintillo de plata personalizado",
      description: "Diseño y fabricación artesanal de cintillos en plata, adaptados al gusto y medida de cada cliente.",
      imgUrl: plata1,
    },
    {
      title: "Cintillo de plata personalizado",
      description: "Diseño y fabricación artesanal de cintillos en plata, adaptados al gusto y medida de cada cliente.",
      imgUrl: plata2,
    },
    {
      title: "Cintillo de plata personalizado",
      description: "Diseño y fabricación artesanal de cintillos en plata, adaptados al gusto y medida de cada cliente.",
      imgUrl: plata3,
    },
    // Alianzas
    {
      title: "Alianza personalizada",
      description: "Alianzas hechas a mano, diseñadas para celebrar momentos únicos y especiales.",
      imgUrl: alianzas1,
    },
    {
      title: "Alianza personalizada",
      description: "Alianzas hechas a mano, diseñadas para celebrar momentos únicos y especiales.",
      imgUrl: alianzas2,
    },
    {
      title: "Alianza personalizada",
      description: "Alianzas hechas a mano, diseñadas para celebrar momentos únicos y especiales.",
      imgUrl: alianzas3,
    },
    // Pulseras únicas
    {
      title: "Pulsera con detalles únicos",
      description: "Creación de pulseras con detalles personalizados, combinando técnicas modernas y tradicionales.",
      imgUrl: plata2,
    },
  ];

  const [activeSection, setActiveSection] = React.useState(0);

  const sectionTitles = [
    "💍 Cintillos de ORO",
    "💍 Cintillos de PLATA",
    "💞 Alianzas"
  ];

  const sectionProjects = [
    [projects[0], projects[1], projects[2]], // Cintillos de ORO
    [projects[3], projects[4], projects[5]], // Cintillos de PLATA
    [projects[6], projects[7], projects[8]], // Alianzas
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="project-bx fade-in">
              <h2>Algunos de nuestros trabajos ✨</h2>
              <p>
                Te mostramos ejemplos de piezas realizadas y restauradas en nuestro taller. Cada joya es única y refleja la dedicación y el arte de nuestro equipo.
              </p>
              <div className="project-nav mb-4">
                {sectionTitles.map((title, idx) => (
                  <button
                    key={idx}
                    className={`nav-btn${activeSection === idx ? " active" : ""}`}
                    onClick={() => setActiveSection(idx)}
                  >
                    {title}
                  </button>
                ))}
              </div>
              <div className="fade-in-delay">
                <Row className="equal-height-cards">
                  {sectionProjects[activeSection].map((project, index) => (
                    <Col xs={12} sm={6} md={4} key={index} className="d-flex">
                      <div className={`proj-imgbx slide-in-${index === 0 ? 'left' : index === 1 ? 'bottom' : 'right'}`}>
                        <img src={project.imgUrl} alt={project.title} />
                        <div className="proj-txtx">
                          <h4>{project.title}</h4>
                          <span>{project.description}</span>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

