import React, { Component } from 'react';
import { Container, Typography } from '@material-ui/core';
import kebleImg from "../assets/keble.png";
import oxfordImg from "../assets/oxford.png";

export class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <div id="about">
                        <div className="Content">
                            <img id="badge" src={kebleImg} alt="Keble Crest" />
                            <img id="badge" src={oxfordImg} alt="Oxford Uni Logo" />
                            <Typography variant="h2">
                                About Me
                            </Typography>
                            <Typography variant="body1">
                                Originally from East Yorkshire, I'm an undergraduate student at <a href="https://www.keble.ox.ac.uk/" target="_blank" rel="noreferrer" style={{ color: "black" }}>
                                    Keble College, University of Oxford
                                </a>
                                .
                                <br />
                                <br />
                                I'm currently studying Computer Science for a four-year masters degree (MCompSci, Computer Science).
                                <br />
                                <br />
                                Checkout some of my projects on the next page!
                            </Typography>
                        </div>
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}

export default About
