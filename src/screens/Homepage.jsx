import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import me from '../images/me-wien.jpg'; 

export default function Homepage() {

    return (
      <Container fluid>
        <Row>
          <Col md={6}>
            <div className="image-container">
              <img src={me} alt="Me in Vienna!" className="image-style"/>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-center align-items-center">
            Hi, I'm Annie!
          </Col>
        </Row>
      </Container>
      );
}
