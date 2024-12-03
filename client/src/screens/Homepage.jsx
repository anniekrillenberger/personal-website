import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import me from '../images/me-wien-edited.jpg';
import vk from '../images/vk-default.jpg'
import vkHover from '../images/vk-hover.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Tooltip } from 'react-tooltip'

export default function Homepage() {

    const [isVkHovered, setIsVkHovered] = useState(false);
    const linkedinLin = "https://www.linkedin.com/in/anne-krillenberger";
    const githubLink = "https://github.com/anniekrillenberger";
    const vkLink = "https://www.valueknowledge.com/";

    return (
        <Container>
            <Tooltip id="vk-redirect" />
            <Row xs={1} md={2}>
                <Col className="homepage">
                    <img src={me} alt="Me outside the Vienna Art Museum" className="image-style" />
                </Col>
                <Col className="homepage">
                    <div>
                        <h1>
                            <span className="homepage-hi">Hi! </span>
                            <span className="homepage-text">  My name's Anne :)</span>
                        </h1>
                        <p className="homepage-paragraph">I am a UW-Madison graduate working in software development based in Madison, Wisconsin. Thanks for coming to my corner of the internet. I'm glad you're here!</p>
                        <div className="social-icons">
                            <a href={linkedinLin} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="4x" className="social-icon" />
                            </a>
                            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="4x" className="social-icon" />
                            </a>
                            <a
                                href={vkLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setIsVkHovered(true)}
                                onMouseLeave={() => setIsVkHovered(false)}
                                data-tooltip-id="vk-redirect"
                                data-tooltip-content="Redirect to ValueKnowledge"
                                data-tooltip-place="bottom"
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