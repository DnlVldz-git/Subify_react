import {Tab, Tabs, Form, Button } from "react-bootstrap";
import '../styles/contacto.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'




const { Component } = require("react");

export default class Contacto extends Component{
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
                        <p>Estas</p>
                    </Tab>
                    <Tab className="tab" eventKey="mision" title="Misión">
                        <p>Estas</p>
                    </Tab>
                </Tabs>
            </div>
        );
    };
}