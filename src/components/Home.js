import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { ReactComponent as ComputerSVG } from '../assets/computer.svg';
import { ReactComponent as ScrollSVG } from '../assets/scroll.svg';

const Home = () => {
    return (
        <>
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
                                My name is Dom
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
        </>
    )
};

export default Home;
