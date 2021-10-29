import React from 'react';
import "./Banner.css"
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://i.ibb.co/bvBdfj6/halima-bouchouicha-0cf4-Ym-S3-M3-M-unsplash-2.png" alt="First slide"/>
                    <Carousel.Caption>
                        <h1 className="top-heading">Welcome !</h1>
                        <h3  className=" heading">Tourist Spots Traveling</h3>
                        <h5>Let's get lost in the beauty of nature</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                    <Carousel.Item>
                    <img className="d-block w-100" src="https://i.ibb.co/KN4z7SW/shlomo-shalev-Go-PYSBv-Z-QQ-unsplash-1-1.png" alt="Second slide" />

                    <Carousel.Caption>
                        <h1 className="top-heading">Welcome !</h1>
                        <h3 className=" heading">Tourist Spots Traveling</h3>
                        <h5>Let's get lost in the beauty of nature</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                        <img className="d-block w-100" src="https://i.ibb.co/MCmQWXZ/previn-samuel-AZq-Al-EIt-TMI-unsplash-1.png" alt="Third slide"/>

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