import React from "react";
import img1 from "../asset/img.jpg";
import img2 from "../asset/img2.png"
import Carousel from 'react-bootstrap/Carousel'
export default function Advertise() {
    return (
        <div className="container-fluid">
            <Carousel className="">
                <Carousel.Item interval={1000}>
                    <img className="d-block w-100 h-60 rounded-xl" src=" https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=1440/layout-engine/2022-05/Group-33704.jpg" />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img className="d-block w-100 h-60 rounded-xl" src={img1} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img src={img2} className="d-block w-100 h-60 rounded-xl" />
                </Carousel.Item>
            </Carousel>
        </div>

    )
}