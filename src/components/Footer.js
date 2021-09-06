import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React, { Component } from 'react';
import { Container } from '@material-ui/core';

export class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="footer">
                    <Container>
                        <a href="https://www.linkedin.com/in/dominictoo/" target="_blank" rel="noreferrer"
                            className="linkedin social">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a href="https://www.github.com/toodom02" target="_blank" rel="noreferrer"
                            className="github social">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}

export default Footer
