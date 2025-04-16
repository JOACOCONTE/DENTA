import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");
    try {
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      let result = await response.json();
      setStatus(result);
      setButtonText("Enviar");
      if (result.code === 200) {
        setFormDetails(formInitialDetails);
      }
    } catch (error) {
      setStatus({ success: false, message: 'Error al enviar el mensaje. Por favor, intente nuevamente.' });
      setButtonText("Enviar");
    }
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <div className="contact-info">
              <h2>¿Necesitás mantenimiento para tus equipos?</h2>
              <p>Escribinos y un especialista te asesorará sin compromiso.</p>
              <div className="contact-details">
                <div className="info-item">
                  <FaPhone className="info-icon" size={24} />
                  <div>
                    <h5>Teléfono</h5>
                    <p>(123) 456-7890</p>
                  </div>
                </div>
                <div className="info-item">
                  <FaEnvelope className="info-icon" size={24} />
                  <div>
                    <h5>Email</h5>
                    <p>contacto@dentaservice.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <FaClock className="info-icon" size={24} />
                  <div>
                    <h5>Horario de Atención</h5>
                    <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="social-links">
                <a href="https://instagram.com/dentaservice" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={30} />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col xs={12} sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="Nombre"
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                  />
                </Col>
                <Col xs={12} sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Apellido"
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                  />
                </Col>
                <Col xs={12} sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                  />
                </Col>
                <Col xs={12} sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Teléfono"
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                  />
                </Col>
                <Col xs={12} className="px-1">
                  <textarea
                    row="6"
                    value={formDetails.message}
                    placeholder="Mensaje"
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                  ></textarea>
                </Col>
                <Col xs={12} className="px-1">
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
              {status.message && (
                <Col>
                  <p className={status.success === false ? "danger" : "success"}>
                    {status.message}
                  </p>
                </Col>
              )}
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
