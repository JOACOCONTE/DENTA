import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Denta op-8.png";
import { FaWhatsapp } from 'react-icons/fa';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Sonrisas", "Dientes", "Su Salud Bucal" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Expertos en Odontología</span>
                <h1>Cuidamos y mejoramos <span className="txt-rotate" dataPeriod="1000"><span className="wrap">{text}</span></span></h1>
                <p>Bienvenido a Denta Vivido, su clínica dental de confianza. Ofrecemos servicios profesionales para el cuidado y tratamiento de su salud bucal. Con odontólogos expertos y tecnología de vanguardia, garantizamos soluciones efectivas para una sonrisa radiante y saludable.</p>
                <button onClick={() => window.open('https://wa.me/+5491122334455', '_blank')}>
                  <FaWhatsapp /> Contactar por WhatsApp
                </button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Taller Mecánico"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row> 
      </Container>
    </section>
  )
}


