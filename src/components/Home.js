import React, { Component } from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { ReactComponent as ComputerSVG } from '../assets/computer.svg';
import { ReactComponent as ScrollSVG } from '../assets/scroll.svg';

export class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <Container>

                    <div id="home">

                        <Grid
                            container
                            justifyContent="space-evenly"
                            spacing={3}>

                            <Grid item xs={12} sm={6}>
                                <Typography variant="h1">
                                    Hello World
                                </Typography>
                                <br />
                                <Typography variant="h2">
                                    My name's Dom
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
                                <ComputerSVG width="340" height="340" />
                            </Grid>

                        </Grid>


                        <a id="scrollbutton" href="#about">
                            <ScrollSVG />
                        </a>
                    </div>

                </Container >
            </React.Fragment >
        )
    }
}

export default Home
