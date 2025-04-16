import { Container, Row, Col } from "react-bootstrap";
import { FaTools, FaCog, FaWrench, FaCheckCircle, FaClock } from "react-icons/fa";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row className="skill-content-row">
          <Col xs={12} lg={5}>
            <div className="skill-bx fade-in skill-intro">
              <h2>Compromiso con la excelencia en mantenimiento dental</h2>
              <p>
                En Denta Service nos especializamos en el mantenimiento y reparación de máquinas odontológicas. 
                Sabemos que el buen funcionamiento de tu equipo es clave para brindar un servicio de calidad a tus pacientes. 
                Por eso, trabajamos con rapidez, precisión y garantía en cada servicio.
              </p>
            </div>
          </Col>
          <Col xs={12} lg={7}>
            <div className="skill-bx fade-in-delay skill-features">
              <h2>¿Por qué elegir Denta Service? ✅</h2>
              <Row>
                <Col xs={12} md={6}>
                  <div className="info-item slide-in-left">
                    <FaTools className="info-icon" size={30} />
                    <div>
                      <h5>Aumento de la vida útil</h5>
                      <p>Extendemos la durabilidad de tus equipos odontológicos con mantenimiento profesional.</p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="info-item slide-in-right">
                    <FaCog className="info-icon" size={30} />
                    <div>
                      <h5>Reducción de costos</h5>
                      <p>Previene fallas inesperadas y reduce gastos de reparación con mantenimiento preventivo.</p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="info-item slide-in-left">
                    <FaWrench className="info-icon" size={30} />
                    <div>
                      <h5>Servicio especializado</h5>
                      <p>Técnicos expertos en equipos odontológicos con años de experiencia.</p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="info-item slide-in-right">
                    <FaCheckCircle className="info-icon" size={30} />
                    <div>
                      <h5>Atención personalizada</h5>
                      <p>Asesoramiento gratuito y seguimiento personalizado de cada caso.</p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="info-item slide-in-bottom">
                    <FaClock className="info-icon" size={30} />
                    <div>
                      <h5>Servicio rápido</h5>
                      <p>Respuesta inmediata y tiempos de reparación optimizados.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
