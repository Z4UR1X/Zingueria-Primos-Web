import { useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';
import '../global.css';

function NavbarComp() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar-main');
      const navbarLinks = document.querySelectorAll('.nav-link'); 
      navbarLinks.forEach(navbarLink => { 
        if (window.scrollY > 16 * window.innerHeight / 100) {
          navbar.classList.add('gradientEffect');
          navbarLink.classList.add('gradientEffect');
        } else {
          navbar.classList.remove('gradientEffect');
          navbarLink.classList.remove('gradientEffect');
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <Navbar id='navbar-main' fixed="top" expand="lg" className="bg-body-tertiary">
      <>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <a className='nav-anchor'><img id='nav-logo' src={logo} alt="Logo Zinguería Primos"/></a>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="nav-buttons-cont d-flex"> 
                <Nav.Link className="" href="#inicio">INICIO</Nav.Link>
                <Nav.Link className="" href="#servicios">SERVICIOS</Nav.Link>
                <Nav.Link className="" href="#productos">PRODUCTOS</Nav.Link>
                <Nav.Link className="" href="#contacto">CONTACTO</Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
      </>
    </Navbar>
  );
}

export default NavbarComp;
