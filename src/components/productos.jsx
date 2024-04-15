import { useState } from 'react';
import { Container, Row, Col, FormControl, Button, Card } from 'react-bootstrap';
import ProductTitleImg from "../assets/ServicesTitle-img.png";

const ProductSection = () => {
  const products = [
    { id: 1, name: 'Producto 1', price: 10, imageUrl: '' },
    { id: 2, name: 'Producto 2', price: 20, imageUrl: '' },
    { id: 3, name: 'Producto 3', price: 30, imageUrl: '' },
    // Agrega más productos según sea necesario
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products); // Estado para los productos filtrados

  const handleSearch = () => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <section id='ProductSection'>
      <img id="ProductTitleImg" src={ProductTitleImg} alt="Imagen Principal" />
      <h1 className="image-title h1X text-slide-right">Descubre nuestros servicios</h1>
      <h2 className="image-subtitle h1X text-slide-left">Especializados en Zinguería</h2>
      <Container>
        <Row>
          <Col>
            <div className="mb-3">
              <FormControl
                placeholder="Buscar productos..."
                aria-label="Buscar productos"
                aria-describedby="basic-addon2"
                value={searchTerm}
                onChange={handleChange}
              />
              <div>
                <Button variant="outline-secondary" onClick={handleSearch}>Buscar</Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          {filteredProducts.map(product => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card style={{ marginBottom: '20px' }}>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Precio: ${product.price}</Card.Text>
                  <Button variant="primary">Ver Detalles</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProductSection;
