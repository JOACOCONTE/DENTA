import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp, FaInstagram, FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import logoImg from "../assets/img/Denta Vivido logo 1-8.png";
import { PopUp } from "./PopUp";

export const Footer = () => {
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);
  const [showTermsPopup, setShowTermsPopup] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  
  const privacyContent = (
    <div>
      <p>
        En Denta Service, protegemos la privacidad de nuestros clientes. 
        La información personal se utiliza únicamente para mejorar 
        nuestros servicios.
      </p>
      <h5>Información que recopilamos:</h5>
      <ul>
        <li>Datos de contacto</li>
        <li>Información sobre equipos</li>
        <li>Registros de servicios</li>
      </ul>
      <p>No compartimos su información con terceros sin su consentimiento.</p>
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
        Se requiere un pago del 50% al iniciar el servicio y el saldo restante al completar 
        la reparación.
      </p>
    </div>
  );
  
  const contactContent = (
    <div>
      <div className="popup-contact-item">
        <FaPhone size={18} style={{ color: "var(--primary)", marginRight: "10px" }} />
        <div>
          <h5>Teléfono</h5>
          <p>(+54) 9 3525 40-4645</p>
        </div>
      </div>
      <div className="popup-contact-item">
        <FaEnvelope size={18} style={{ color: "var(--primary)", marginRight: "10px" }} />
        <div>
          <h5>Email</h5>
          <p>contacto@dentaservice.com.ar</p>
        </div>
      </div>
      <div className="popup-contact-item">
        <FaMapMarkerAlt size={18} style={{ color: "var(--primary)", marginRight: "10px" }} />
        <div>
          <h5>Dirección</h5>
          <p>Córdoba, Argentina</p>
        </div>
      </div>
      <div className="popup-contact-item">
        <FaWhatsapp size={18} style={{ color: "var(--primary)", marginRight: "10px" }} />
        <div>
          <h5>WhatsApp</h5>
          <p>(+54) 9 3525 40-4645</p>
        </div>
      </div>
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
                Denta Service es tu aliado confiable en el mantenimiento y reparación 
                de equipos odontológicos. Nos comprometemos con la excelencia y la 
                satisfacción de nuestros clientes.
              </p>
              <div className="social-links">
                <a href="https://instagram.com/dentaservicejm" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaInstagram />
                </a>
                <a href="https://wa.me/+5493525312516" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaWhatsapp />
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
                    <p>(+54) 9 3525 40-4645</p>
                  </div>
                </div>
                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <div className="info-content">
                    <h5>Email</h5>
                    <p>contacto@dentaservice.com.ar</p>
                  </div>
                </div>
                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <div className="info-content">
                    <h5>Dirección</h5>
                    <p>Córdoba, Argentina</p>
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
                      <span>Lunes a Viernes</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="schedule-item">
                      <span>Sábados</span>
                      <span>9:00 AM - 1:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="emergency-service">
                <h5>¿Emergencias?</h5>
                <a href="https://wa.me/+5493525312516" className="emergency-button">
                  <FaWhatsapp /> Contacto 24/7
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
                <p>© {new Date().getFullYear()} Denta Service. Todos los derechos reservados.</p>
                <div className="footer-links">
                  <a href="#privacy" onClick={(e) => { e.preventDefault(); setShowPrivacyPopup(true); }}>Privacidad</a>
                  <a href="#terms" onClick={(e) => { e.preventDefault(); setShowTermsPopup(true); }}>Términos</a>
                  <a href="#contact" onClick={(e) => { e.preventDefault(); setShowContactPopup(true); }}>Contacto</a>
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
    </footer>
  );
};
