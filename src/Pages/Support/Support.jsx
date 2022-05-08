import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Support.css";

const Support = () => {
  return (
    <div>
      <Container  className="experience">
        <Row className="experience-container">
          <Col sm={12} lg={6} className="experience-text">
            <h2>WANT TO SELL YOUR CAR QUICKLY?</h2>
            <p>Lorem ipsum dolor amet consectetur libero accusantium minima</p>
          </Col>
          <Col m={12} lg={6}>
                <button className="experience-button">sell vehicless</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Support;