import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import headerImg from "../assets/img/Denta op-8.png";
import bgImage from "../assets/img/1-100.jpg";
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  return (
    <section className="banner" id="home" style={{
      position: 'relative',
    }}>
      {/* Imagen de fondo tenue */}
      <div className="banner-background"></div>
      
      {/* Elementos decorativos */}
      <div className="shape-1"></div>
      <div className="shape-2"></div>
      <div className="shape-3"></div>
      <div className="shape-4"></div>
      
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <div className="banner-img-wrapper">
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <div className="banner-content">
              <span className="tagline">Bienvenido a Denta Service</span>
              <h1>
                Responsabilidad y Transparencia
                <br />
                <span className="wrap">Servicio Técnico Ventas y Diseño</span>
              </h1>
              <p>
                Extendé la vida útil de tu equipo y garantizá un rendimiento óptimo con nuestros servicios especializados en máquinas odontológicas.
              </p>
              <button onClick={() => window.open("https://wa.me/+5493525312516", "_blank")}>
                Solicitar Servicio <FaWhatsapp size={25} />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


