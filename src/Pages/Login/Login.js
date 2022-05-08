import React from 'react'; 
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    
    return (
        <Container>
            <Row>
                <Col>
                <div className='login-form'>
            <div className='from'>
            <h1>Login</h1>
            <div className='login d-flex justify-content-center'>
                <form>
                    <input type="email" name="" id="" placeholder='Email'/>
                    
                    <br />
                    <input type="password" name="" id="" placeholder='Password'/>
                    
                    <button className='button'>Log In</button>
                    
                    <button className='google-button'>Continue with Google</button>
                    <p className='mt-2'>New to Tech Geeks? <Link className="" to="/signup">Create New Account</Link></p>
                </form>
            </div>
            </div>
        </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;