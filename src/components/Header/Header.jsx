import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

const Header = () => {
    return (
        <Navbar>
            <Container className='nav-bar'>
                <Navbar.Brand className='navbar-brand' href="#home">Nav</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;