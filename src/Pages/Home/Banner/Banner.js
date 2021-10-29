import React from 'react';
import "./Banner.css"
import banner1 from "../../../image/banner/banner1.png";
import banner2 from "../../../image/banner/banner2.png";
import banner3 from "../../../image/banner/banner3.png";
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={banner1} alt="First slide"/>
                    <Carousel.Caption>
                        <h1 className="top-heading">Welcome !</h1>
                        <h3  className=" heading">Tourist Spots Traveling</h3>
                        <h5>Let's get lost in the beauty of nature</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                    <Carousel.Item>
                    <img className="d-block w-100" src={banner2} alt="Second slide" />

                    <Carousel.Caption>
                        <h1 className="top-heading">Welcome !</h1>
                        <h3 className=" heading">Tourist Spots Traveling</h3>
                        <h5>Let's get lost in the beauty of nature</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                        <img className="d-block w-100" src={banner3} alt="Third slide"/>

                    <Carousel.Caption>
                        <h1 className="top-heading">Welcome !</h1>
                        <h3 className=" heading">Tourist Spots Traveling</h3>
                        <h5>Let's get lost in the beauty of nature</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;