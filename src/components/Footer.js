import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp, FaInstagram, FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaFacebook } from "react-icons/fa";
import logoImg from "../assets/img/PNG Arte en Joyas.png";
import { PopUp } from "./PopUp";

export const Footer = () => {
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);
  const [showTermsPopup, setShowTermsPopup] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [showPowerPopup, setShowPowerPopup] = useState(false);
  
  const privacyContent = (
    <div>
      <p>
        En Arte en Joyas, valoramos la confianza de nuestros clientes.  
        La información personal se utiliza únicamente para brindar una mejor 
        experiencia en la adquisición y diseño de nuestras joyas.
      </p>
      <h5>Información que recopilamos:</h5>
      <ul>
        <li>Datos de contacto</li>
        <li>Preferencias de diseño y estilo</li>
        <li>Historial de compras</li>
      </ul>
      <p>No compartimos su información con terceros sin su autorización.</p>
    </div>

  );
  
  const termsContent = (
    <div>
      <p>
        Al utilizar nuestros servicios, acepta los siguientes términos:
      </p>
      <h5>Garantía:</h5>
      <p>
        Todos nuestros servicios tienen garantía de 3 meses que cubre defectos 
        en mano de obra o componentes.
      </p>
      <h5>Pagos:</h5>
      <p>
        Trabajamos sin Seña.
      </p>
    </div>
  );
  
  const contactContent = (
    <div>
      <div className="popup-contact-item">
        <FaPhone size={18} style={{ color: "var(--primary)", marginRight: "10px" }} />
        <div>
          <h5>Teléfono</h5>
          <p>(+54) 9 3525 30-6926</p>
        </div>
      </div>
      <div className="popup-contact-item">
        <FaEnvelope size={18} style={{ color: "var(--primary)", marginRight: "10px" }} />
        <div>
          <h5>Email</h5>
          <p>ruben_badia22@gmail.com</p>
        </div>
      </div>
      <div className="popup-contact-item">
        <FaMapMarkerAlt size={18} style={{ color: "var(--primary)", marginRight: "10px" }} />
        <div>
          <h5>Dirección</h5>
          <p>Ing.Olmos 183, Jesus Maria,Córdoba, Argentina</p>
        </div>
      </div>
      <div className="popup-contact-item">
        <FaWhatsapp size={18} style={{ color: "var(--primary)", marginRight: "10px" }} />
        <div>
          <h5>WhatsApp</h5>
          <p>(+54) 9 3525 30-6926</p>
        </div>
      </div>
    </div>
  );

  const powerContent = (
    <div>
      <h5>LinkedIn</h5>
      <a href="https://www.linkedin.com/in/joaquinconte" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", fontWeight: "bold" }}>
        www.linkedin.com/in/joaquinconte
      </a>
    </div>
  );

  return (
    <footer className="footer">
      <div className="footer-top">
        <Container>
          <Row className="align-items-start">
            <Col xs={12} sm={6} md={4} className="footer-info">
              <div className="footer-logo">
                <img src={logoImg} alt="Denta Service Logo" />
              </div>
              <p className="footer-description">
                Arte en Joyas es tu taller de confianza para la creación, restauración y reparación de joyas. Nos comprometemos con la excelencia, el cuidado y la satisfacción de nuestros clientes.
              </p>
              <div className="social-links">
                <a href="https://instagram.com/arteenjoyasrb" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com/elorfebre.rb?locale=es_LA" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaFacebook style={{ fontSize: "1.5em", color: "#e1ebec" }} />
                </a>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} className="footer-contact">
              <h4>Información de Contacto</h4>
              <div className="contact-info">
                <div className="info-item">
                  <FaPhone className="info-icon" />
                  <div className="info-content">
                    <h5>Teléfono</h5>
                    <p>(+54) 9 3525 30-6926</p>
                  </div>
                </div>
                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <div className="info-content">
                    <h5>Email</h5>
                    <p>ruben_badia22@hotmail.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <div className="info-content">
                    <h5>Dirección</h5>
                    <p>Ing. Olmos 183, Jesus María, Córdoba, Argentina</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} className="footer-hours">
              <h4>Horario de Atención</h4>
              <div className="hours-info">
                <div className="info-item">
                  <FaClock className="info-icon" />
                  <div className="info-content">
                    <div className="schedule-item">
                      <span>Lunes a Sábado </span>
                      <span> 9:00 - 12:30 / 17:00 - 20:30</span>
                    </div>
                    <div className="schedule-item">
                      <span>Domingos</span>
                      <span>Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="emergency-service">
                <h5>¿Consultas urgentes?</h5>
                <a href="https://wa.me/+5493525306926" className="emergency-button">
                  <FaWhatsapp /> WhatsApp directo
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="footer-copyright">
                <p>© {new Date().getFullYear()} Arte en Joyas. Todos los derechos reservados.</p>
                <div className="footer-links">
                  <a href="#privacy" onClick={(e) => { e.preventDefault(); setShowPrivacyPopup(true); }}>Privacidad</a>
                  <a href="#terms" onClick={(e) => { e.preventDefault(); setShowTermsPopup(true); }}>Términos</a>
                  <a href="#contact" onClick={(e) => { e.preventDefault(); setShowContactPopup(true); }}>Contacto</a>
                  <a href="#power" onClick={(e) => { e.preventDefault(); setShowPowerPopup(true); }}>Power by Joaquín Conte</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Popups */}
      <PopUp 
        show={showPrivacyPopup} 
        handleClose={() => setShowPrivacyPopup(false)} 
        title="Política de Privacidad" 
        content={privacyContent} 
      />
      
      <PopUp 
        show={showTermsPopup} 
        handleClose={() => setShowTermsPopup(false)} 
        title="Términos y Condiciones" 
        content={termsContent} 
      />
      
      <PopUp 
        show={showContactPopup} 
        handleClose={() => setShowContactPopup(false)} 
        title="Contáctanos" 
        content={contactContent} 
      />
      
      <PopUp 
        show={showPowerPopup} 
        handleClose={() => setShowPowerPopup(false)} 
        title="Power by Joaquín Conte" 
        content={powerContent} 
      />
    </footer>
  );
};
