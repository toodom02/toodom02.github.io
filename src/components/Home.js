import React, { Component } from 'react';
import { Container, Typography } from '@material-ui/core';
import { ReactComponent as ComputerSVG } from '../assets/computer.svg';

export class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <Container>
                    <div id="home">
                        <div className="Content">
                            <Typography variant="h1">
                                Hello World
                            </Typography>
                            <br />
                            <Typography variant="h2">
                                My name's Dom
                            </Typography>
                        </div>

                        <div id="compimg">
                            <ComputerSVG />
                        </div>


                    </div>
                    <a id="scrollbutton" href="#about">
                        <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Frame 1" clip-path="url(#clip0)">
                                <g id="darkGroup">
                                    <path id="dark1" opacity="0.7" d="M51.732 60C50.9622 61.3333 49.0377 61.3333 48.2679 60L28.3494 25.5C27.5796 24.1667 28.5418 22.5 30.0814 22.5L69.9186 22.5C71.4582 22.5 72.4204 24.1667 71.6506 25.5L51.732 60Z" />
                                    <path id="dark2" opacity="0.7" d="M51.732 42C50.9622 43.3333 49.0377 43.3333 48.2679 42L28.3494 7.5C27.5796 6.16666 28.5418 4.5 30.0814 4.5L69.9186 4.5C71.4582 4.5 72.4204 6.16667 71.6506 7.5L51.732 42Z" />
                                </g>
                                <g id="lightGroup">
                                    <path id="light1" opacity="0.7" d="M51.732 42C50.9622 43.3333 49.0377 43.3333 48.2679 42L28.3494 7.5C27.5796 6.16666 28.5418 4.5 30.0814 4.5L69.9186 4.5C71.4582 4.5 72.4204 6.16667 71.6506 7.5L51.732 42Z" />
                                </g>
                            </g>
                        </svg>
                    </a>
                </Container>
            </React.Fragment>
        )
    }
}

export default Home
