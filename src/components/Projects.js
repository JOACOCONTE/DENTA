import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Usando imágenes disponibles en el proyecto
import projImg1 from "../assets/img/project-img1.jpeg";
import projImg2 from "../assets/img/project-img2.jpeg";
import projImg3 from "../assets/img/project-img3.jpeg";
import dentaOp8 from "../assets/img/Denta op-8.png";
import bannerBg from "../assets/img/banner-bg.png";
import logoImg from "../assets/img/Denta Vivido logo 1-8.png";

export const Projects = () => {
  const autosProjects = [
    {
      title: "Limpieza Dental",
      description: "Eliminación del sarro y manchas superficiales para mantener sus dientes limpios y saludables.",
      imgUrl: projImg1,
    },
    {
      title: "Blanqueamiento Dental",
      description: "Tratamientos de última generación para conseguir una sonrisa más blanca y brillante.",
      imgUrl: projImg2,
    },
    {
      title: "Empastes Estéticos",
      description: "Reparación de caries con materiales del color de sus dientes para una apariencia natural.",
      imgUrl: projImg3,
    },
    {
      title: "Ortodoncia",
      description: "Alineación y corrección de la posición de los dientes para mejorar su mordida y estética.",
      imgUrl: projImg1,
    },
    {
      title: "Prótesis Dentales",
      description: "Soluciones para reemplazar dientes perdidos y recuperar su función y estética.",
      imgUrl: projImg2,
    },
    {
      title: "Periodoncia",
      description: "Tratamiento y prevención de enfermedades de las encías para una boca saludable.",
      imgUrl: projImg3,
    },
  ];

  const motosProjects = [
    {
      title: "Odontopediatría",
      description: "Atención especializada para niños, con un ambiente amigable y tratamientos adaptados.",
      imgUrl: dentaOp8,
    },
    {
      title: "Endodoncia",
      description: "Tratamiento de conducto con las técnicas más avanzadas para eliminar el dolor y salvar el diente.",
      imgUrl: projImg1,
    },
    {
      title: "Implantes Dentales",
      description: "Sustitución permanente de raíces dentales para una sonrisa completa y funcional.",
      imgUrl: projImg2,
    },
    {
      title: "Cirugía Oral",
      description: "Procedimientos quirúrgicos realizados con máxima precisión y mínimo tiempo de recuperación.",
      imgUrl: projImg3,
    },
  ];

  const especialidadesProjects = [
    {
      title: "Estética Dental",
      description: "Procedimientos para mejorar la apariencia de su sonrisa con resultados naturales.",
      imgUrl: bannerBg,
    },
    {
      title: "Radiografía Digital",
      description: "Diagnóstico preciso con menor radiación y resultados inmediatos.",
      imgUrl: projImg2,
    },
    {
      title: "Sedación Consciente",
      description: "Técnicas de relajación para pacientes con ansiedad dental durante los tratamientos.",
      imgUrl: projImg3,
    },
    {
      title: "Rehabilitación Oral",
      description: "Restauración completa de la función y estética de toda su dentadura.",
      imgUrl: logoImg,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Nuestros Servicios</h2>
                <p>En Denta Vivido ofrecemos una amplia gama de servicios para el cuidado de su salud bucal. Contamos con especialistas y tecnología de vanguardia para garantizar tratamientos de alta calidad.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tratamientos Generales</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Especialidades</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Servicios Premium</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          autosProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          motosProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          especialidadesProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}

