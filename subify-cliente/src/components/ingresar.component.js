import { Component } from "react";
import { useState } from "react";
import {Modal, Button} from "react-bootstrap";
import '../styles/ingresar.css';
import UsuarioService from "../services/usuario.service";

export default class Ingresar extends Component{
	constructor(props){
        super(props);
        
        this.buscarUsuario = this.buscarUsuario.bind(this);
		this.onChangeBuscarUsuario = this.onChangeBuscarUsuario.bind(this);
		this.onChangeBuscarContra = this.onChangeBuscarContra.bind(this);

        this.state = {   
			usuario: "",                                 
			contra: "",	
			usuario_bd: [],
			showModal: false,
			mensaje: "",
			mensaje_2: ""		
        };    				
    }

	buscarUsuario() {							
		var usu = this.state.usuario;	
		var con = this.state.contra;				

		if(usu == "" || con == ""){
			this.setState({
				mensaje: "Error",
				mensaje_2: ("Llene todos los campos")
			});
			this.handleModal();				
		}else{		
			UsuarioService.findByUsuario(usu).then(response => {				
				this.setState({
					usuario_bd: response.data
				});		
				
				if(this.state.usuario_bd.length != 0){

					if(this.state.contra == this.state.usuario_bd[0].contra){
						this.setState({
							mensaje: "Login exitoso",
							mensaje_2: ("Bienvenido " + this.state.usuario_bd[0].nombre)
						});
						this.handleModal();				
					}
				}else{
					this.setState({					
						mensaje: "Contraseña o usuario incorrecto",
						mensaje_2: "Revise sus datos",
					});
					this.handleModal();				
				}
			}).catch(e => {
				console.log(e);
			});
		}
    }

	onChangeBuscarUsuario(e) {
        const us = e.target.value;
        this.setState({
            usuario: us
        });
    }

	onChangeBuscarContra(e) {
        const con = e.target.value;
        this.setState({
            contra: con
        });
    }
	
	handleModal(){
		this.setState({showModal: !this.state.showModal})
	}

    render(){
		const {usuario, contra} = this.state;					

        return(
            <div id="rectangulo_middle_registrar">
				<h1>LOGIN</h1>
				<h2>USUARIO:</h2>
				<input id="user" type="text" placeholder="Usuario" value={usuario} onChange={this.onChangeBuscarUsuario}/>
				<h2>CONTRASEÑA:</h2>
				<input id ="psw" type="password" placeholder="Contraseña" value={contra} onChange={this.onChangeBuscarContra}/>
				<div id="boton_ingresar">
					<a onClick={this.buscarUsuario}><p>INGRESAR</p></a>
				</div>	
				<Modal show={this.state.showModal} onHide={()=>this.handleModal()}>
					<Modal.Header closeButton>
					<Modal.Title>{this.state.mensaje}</Modal.Title>
					</Modal.Header>
					<Modal.Body>{this.state.mensaje_2}</Modal.Body>
					<Modal.Footer>
					<Button variant="primary" onClick={()=>this.handleModal()}>
						Vale
					</Button>					
					</Modal.Footer>
				</Modal>						
			</div>
        );
    }
}