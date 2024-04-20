/* import { Container, Image } from 'react-bootstrap'; */ /* <-- ACTIVAR DE SER NECESARIO */
import { useState } from "react";
import ServicesTitleImg from "../assets/ServicesTitle-img.png";

/* -- Importación de imágenes para cada Route -- */
import imagen0 from '../assets/img_0.jpg';
import imagen1 from '../assets/img_1.jpg';
import imagen2 from '../assets/img_2.jpg';
import imagen3 from '../assets/img_3.jpg';
import imagen4 from '../assets/img_4.jpg';
import imagen5 from '../assets/img_5.jpg';

const imgTitles = [
  "INSTALACIÓN DE CANALETAS",
  "AMPLIO CATÁLOGO EN STOCK",
  "REVESTIMIENTO DE ESTRUCTURAS METÁLICAS",
  "MANTENIMIENTO PREVENTIVO",
  "INSTALACIÓN DE CLARABOYAS",
  "FABRICACIÓN DE PIEZAS A MEDIDA"
];

const imgDescriptions = [
  "Nuestra instalación de canaletas garantiza un drenaje eficiente y duradero para tu hogar o negocio.",
  "Ofrecemos una amplia selección de opciones para satisfacer todas tus necesidades en cada proyecto.",
  "Nuestro servicio de revestimiento de estructuras metálicas garantiza una protección duradera y una apariencia impecable.",
  "El mantenimiento preventivo asegura una prolonga vida útil, evitando costosas reparaciones de daños por agua y corrosión.",
  "Con un toque de elegancia y funcionalidad a cualquier espacio, aumentando la eficiencia energética al reducir la iluminación artificial",
  "Desde Canaletas hasta accesorios personalizados, garantizamos que cada componente se ajuste perfectamente a las necesidades específicas de tu proyecto"
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="ServicesSection">
        <img id="ServicesTitleImg" src={ServicesTitleImg} alt="Imagen Principal" />
        <div className="title-text-cont">
          <h1 className="image-title h1-left text-slide-right">Descubre nuestros servicios</h1>
          <h2 className="image-subtitle h1-left text-slide-left">Especializados en Zinguería</h2>
        </div>
      <div className="album-container slide-to-top">
        {[...Array(6).keys()].map((index) => (
          <div key={index} className="album-item">
            <div className="image-container">
              <img 
                src={
                  index === 0 ? imagen0 :
                  index === 1 ? imagen1 :
                  index === 2 ? imagen2 :
                  index === 3 ? imagen3 :
                  index === 4 ? imagen4 :
                  index === 5 ? imagen5 : null
                } 
                alt={`Imagen ${index + 1}`} 
                className="album-image"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            </div>
            <div className="image-text">{hoveredIndex === index ? imgDescriptions[index] : imgTitles[index] }</div>
          </div>
        ))}
      </div>
        <div className="cotizacionButton">
          <a className="cotizacionAnchor" href="#contacto">PEDÍ COTIZACIÓN <span>⮞</span></a>
        </div>
    </section>
  );
}

export default ServicesSection;
