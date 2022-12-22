import React from "react";
import './Carusel.css';
import Carousel from 'react-bootstrap/Carousel';


export default function Carusel() {
    return (
        <div className="goodzone-carusel">
            <Carousel indicators={false}>
                <Carousel.Item>
                    <img
                    style={{borderRadius:30}}
                    className="d-block w-100"
                    src="https://cdn.goodzone.uz/goodzone/eb250a9a-a06b-44e1-b6c0-1f6cd118ed68"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{borderRadius:30}}
                    className="d-block w-100"
                    src="https://cdn.goodzone.uz/goodzone/44ccc74e-47a3-470f-8468-49596371c2ec"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{borderRadius:30}}
                    className="d-block w-100"
                    src="https://cdn.goodzone.uz/goodzone/4d1ebd1f-aea8-46f1-a60a-136cef149846"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}