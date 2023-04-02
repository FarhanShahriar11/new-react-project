import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

const Header = () => {
    return (
        <Navbar>
            <Container className='nav-bar'>
                <Navbar.Brand className='navbar-brand' href="#home">Nav-bar</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                   
                </Navbar.Collapse>
                <ul>
            <li><a href="#home">Home</a></li>
             <li><a href="#news">News</a></li>
             <li><a href="#contact">Contact</a></li>
              <li><a href="#about">About</a></li>
              </ul>
            </Container>
           
        </Navbar>
    );
};

export default Header;