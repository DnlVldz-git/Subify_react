import { Component } from "react";
import '../styles/registro.css';

export default class Registro extends Component{
    render(){
        return(
            <div id="rectangulo_middle_registro">
                <h1>REGISTRO</h1>
                <div id="input_1">
                    <div>
                        <h2>CORREO:</h2>
                        <input id="email" class="texto" type="email" name="correo" placeholder="ejemplo@hotmail.com"/>
                    </div>
                    <div>
                        <h2>NOMBRE:</h2>
                        <input id ="nombre" class="texto" type="text" name="nombre" placeholder="Su nombre"/>
                    </div>
                    <div>
                        <h2>USUARIO:</h2>
                        <input id ="usuario" class="texto" type="text" name="usuario" placeholder="Su usuario"/>
                    </div>
                    <div>
                        <h2>CONTRASEÑA:</h2>
                        <input id ="psw" class="texto" type="password" name="contra" placeholder="****"/>
                    </div>                    
                </div>
                <h2>FECHA DE NACIMIENTO:</h2>
                <input id="fecha" type="date"/>
                <div id="boton_registrar">
                    <a onclick="registro();"><p>REGISTRAR</p></a>
                </div>
            </div>
        );
    };
}