import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import logo from "./images/bow.png";
import Homepage from "./screens/Homepage.jsx";
import Experiences from "./screens/Experiences.jsx";
import TechProjects from "./screens/projects/TechProjects.jsx";
import CrochetProjects from "./screens/projects/CrochetProjects.jsx";
import Travel from "./screens/Travel.jsx";

function Navigation() {
  return (
    <div className='font'>
    <BrowserRouter>
      <Navbar className="navbar" sticky="top" 
              expand="sm" collapseOnSelect>
        <Container fluid className="justify-content-start">
          <Navbar.Brand as={Link} to="/" element= {<Homepage/>}>
            <img
              alt="Bow Logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse>
              <Nav>
                <Nav.Link as={Link} to="/" className="navLink">Home</Nav.Link>
                <Nav.Link as={Link} to="/experiences" className="navLink">Experiences</Nav.Link>
                <NavDropdown
                    title={<span>Projects</span>}>
                  <NavDropdown.Item as={Link} to="/techProjects">Tech</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/crochetProjects">Crochet</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/travel" className="navLink">Travel</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/experiences" element={<Experiences/>} />
          <Route path="/techProjects" element={<TechProjects/>} />
          <Route path="/crochetProjects" element={<CrochetProjects/>} />
          <Route path="/travel" element={<Travel/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default Navigation;