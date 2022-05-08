import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer-text'>
           <Container>
           <Row>
               <Col>
                    <h2>About Company</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ullam repellat sit. Ipsa saepe maiores placeat eligendi totam quisquam necessitatibus dignissimos</p>
               </Col>
               <Col>
                    <h2>Importants</h2>
                    <li>Sell Vehicless</li>
                    <li>Privacy Policy</li>
                    <li>About Company</li>
                    <li>Contact Us</li>
                    <li>Career</li>
               </Col>
               <Col>
                    <h2>Categories</h2>
                    <li>New Vehicles</li>
                    <li>Used Vehicles</li>
                    <li>Top Searching</li>
                    <li>Top Makes</li>
                    <li>Top Types</li>
               </Col>
               <Col>
                    <h2>Our Newsletter</h2>
                    <p>Be the first to know about our offers and discounts by subscribing to the newsletter</p>
               </Col>
           </Row>
           </Container>
        </div>
  );
};

export default Footer;
