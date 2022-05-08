import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Stock.css';

const Banner = () => {
    return (
        <Container>
        <Row className='cards'>
            <Col lg={3} md={6} sm={12} className='card'>
                <img src="" alt="" />
                <h4>STOCK VEHICLES</h4>
                <h2>2355</h2>
            </Col>
            <Col lg={3} md={6} sm={12} className='card'>
                 <img src="" alt="" />
                 <h4>SOLD VEHICLES</h4>
                 <h2>7895</h2>
            </Col>
            <Col lg={3} md={6} sm={12} className='card'>
                 <img src="" alt="" />
                 <h4>HAPPY CLIENTS</h4>
                 <h2>6567</h2>
            </Col>
            <Col lg={3} md={6} sm={12} className='card'>
                 <img src="" alt="" />
                 <h4>TOTAL REVIEWS</h4>
                 <h2>5467</h2>
            </Col>
        </Row>
    </Container>
    );
};

export default Banner;