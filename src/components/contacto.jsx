import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <Container fluid id='contact-backImage'>
      <Row>
        <Col>
          <Card className="p-4 transparent-background">
            <div style={{ marginBottom: '25px',}}>
              <h2>Contactanos y solicitá cotización</h2>
              <h3>Esperamos tu consulta</h3>
            </div>
            <Form >
              <Form.Group controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control className='form-textArea' type="text" placeholder="Ingresa tu nombre" />
              </Form.Group>
              <Form.Group controlId="formPhoneNumber">
                <Form.Label>Número de teléfono</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu número de teléfono" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu email" />
              </Form.Group>
              <Form.Group controlId="formAddress">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu dirección" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Escribe tu mensaje aquí" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </Card>
        </Col>
        <Col>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678910111213!2dLONGITUDE!3dLATITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU5JzA1LjUiTiBMTEMnMjIuMCJX!5e0!3m2!1sen!2sus!4v1578335435861!5m2!1sen!2sus"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ borderRadius: '5px', maxHeight: '50%' }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
          <Card className='transparent-background' style={{ height: '40%', marginTop: '20px' }}>
            <Card.Body>
              <Card.Title>Información de Contacto</Card.Title>
              <Card.Text>
                <strong>Dirección:</strong> Calle Falsa 123, Berazachuzets<br />
                <strong>Email:</strong> ZingueriaPrimos@example.com<br />
                <strong>Teléfono:</strong> 4256-9985<br />
                <strong>WhatsApp:</strong> +54 11 3456 2789
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
