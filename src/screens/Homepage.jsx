import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import me from '../images/me-wien-edited.jpg';
import vk from '../images/output-onlinejpgtools.jpg'
import vkHover from '../images/output-onlinejpgtools-hover.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Homepage() {

  const [isVkHovered, setIsVkHovered] = useState(false);


  return (
    <Container fluid>
      <Row>
        <Col className="homepage">
          <img src={me} alt="Me outside the Vienna Art Museum" className="image-style" />
        </Col>
        <Col className="homepage">
          <div>
            <h1>
              <span className="homepage-hi">Hi! </span>
              <span className="homepage-text">  My name's Annie :)</span>
            </h1>
            <p className="homepage-paragraph">I am a UW-Madison graduate working in software development based in Madison, Wisconsin. Thanks for coming to my corner of the internet. I'm glad you're here!</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/anne-krillenberger" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="4x" className="social-icon" />
              </a>
              <a href="https://github.com/anniekrillenberger" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="4x" className="social-icon" />
              </a>
              <a
                href="https://www.valueknowledge.com/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsVkHovered(true)}
                onMouseLeave={() => setIsVkHovered(false)}
              >
                <img
                  src={isVkHovered ? vkHover : vk}
                  alt="Redirect to ValueKnowledge"
                  className="social-icon vk-icon"
                />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
