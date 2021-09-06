import React, { Component } from 'react';
import { Container, Card, CardContent, Typography, Button, Grid } from '@material-ui/core';

export class Projects extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <div id="projects">
                        <div className="Content">
                            <Typography variant="h2">Projects</Typography>
                            <br />
                            <Grid
                                container
                                justifyContent="space-evenly"
                                spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Card>
                                        <CardContent>
                                            <Typography variant="h4">GAMES-JS</Typography>
                                            <Typography variant="subtitle1">
                                                GAMES-JS is a small collection of classic single-player and two-player games, built from the ground up in pure HTML, CSS, and JavaScript.
                                            </Typography>
                                            <Button color="primary" href="https://toodom02.github.io/games-js/" target=" _blank" rel="noreferrer">
                                                Visit Live
                                            </Button>
                                            <Button href="https://github.com/toodom02/games-js" target=" _blank" rel="noreferrer">
                                                GitHub
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Card>
                                        <CardContent>
                                            <Typography variant="h4"><b>S♪ght<font color="#006666"><em>Read</em></font></b></Typography>
                                            <Typography variant="subtitle1">
                                                SightRead is a simple React web app that generates and displays a musicXML file as sheet music, based on user inputs.
                                            </Typography>
                                            <Button color="primary" href="https://toodom02.github.io/SightRead/" target=" _blank" rel="noreferrer">
                                                Visit Live
                                            </Button>
                                            <Button href="https://github.com/toodom02/SightRead" target=" _blank" rel="noreferrer">
                                                GitHub
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Card>
                                        <CardContent>
                                            <Typography variant="h4">Conway's Game of Life</Typography>
                                            <Typography variant="subtitle1">
                                                A simulation of John Conway's Game of Life cellular automaton, built with javascript.
                                            </Typography>
                                            <Button color="primary" href="https://toodom02.github.io/GameOfLife/" target=" _blank" rel="noreferrer">
                                                Visit Live
                                            </Button>
                                            <Button href="https://github.com/toodom02/GameOfLife" target=" _blank" rel="noreferrer">
                                                GitHub
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Card>
                                        <CardContent>
                                            <Typography variant="h4">img-to-css</Typography>
                                            <Typography variant="subtitle1">
                                                img-to-css uses a BFS algorithm with openCV's edge detection to convert images into pure html/css.
                                            </Typography>
                                            <Button href="https://github.com/toodom02/img-to-css" target=" _blank" rel="noreferrer">
                                                GitHub
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Card>
                                        <CardContent>
                                            <Typography variant="h4">King<font color="LightBlue"><b><em>Fisher</em></b></font></Typography>
                                            <Typography variant="subtitle1">
                                                Python-Flask based Website developed for the Kingfisher Trust Cafe, with built in CMS.
                                            </Typography>
                                            <Button color="primary" href="https://kingfishercafe.herokuapp.com/" target=" _blank" rel="noreferrer">
                                                Visit Live
                                            </Button>
                                            <Button href="https://github.com/toodom02/KingFisher" target=" _blank" rel="noreferrer">
                                                GitHub
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                            <br />
                            <Typography variant="subtitle1">
                                To see more (public) projects, visit my  <a href="https://github.com/toodom02" target="_blank" rel="noreferrer" style={{ color: "black" }}>
                                    GitHub
                                </a>.
                            </Typography>
                        </div>
                    </div>
                </Container>
            </React.Fragment >
        )
    }
}

export default Projects
