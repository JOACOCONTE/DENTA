import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { FaPaperPlane, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Enviar");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: 'Mensaje enviado con éxito' });
    } else {
      setStatus({ success: false, message: 'Algo salió mal, por favor intente de nuevo más tarde.' });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contáctenos</h2>
                  <p>Estamos a su disposición para atender cualquier consulta, solicitud de presupuesto o para programar una cita. Complete el formulario y nos pondremos en contacto con usted lo antes posible.</p>
                  
                  <div className="contact-info">
                    <div className="info-item">
                      <FaPhone className="info-icon" />
                      <div>
                        <h5>Teléfono</h5>
                        <p>(123) 456-7890</p>
                      </div>
                    </div>
                    
                    <div className="info-item">
                      <FaMapMarkerAlt className="info-icon" />
                      <div>
                        <h5>Dirección</h5>
                        <p>Av. Odontología #123, Ciudad, Estado</p>
                      </div>
                    </div>
                    
                    <div className="info-item">
                      <FaClock className="info-icon" />
                      <div>
                        <h5>Horario</h5>
                        <p>Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                        <p>Sábados: 9:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="Nombre" onChange={(e) => onFormUpdate('firstName', e.target.value)} required />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Apellido" onChange={(e) => onFormUpdate('lastName', e.target.value)} required />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Correo electrónico" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Teléfono" onChange={(e) => onFormUpdate('phone', e.target.value)} required />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Mensaje" onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                        <button type="submit"><FaPaperPlane /> {buttonText}</button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
