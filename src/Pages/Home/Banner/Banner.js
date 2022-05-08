import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className='top-banner'>
                <div className='top-banner-contenar'>
                    <div>
                        <Container>
                        <Row>
                            <Col className='banner-contenar' lg={6} sm={12}>
                                <h4>WELCOME TO</h4>
                                <h2>oshine photography</h2>
                                <p>A Lifestyle Photographer based in Paris, France</p>
                            </Col>
                            <Col className='img-bg' lg={6} sm={12}>
                               <div>
                                   <div className='banner-img'>

                                   </div>
                               </div>
                            </Col>
                        </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;