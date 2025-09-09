import { Container, Row, Col } from "react-bootstrap";
import { FaTools, FaCog, FaWrench, FaCheckCircle, FaClock } from "react-icons/fa";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row className="skill-content-row">
          <Col xs={12} lg={5}>
            <div className="skill-bx fade-in skill-intro" >
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={require('../assets/img/AJ Logo.png')} alt="Logo taller" style={{maxWidth: '120px', marginBottom: '16px'}} />
              </div>
              <h2 style={{ textAlign: 'center' }}>Compromiso con la excelencia en orfebrería</h2>
              <p style={{ textAlign: 'center' }}>
                En nuestro taller, creamos, restauramos y reparamos joyas con dedicación y pasión por el oficio. Cada pieza es tratada como única, cuidando cada detalle y respetando su historia. Ofrecemos atención personalizada para que cada cliente encuentre la solución ideal para sus joyas.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={require('../assets/img/anillos/4.jpg')} alt="Trabajo de orfebrería" style={{width: '45%', borderRadius: '8px', marginTop: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.10)'}} />
              </div>
            </div>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};
