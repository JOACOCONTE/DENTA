import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Denta Vivido logo 1-8.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start mb-4 mb-md-0">
            <img src={logo} alt="Denta Vivido" />
            <p>Somos una clínica dental comprometida con la salud bucal y la satisfacción del paciente. Desde 2010 brindando atención odontológica de calidad para toda la familia.</p>
          </Col>
          <Col md={4} className="text-center mb-4 mb-md-0">
            <h3 className="mb-4">Contacto</h3>
            <div className="footer-contact">
              <p><FaPhone className="me-2" /> (123) 456-7890</p>
              <p><FaEnvelope className="me-2" /> contacto@dentavivido.com</p>
              <p><FaMapMarkerAlt className="me-2" /> Av. Odontología #123, Ciudad</p>
            </div>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <h3 className="mb-4">Síguenos</h3>
            <div className="social-icon">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaWhatsapp /></a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-5">
            <p>&copy; {new Date().getFullYear()} Denta Vivido. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
