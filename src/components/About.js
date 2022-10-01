import React, { Fragment } from 'react';
import { Container, Typography } from '@material-ui/core';
import kebleImg from "../assets/keble.png";
import oxfordImg from "../assets/oxford.png";

const About = () => {
    return (
        <Fragment>
            <Container>
                <div id="about">
                    <div className="Content">
                        <img id="badge" src={kebleImg} alt="Keble Crest" />
                        <img id="badge" src={oxfordImg} alt="Oxford Uni Logo" />
                        <Typography variant="h2">
                            About Me
                        </Typography>
                        <Typography variant="body1">
                            Originally from East Yorkshire, I'm an undergraduate student at <a href="https://www.keble.ox.ac.uk/" target="_blank" rel="noreferrer">
                                Keble College, University of Oxford
                            </a>
                            .
                            <br />
                            <br />
                            I'm currently studying <b>Computer Science</b> for a four-year masters degree (MCompSci, Computer Science).
                            <br />
                            <br />
                            Checkout some of my <a href="/#projects">Projects</a> on the next page!
                            <br />
                            <br />
                            Feel free to <a href="/#contact">Contact Me</a> with the form below.
                        </Typography>
                    </div>
                </div>
            </Container>
        </Fragment>
    )
};

export default About;