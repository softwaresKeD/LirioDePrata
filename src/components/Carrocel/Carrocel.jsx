import React from 'react';
import './Carrocel.css';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carrocel({ images }) {
    return (
        <div className='conteudo'>
            <Carousel>
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={image.src}
                            alt={image.alt}
                        />
                        <Carousel.Caption>
                            <h3>{image.label}</h3>
                            <p>{image.text}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default Carrocel;
