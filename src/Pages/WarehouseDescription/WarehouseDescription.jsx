import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './WarehouseDescription.css';

const WarehouseDescription = () => {
    return (
       <Container>
           <Row className='d-flex align-items-center description'>
               <Col lg={6} sm={12} className='img'>
                   
               </Col>
               <Col lg={6} sm={12} className='text'>
                    <h2>Ghurnek has been standing on the trust of customers for the last 10 years</h2>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, eligendi consectetur laboriosam qui optio illo provident impedit, vero nisi commodi delectus pariatur eum mollitia excepturi temporibus aspernatur, repudiandae animi. Quaerat sit rem doloremque repellat tenetur mollitia quae, provident quasi voluptatibus ducimus velit excepturi?</p>
               </Col>
           </Row>
       </Container>
    );
};

export default WarehouseDescription;