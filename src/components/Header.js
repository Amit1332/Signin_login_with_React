import React from 'react';
import Container from 'react-bootstrap/Container';
import {NavLink}  from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">User Registration</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/login">Home</Nav.Link>
            <Nav.Link>Features</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
