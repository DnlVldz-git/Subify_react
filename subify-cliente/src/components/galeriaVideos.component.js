import { Carousel, Container } from "react-bootstrap";
import '../styles/galeriaVideos.css'

const { Component } = require("react");

export default class galeriaVideos extends Component{
    render(){
        return(
            <Container className="contenedor">
                <Carousel className="carrusel">
                    <Carousel.Item className="carrusel-item">
                    <iframe className="video" src="https://www.youtube.com/embed/UuYkT_IYFyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <Carousel.Caption>                        
                        <h3>Siempre podrás cancelar.</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carrusel-item">
                        <iframe className="video" src="https://www.youtube.com/embed/iirChYyD7to" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <Carousel.Caption>
                        <h3>Ahorra tiempo.</h3>                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carrusel-item">
                    <iframe className="video" src="https://www.youtube.com/embed/Q_ViE3v_KBI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <Carousel.Caption>
                        <h3>Conoce a detalle tus suscripciones.</h3>                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carrusel-item">
                    <iframe className="video" src="https://www.youtube.com/embed/p_uE_bExJJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <Carousel.Caption>
                        <h3>Nunca te pierdas un evento.</h3>                        
                        </Carousel.Caption>
                    </Carousel.Item>                    
                </Carousel>
            </Container>
        );
    };
}