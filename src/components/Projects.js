import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpeg";
import projImg2 from "../assets/img/project-img2.jpeg";
import projImg3 from "../assets/img/project-img3.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const autoProjects = [
    {
      title: "Auto Proyecto 1",
      description: "Descripción del proyecto de autos 1",
      imgUrl: projImg1,
    },
    {
      title: "Auto Proyecto 2",
      description: "Descripción del proyecto de autos 2",
      imgUrl: projImg2,
    },
    {
      title: "Auto Proyecto 3",
      description: "Descripción del proyecto de autos 3",
      imgUrl: projImg3,
    },
    {
      title: "Auto Proyecto 4",
      description: "Descripción del proyecto de autos 3",
      imgUrl: projImg3,
    },
    {
      title: "Auto Proyecto 5",
      description: "Descripción del proyecto de autos 3",
      imgUrl: projImg3,
    },
    {
      title: "Auto Proyecto 6",
      description: "Descripción del proyecto de autos 3",
      imgUrl: projImg3,
    },
  ];

  const motoProjects = [
    {
      title: "Moto Proyecto 1",
      description: "nanex",
      imgUrl: projImg1,
    },
    {
      title: "Moto Proyecto 2",
      description: "Descripción del proyecto de motos 2",
      imgUrl: projImg2,
    },
    {
      title: "Moto Proyecto 3",
      description: "Descripción del proyecto de motos 3",
      imgUrl: projImg3,
    },
    {
      title: "Moto Proyecto 4",
      description: "Descripción del proyecto de motos 3",
      imgUrl: projImg2,
    },
    {
      title: "Moto Proyecto 5",
      description: "Descripción del proyecto de motos 3",
      imgUrl: projImg1,
    },
    {
      title: "Moto Proyecto 6",
      description: "Descripción del proyecto de motos 3",
      imgUrl: projImg3,
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
                <h2>NOS DEDICAMOS A TODO</h2>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Autos</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                      <Nav.Link eventKey="third">Motos</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          autoProjects.map((project, index) => {
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
                          motoProjects.map((project, index) => {
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
