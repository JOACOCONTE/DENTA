import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FaSyringe, FaStethoscope, FaHospital, FaUserMd } from 'react-icons/fa';
import nardiLogo from "../assets/img/brands/10001.jpg";

export const BrandSlider = () => {
  // Lista de las 5 principales marcas con iconos y nombres
  const brands = [
    { 
      image: nardiLogo, 
      name: "Nardi Herrero", 
      description: "Especialistas en equipamiento odontológico integral",
      isImage: true
    },
    { 
      icon: <FaSyringe size={80} />, 
      name: "Grimberg Dentales", 
      description: "Líder en insumos y materiales dentales de alta calidad",
      isImage: false
    },
    { 
      icon: <FaStethoscope size={80} />, 
      name: "Suizo Argentina", 
      description: "Tecnología e innovación en instrumental médico-odontológico",
      isImage: false
    },
    { 
      icon: <FaHospital size={80} />, 
      name: "Fadent", 
      description: "Soluciones completas para clínicas odontológicas",
      isImage: false
    },
    { 
      icon: <FaUserMd size={80} />, 
      name: "Dental Medrano", 
      description: "Pioneros en materiales dentales de precisión",
      isImage: false
    }
  ];

  return (
    <section className="brands-section" id="brands">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <div className="fade-in">
              <h2>Marcas de Confianza</h2>
              <p className="section-subtitle">
                Trabajamos con los mejores distribuidores del mercado odontológico en Argentina para brindar calidad y confianza.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="brand-cards-row">
          {brands.map((brand, index) => (
            <Col xs={12} sm={6} md={4} lg={4} xl={2} className="mb-4 brand-card-col" key={index}>
              <div className={`brand-card fade-in-delay ${index === 0 ? 'nardi-card' : ''}`}>
                <div className="brand-card-icon">
                  {brand.isImage ? (
                    <img src={brand.image} alt={brand.name} className="brand-logo-img" />
                  ) : (
                    brand.icon
                  )}
                </div>
                <h3 className="brand-card-title">{brand.name}</h3>
                <p className="brand-card-description">{brand.description}</p>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="cta-row">
          <Col md={12} className="text-center">
            <div className="fade-in cta-container">
              <h3>¿Necesitas un servicio técnico de confianza?</h3>
              <p>Estamos listos para brindar soluciones profesionales a tus equipos odontológicos en Córdoba, Argentina</p>
              <a href="https://wa.me/+5493525312516" className="cta-button" target="_blank" rel="noopener noreferrer">
                <span>Contáctanos Ahora</span>
                <div className="icon">
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" fill="currentColor"></path>
                  </svg>
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}; 