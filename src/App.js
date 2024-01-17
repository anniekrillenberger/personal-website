import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter, Link } from 'react-router-dom';

import logo from "./images/bow.png";

import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar className="navbar" sticky="top" 
              expand="sm" collapseOnSelect>
        <Container fluid className="justify-content-start">
          <Navbar.Brand as={Link} to="/">
            <img
              alt="Bow Logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
              <Nav>
                <Nav.Link as={Link} to="/" className="navLink">Home</Nav.Link>
                <Nav.Link as={Link} to="/aboutMe" className="navLink">About Me</Nav.Link>
                <NavDropdown title={<span className="navLink">Projects</span>}>
                  <NavDropdown.Item as={Link} to="/techProjects" className="navLink navDrop">Tech</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/crochetProjects" className="navLink navDrop">Crochet</NavDropdown.Item>
              </NavDropdown>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </BrowserRouter>



      <h1>Anne Krillenberger</h1>
  </>
  );
}

export default App;


/**
 * Notes:
 *      - WAVE tool for acessability
 * 
 * TODO: 
 *      - copyright statement
 *      - fonts
 *      - fix background color?
 *      - navbar
 *        - hover color & for dropdown
 *        - dropdown styling
 */