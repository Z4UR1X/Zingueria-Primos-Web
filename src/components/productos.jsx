import { useState } from 'react';
import { Container, Row, Col, FormControl, Button, Card } from 'react-bootstrap';
import ProductTitleImg from "../assets/ProductsTitle-img.png";

/* --> Imágenes de Productos <-- */
import productImg1 from '../assets/productos/producto1.png';
import productImg2 from '../assets/productos/producto2.png';
import productImg3 from '../assets/productos/producto3.png';
import productImg4 from '../assets/productos/producto4.png';

const ProductSection = () => {
  const products = [
    { id: 1, name: 'Babeta L Cierre Lateral Chapa Galvanizada', description: '', price: 7875, imageUrl: productImg1},
    { id: 2, name: 'Canaleta Media Caña Galvanizada', description: '', price: 5100, imageUrl: productImg2},
    { id: 3, name: 'Zingueria Canaleta Conversa Techo', description: '', price: 22430, imageUrl: productImg3},
    { id: 4, name: 'Babeta L Cierre Lateral Chapa Galvanizada', description: '', price: 7875, imageUrl: productImg4},
    { id: 5, name: 'Canaleta Media Caña Galvanizada', description: '', price: 20, imageUrl: productImg1},
    { id: 6, name: 'Zingueria Canaleta Conversa Techo', description: '', price: 22430, imageUrl: productImg2},
    { id: 7, name: 'Babeta L Cierre Lateral Chapa Galvanizada', description: '', price: 15550, imageUrl: productImg3},
    { id: 8, name: 'Canaleta Media Caña Galvanizada', description: '', price: 12300, imageUrl: productImg4},
    { id: 9, name: 'Zingueria Canaleta Conversa Techo', description: '', price: 45000, imageUrl: productImg1},
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products); 

  const handleSearch = () => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleProductClick = productId => {
    const clickedProduct = products.find(product => product.id === productId);
    setFilteredProducts([clickedProduct]);
  };

  return (
    <section id='ProductSection'>
      <img id="ProductTitleImg" src={ProductTitleImg} alt="Imagen de la sección productos"/>
        <div className='title-text-cont'>
          <h1 className="text-slide-right">Productos de excelente calidad</h1>
          <h2 className="text-slide-left">Construye con confianza</h2>
         </div>
      <Container>
        <Row style={{marginBottom: '25px'}}>
            <Col>
              <FormControl
                placeholder="Buscar productos..."
                aria-label="Buscar productos"
                aria-describedby="basic-addon2"
                value={searchTerm}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Button variant="outline-secondary" onClick={handleSearch}>Buscar</Button>
            </Col>
        </Row>
        <Row>
          <Card style={{width: '25vw', height: 'fit-content'}} id='products-col-list'>
          <Card.Title style={{textAlign: 'center', padding: '10px'}}>PRODUCTOS</Card.Title>
            <div id='custom-list'>
              {filteredProducts.map(product => (
                <a 
                  key={product.id} 
                  style={{width: '100%', padding: '10px 0 10px 10px', display: 'block'}}
                  onClick={() => handleProductClick(product.id)} // Agregar el controlador de eventos onClick
                >
                  {product.name}
                </a>
              ))}
            </div>
          </Card>
          <Col style={{maxWidth: '65vw', }}>
            <Row>
              {filteredProducts.map(product => (
                <Col key={product.id} xs={10} sm={3} md={3} lg={3}> 
                  <Card style={{ marginBottom: '20px' }} >
                    <Card.Img variant="top" src={product.imageUrl} />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <Card.Text>${product.price}</Card.Text>
                        <Button variant="primary">Ver Detalles</Button>
                      </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductSection;
