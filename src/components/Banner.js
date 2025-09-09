import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import headerImg from "../assets/img/PNG Arte en Joyas.png";
import bgImage from "../assets/img/Portada.jpg";
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  return (
    <section className="banner" id="home" style={{
      position: 'relative',
    }}>
      {/* Imagen de fondo tenue */}
      <div className="banner-background"></div>
      
     
      
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <Row className="align-items-center">
          
          <Col xs={12} md={6} xl={7}>
            <div className="banner-content">
              <span className="tagline">Bienvenido a Arte en Joyas</span>
              <h1>
                Orfebrería y Reparación de Joyas
                <br />
                <span className="wrap">Diseños Artesanales</span>
              </h1>
              <p>
                Extendé la vida útil de tus joyas y garantizá un rendimiento óptimo con nuestros servicios especializados en orfebrería.
              </p>
              <button onClick={() => window.open("https://wa.me/+5493525306926", "_blank")}>
                Consultar ahora <FaWhatsapp size={25} />
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="banner-img-wrapper">
              <img src={headerImg} alt="Logo Arte en Joyas" style={{maxWidth: '650px', boxShadow: '0 4px 16px rgba(0,0,0,0.15)'}} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


