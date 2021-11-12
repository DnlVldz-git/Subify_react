import { Component } from "react";
import '../styles/inicio.css';

export default class Inicio extends Component{
    render(){
        return(            
            <div id="rectangulo_middle">            
                <p id="letras_grandes">
                <span className="s" >S</span>
                <span className="u" >U</span>
                <span className="b" >B</span>
                <span className="i" >I</span>
                <span className="f" >F</span>
                <span className="y" >Y</span>
                </p>
                <p id="eslogan">Administra todas tus suscripciones desde un lugar. </p>
            </div>          
        );
    };
}
