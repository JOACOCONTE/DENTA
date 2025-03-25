import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from 'react-icons/fa';
import Maps from "./maps/Maps";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Dónde Encontrarnos</h2>
              <p>Nuestra clínica dental está ubicada estratégicamente para ofrecerle la mejor atención y servicio.</p>
              <Row className="align-items-center">
                <Col md={6} className="mb-4 mb-md-0">
                  <div className="location-info">
                    <div className="info-item">
                      <FaMapMarkerAlt size={24} className="info-icon" />
                      <div>
                        <h5>Dirección</h5>
                        <p>Av. Odontología #123, Ciudad, Estado</p>
                      </div>
                    </div>
                    <div className="info-item">
                      <FaClock size={24} className="info-icon" />
                      <div>
                        <h5>Horario de Atención</h5>
                        <p>Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                        <p>Sábados: 9:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                    <div className="info-item">
                      <FaPhone size={24} className="info-icon" />
                      <div>
                        <h5>Teléfono</h5>
                        <p>(123) 456-7890</p>
                      </div>
                    </div>
                    <div className="info-item">
                      <FaEnvelope size={24} className="info-icon" />
                      <div>
                        <h5>Correo Electrónico</h5>
                        <p>contacto@duomecanico.com</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="map-container">
                    <Maps />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
