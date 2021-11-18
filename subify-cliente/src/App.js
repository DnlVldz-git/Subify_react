import React, {Component, useState} from "react";
import { Routes, Route, Link} from 'react-router-dom';
import './App.css';

import Inicio from "./components/inicio.component.js";
import Registro from "./components/registro.component";
import Ingresar from "./components/ingresar.component";
import GaleriaFotos from "./components/galeriaFotos.component";
import GaleriaVideos from "./components/galeriaVideos.component";
import Contacto from "./components/contacto.component";

import "bootstrap/dist/css/bootstrap.min.css"

import logo from './assets/logo.png';

function App() {
  const [active, setActive] = useState(false);

  const toggle = () =>{
    setActive(!active);
  }

  return (
    <div className="App">
      
      <div className="contenido" > 
        <div id="navBar">
          <div id="top">
            <div id="logo">
              <a ><Link to={"/"}><img className="logo" src={logo} alt="logo"/></Link></a>
            </div>									
            <ul>												
              <li><a><Link to={"/registro"}>REGISTRO</Link></a></li>
              <li><a ><Link to={"/contacto"}>CONTACTO</Link></a></li>
              <li><a ><Link to={"/ingresar"}>INGRESAR</Link></a></li>
            </ul>																			
          </div>
          <div id="linea1"></div>
          <div id="linea2"></div>
          <div id="linea3"></div>
          <div id="linea4"></div>	
        </div>   
        
        <div className="container mt-3">
          <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/registro' element={<Registro/>} />
            <Route path='/ingresar' element={<Ingresar/>} />
            <Route path='/galeriaFotos' element={<GaleriaFotos/>} />
            <Route path='/galeriaVideos' element={<GaleriaVideos/>} />
            <Route path='/contacto' element={<Contacto/>} />
            
          </Routes>      
        </div>  
      </div>
      <footer>
        <div id="logo_footer">
          <a ><Link to={"/"}><img className="logo" src={logo} alt="logo"/></Link></a>
        </div>
        <p> Todos los derechos reservados. Subify 2021</p>
        <button id="boton_galeriaFotos"><a><Link to={"/galeriaFotos"}>GALERÍA FOTOS</Link></a></button>
        <button id="boton_galeriaVideos"><a ><Link to={"/galeriaVideos"}>GALERÍA VIDEOS</Link></a></button>
		  </footer>            
    </div>
  );
}      
export default App;
