import {Tab, Tabs, Form, Button, Modal } from "react-bootstrap";
import '../styles/contacto.css'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const { Component } = require("react");

export default class Contacto extends Component{
    constructor(props){
        super(props);                
        
        this.comprarMil = this.comprarMil.bind(this);
        this.comprarDiezMil = this.comprarDiezMil.bind(this);
        this.comprarCienMil = this.comprarCienMil.bind(this);
        this.comprarMillon = this.comprarMillon.bind(this);
        

        this.state = {   
			showModal: false,
			mensaje: "",
			mensaje_2: ""		
        };    				
    }

    comprarMil(){
        this.setState({
            mensaje: "Compra realizada",
            mensaje_2: "Código: 100xdsasdlñ"
        });
        this.handleModal();	
    }

    comprarCienMil(){
        this.setState({
            mensaje: "Compra realizada",
            mensaje_2: "Código: 100klmnghdl"
        });
        this.handleModal();	
    }

    comprarDiezMil(){
        this.setState({
            mensaje: "Compra realizada",
            mensaje_2: "Código: 100euiuieojk"
        });
        this.handleModal();	
    }

    comprarMillon(){
        this.setState({
            mensaje: "Compra realizada",
            mensaje_2: "Código: 100opgmfm"
        });
        this.handleModal();	
    }

    handleModal(){
		this.setState({showModal: !this.state.showModal})
	}
    render(){
        return(
            <div className="rectangulo-middle-contacto">
                <Tabs defaultActiveKey="redes" id="uncontrolled-tab-example" className="mb-3">
                    <Tab className="tab-redes" eventKey="redes" title="Redes Sociales">
                        <div className="redes">
                            <a href="https://www.facebook.com/carlosdaniel.knoxville/" target="_blank"><FontAwesomeIcon className="icono-fb" icon={faFacebookF} /></a>
                            <a href="https://twitter.com/Wii20Dani" target="_blank"><FontAwesomeIcon className="icono-tw" icon={faTwitter} /></a>
                            <a href="https://github.com/DnlVldz-git" target="_blank"><FontAwesomeIcon className="icono-gh" icon={faGithub} /></a>
                            <a href="https://www.instagram.com/victorian_cow" target="_blank"><FontAwesomeIcon className="icono-ig" icon={faInstagram} /></a>
                        </div>
                    </Tab>
                    <Tab className="tab" eventKey="contactanos" title="Contáctanos">
                        <div className="formulario"> 
                            <Form>
                                <Form.Group className=" mb-3" controlId="formBasicEmail">
                                    <Form.Label className="label">Dirección de correo</Form.Label>
                                    <Form.Control type="email" placeholder="Introduzca su correo" />
                                    <Form.Text className="text-muted">
                                    Nunca se compatirá su correo con nadie
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className="label">Su mensaje</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Button className="boton" variant="primary" type="submit">
                                    Enviar
                                </Button>
                            </Form>
                        </div>
                    </Tab>
                    <Tab className="tab" eventKey="vision" title="Visión">
                        <h1>Visión</h1>
                        <p>Nuestra visión es transformar la forma en la que las personas manejan su tiempo</p>
                    </Tab>
                    <Tab className="tab" eventKey="mision" title="Misión">
                    <h1>Misión</h1>
                        <p>Nuestra misión es lograr que los usuarios tengan más tiempo libre para hacer lo que deseen</p>
                    </Tab>
                    <Tab className="tab" eventKey="comprar" title="Comprar puntos Cat Racer">
                        <div className="div-puntos">
                            <div className="puntos">
                                <p>1000 puntos</p>
                                <Button className="boton" variant="primary" type="submit" onClick={this.comprarMil}>
                                        Comprar
                                </Button>
                            </div>
                            <div className="puntos">
                                <p>10000 puntos</p>
                                <Button className="boton" variant="primary" type="submit" onClick={this.comprarDiezMil}>
                                        Comprar
                                </Button>
                            </div>
                            <div className="puntos">
                                <p>100000 puntos</p>
                                <Button className="boton" variant="primary" type="submit" onClick={this.comprarCienMil}>
                                        Comprar
                                </Button>
                            </div>
                            <div className="puntos">
                                <p>1000000 puntos</p>
                                <Button className="boton" variant="primary" type="submit" onClick={this.comprarMillon}>
                                        Comprar
                                </Button>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
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