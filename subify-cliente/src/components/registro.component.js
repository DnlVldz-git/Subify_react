import { Component } from "react";
import '../styles/registro.css';
import {Modal, Button} from "react-bootstrap";
import UsuarioService from "../services/usuario.service";

export default class Registro extends Component{
    constructor(props){
        super(props);
                
		this.onChangeUsuario = this.onChangeUsuario.bind(this);
		this.onChangeNombre = this.onChangeNombre.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeContra = this.onChangeContra.bind(this);
        this.onChangeFecha = this.onChangeFecha.bind(this);
        this.registrarUsuario = this.registrarUsuario.bind(this);

        this.state = {   
			usuario: "",                                 
			contra: "",	
            email: "",	
            nombre: "",
            fecha: "",				
			showModal: false,
			mensaje: "",
			mensaje_2: ""		
        };    				
    }

    registrarUsuario() {							
		var usu = this.state.usuario;	
		var con = this.state.contra;	
        var ema = this.state.email;	
        var nom = this.state.nombre;	
        var fecha = this.state.fecha;	

        console.log(fecha);

		if(usu === "" || con === "" || ema === "" || nom === "" || fecha === ""){
			this.setState({
				mensaje: "Error",
				mensaje_2: ("Llene todos los campos")
			});
			this.handleModal();				
		}else{	
            var data = {
                usuario: usu,
                nombre: nom,
                contra: con,
                email: ema,
                fecha: fecha
            };
			UsuarioService.create(data).then(response => {												
                this.setState({
                    mensaje: "Ingreso exitoso",
                    mensaje_2: ("Usuario " + data.nombre +" ingresado")
                });
                this.clearFields();
                this.handleModal();
			}).catch(e => {
				this.setState({
                    mensaje: "Error",
                    mensaje_2: ("Error")
                });
                this.handleModal();
                console.log(e); 
			});
		}
    }

    onChangeUsuario(e) {
        const us = e.target.value;
        this.setState({
            usuario: us
        });
    }

	onChangeNombre(e) {
        const nom = e.target.value;
        this.setState({
            nombre: nom
        });
    }

    onChangeEmail(e) {
        const ema = e.target.value;
        this.setState({
            email: ema
        });
    }

    onChangeContra(e) {
        const con = e.target.value;
        this.setState({
            contra: con
        });
    }

    onChangeFecha(e) {
        const fecha = e.target.value;
        this.setState({
            fecha: fecha
        });
    }

    clearFields(){
        this.setState({
            nombre: "",
            contra: "",
            usuario: "",
            email: "",            
            fecha: ""
        });
    }

    handleModal(){
		this.setState({showModal: !this.state.showModal})
	}

    render(){
        const {usuario, contra, email, nombre, fecha} = this.state;					

        return(
            <div id="rectangulo_middle_registro">
                <h1>REGISTRO</h1>
                <div id="input_1">
                    <div>
                        <h2>CORREO:</h2>
                        <input id="email" value={email} class="texto" onChange={this.onChangeEmail}
                        type="email" name="correo" placeholder="ejemplo@hotmail.com"/>
                    </div>
                    <div>
                        <h2>NOMBRE:</h2>
                        <input id ="nombre" value={nombre} class="texto" onChange={this.onChangeNombre}
                         type="text" name="nombre" placeholder="Su nombre"/>
                    </div>
                    <div>
                        <h2>USUARIO:</h2>
                        <input id ="usuario" value={usuario} class="texto" onChange={this.onChangeUsuario}
                        type="text" name="usuario" placeholder="Su usuario"/>
                    </div>
                    <div>
                        <h2>CONTRASEÑA:</h2>
                        <input id ="psw" value={contra} class="texto" onChange={this.onChangeContra}
                        type="password" name="contra" placeholder="******"/>
                    </div>                    
                </div>
                <h2>FECHA DE NACIMIENTO:</h2>
                <input id="fecha" type="date" value={fecha} onChange={this.onChangeFecha}/>
                <div id="boton_registrar">
                    <a onClick={this.registrarUsuario}><p>REGISTRAR</p></a>
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
    };
}