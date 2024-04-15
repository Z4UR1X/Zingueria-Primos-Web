import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer text-light py-4">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h5>Información de contacto</h5>
            <p>Dirección: Calle Falsa 123, Berazachuzets</p>
            <p>Teléfono: (+54) 11 2456-7890</p>
            <p>Email: ZingueriaPrimos@example.com</p>
          </Col>
          <Col xs={12} md={6}>
            <ul className='footer-ul'>
              <li><a href="#home">INICIO</a></li>
              <li><a href="#about">SERVICIOS</a></li>
              <li><a href="#services">PRODUCTOS</a></li>
              <li><a href="#contact">CONTACTO</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <hr className="bg-light" />
            <p className="text-center">© {new Date().getFullYear()} Zinguería Primos. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
