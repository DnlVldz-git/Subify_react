import { Component } from "react";
import '../styles/ingresar.css';

export default class Ingresar extends Component{
    render(){
        return(
            <div id="rectangulo_middle_registrar">
				<h1>LOGIN</h1>
				<h2>USUARIO:</h2>
				<input id="user" type="text" name="usuario" />
				<h2>CONTRASEÑA:</h2>
				<input id ="psw" type="password" name="pswd"/>
				<div id="boton_ingresar">
					<a onclick="login();"><p>INGRESAR</p></a>
				</div>
			</div>
        );
    };
}