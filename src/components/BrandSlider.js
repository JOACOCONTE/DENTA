
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

export const BrandSlider = () => {
  return (
    <section className="location-section" id="ubicacion">
      <div className="location-block fade-in-block">
        <Container>
          <Row className="location-row">
            <Col md={6} className="location-info">
              <h2 className="location-title">¿Dónde estamos?</h2>
              <p className="location-address">
                <strong>Dirección:</strong> Ing. Olmos 183, X5220 Jesus María, Córdoba
              </p>
              <div className="location-hours">
                <h4>Horarios de atención</h4>
                <ul>
                  <li><strong>Lunes a Sábado:</strong> 9:00 - 12:30 / 17:00 - 20:30</li>
                  <li><strong>Domingos:</strong> Cerrado</li>
                </ul>
              </div>
              <p className="location-contact">
                <strong>Teléfono:</strong> <a href="tel:+5493525306926">+54 9 3525 306926</a><br/>
                <strong>Email:</strong> <a href="mailto:ruben_badia22@gmail.com">ruben_badia22@gmail.com</a>
              </p>
            </Col>
            <Col md={6} className="location-map">
              <div className="map-embed">
                <iframe
                  title="Mapa ubicación Arte en Joyas"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.123456789!2d-64.100000!3d-30.981111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432e7e7e7e7e7e7%3A0xabcdefabcdefabcd!2sIng.%20Olmos%20183%2C%20Jes%C3%BAs%20Mar%C3%ADa%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1694012345678!5m2!1ses!2sar"
                  width="100%"
                  height="320"
                  style={{ border: 0, borderRadius: '16px', boxShadow: '0 8px 32px rgba(61,128,104,0.15)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};