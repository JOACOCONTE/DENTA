import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

// Import the new repair images
import repairImg1 from "../assets/img/Reparacion equipo dental.jpg";
import repairImg2 from "../assets/img/Reparacion de Rodamientos Dentales.jpg";
import repairImg3 from "../assets/img/Reparacion de Compresores Dentales.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Reparación de Equipos Dentales",
      description: "Restauramos y renovamos equipos dentales completos con diagnóstico preciso y soluciones eficientes para extender la vida útil de su inversión.",
      imgUrl: repairImg1,
    },
    {
      title: "Reparación de Rodamientos Dentales",
      description: "Especialistas en sustitución y reparación de rodamientos para piezas de mano y equipos rotativos con precisión milimétrica.",
      imgUrl: repairImg2,
    },
    {
      title: "Reparación de Compresores Dentales",
      description: "Servicio integral para compresores dentales incluyendo mantenimiento preventivo y correctivo para garantizar un flujo de aire constante y limpio.",
      imgUrl: repairImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="project-bx fade-in">
              <h2>Nuestros Servicios 🔍⚙️</h2>
              <p>
                Ofrecemos una amplia gama de servicios de reparación para equipos odontológicos, 
                garantizando calidad, precisión y tiempos de respuesta óptimos para minimizar
                el tiempo de inactividad de su consulta.
              </p>
              <div className="fade-in-delay">
                <Row className="equal-height-cards">
                  {projects.map((project, index) => (
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

