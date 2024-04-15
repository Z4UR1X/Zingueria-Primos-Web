/* import { useState } from 'react' */
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/navbar';
import Footer from './components/footer';
import ServicesSection from './components/servicios';
import ProductSection from './components/productos';

function App() {

  return (
    <>
      <NavbarComp/>
      <ServicesSection/>
      <ProductSection/>
      <Footer/>
    </>
  )
}

export default App
