import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Introduccion from './components/Introduccion';
import First from './components/First';
import Second from './components/Second';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Aplicacion1 from './components/Aplicacion1';
import Aplicacion2 from './components/Aplicacion2';
import Aplicacion3 from './components/Aplicacion3';
import Aplicacion4 from './components/Aplicacion4';
import Aplicacion5 from './components/Aplicacion5';

function App() {
  return (
    <>
       <div id = 'wrapper'>
      <Header /> 
      <Nav />
      <div id = 'main'>
      <Introduccion />
      <First />
      <Second />
      <Aplicacion1 />
      <Aplicacion2 />
      <Aplicacion3 />
      <Aplicacion4 />
      <Aplicacion5 />
      <Cta />
      </div>
      <Footer />
      </div>
    </> 
  );
}

export default App;
