import { Carousel, Container } from "react-bootstrap";
import '../styles/galeriaFotos.css'


const { Component } = require("react");

export default class galeriaFotos extends Component{
    render(){
        return(
            <Container className="contenedor">
                <Carousel className="carrusel">
                    <Carousel.Item className="carrusel-item">
                        <img
                        className="d-block w-100"                        
                        src="https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/bi_1860/public/media/image/2020/03/familia-viendo-disney-plus-1885289.jpg?itok=B8Qsaavp"
                        alt="disney"
                        />
                        <Carousel.Caption>
                        <h3>Disney</h3>
                        <p>Disfruta tus series favoritas.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carrusel-item">
                        <img
                        className="d-block w-100"                        
                        src="https://rock101online.mx/wp-content/uploads/2021/08/Spotify-Plus-1100x550.png"
                        alt="spotify"
                        />
                        <Carousel.Caption>
                        <h3>Spotify</h3>
                        <p>Escucha la música que desees.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carrusel-item">
                        <img
                        className="d-block w-100"                        
                        src="https://www.topcomparativas.com/wp-content/uploads/2018/12/video-amazon-prime-571x292.png"
                        alt="amazon"
                        />
                        <Carousel.Caption>
                        <h3>Amazon</h3>
                        <p>Relájate y pon una película.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carrusel-item">
                        <img
                        className="d-block w-100"
                        src="https://estaticos-cdn.elperiodico.com/clip/ee0263dc-718e-41f4-b88c-70f3ae679110_alta-libre-aspect-ratio_default_0.jpg"
                        alt="Netflix"
                        />
                        <Carousel.Caption>
                        <h3>Netflix</h3>
                        <p>Sin preocuparte de fechas de pago</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carrusel-item">
                        <img
                        className="d-block w-100"
                        src="https://loshijosdeaztlan.files.wordpress.com/2018/01/cd85940e8285fe3b1107f81805cfa52c.jpg"
                        alt="Hbo"
                        />
                        <Carousel.Caption>
                        <h3>HBO</h3>
                        <p>Nosotros nos encargamos de eso.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carrusel-item">
                        <img
                        className="d-block w-100"
                        src="https://static3-sevilla.abc.es/media/tecnologia/2020/09/10/s/trucos-amazon-primevideo-ksrD--620x349@abc.png"
                        alt="amazon"
                        />
                        <Carousel.Caption>
                        <h3>Amazon</h3>
                        <p>Contamos con una variedad de servicios.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        );
    };
}