import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./About.css"

const About = () => {
    return (
        <div className="about-container">
            <h2 className="heading">Our Facility</h2>
            <Container>
                <Row>
                    <Col className="first-col" xs={12} md={4}>
                        <h3>We Care About Your Privacy</h3>
                        <p>We and our partners store and access information on your device, such as unique IDs in cookies to process personal data. You may accept and manage your choices at any time by clicking `Manage Preferences`, including your right to object where legitimate interest is relied upon. Your choices will be signaled to our partners and will not affect your browsing.</p>
                    </Col>
                    <Col className="col-detail" xs={12} md={8}>
                        <h2>We and our partners undertake the following activities:</h2>
                        <ul>
                            <li><h5>Use precise geolocation data.</h5></li>
                            <li><h5>Actively scan device characteristics for identification.</h5></li>
                            <li><h5>Store and/or access information on a device.</h5></li>
                            <li><h5>Provide personalised ads and content, ad and content measurement, audience insights and product development.</h5></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;