import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar className='header' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Oshine</Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                        <Nav.Link as={Link} to='/manage-items'>Manage Items</Nav.Link>
                        <Nav.Link as={Link} to='/add-item'>Add Ttem</Nav.Link>
                        <Nav.Link as={Link} to='/my-items'>My Items</Nav.Link>
                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;