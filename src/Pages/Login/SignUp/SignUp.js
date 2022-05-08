import React from 'react'; 
import { Col, Container, Row } from 'react-bootstrap';

const SignUp = () => {
    
    return (
        <Container>
            <Row>
                <Col>
                <div className='login-form'>
            <div className='from'>
            <h1>Sign Up</h1>
            <div className='login d-flex justify-content-center'>
                <form>
                    <input type="email" name="" id="" placeholder='Email' />
                    
                    <br />
                    <input type="text" name="" id="" placeholder='Password' />
                    
                    <p className="absolute top-3 right-5" ></p>
                    <input type="password" name="" id="" placeholder='Confirm-Password' />
                    
                    <button className='button'>Sign Up</button>
                    
                </form>
            </div>
            </div>
        </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;