import React, { Fragment } from 'react';
import { Container, Card, CardContent, CardActionArea, CardMedia, Typography, Button, Grid } from '@material-ui/core';

const Projects = () => {
    return (
        <Fragment>
            <Container>
                <div id="projects">
                    <div className="Content">
                        <Typography variant="h2">Projects</Typography>
                        <br />
                        <Grid
                            container
                            justifyContent="space-evenly"
                            spacing={6}>

                            <Grid item xs={12} sm={6}>
                                <Card className="project-card">
                                    <CardActionArea>
                                        <CardMedia
                                            className="media-card"
                                            image={
                                                'https://raw.githubusercontent.com/toodom02/AroundTheWorld/main/static/logo.png'
                                            }
                                        />
                                        <CardContent>
                                            <Typography variant="h4">Around the World</Typography>
                                            <Typography variant="subtitle1">
                                                A 3D JavaScript game built with WebGL using the three.js library, and the cannon-es physics engine.
                                            </Typography>
                                            <br />
                                            <Button variant="outlined" color="primary" href="https://toodom02.github.io/AroundTheWorld/" target=" _blank" rel="noreferrer">
                                                View Live
                                            </Button>
                                            <Button href="https://github.com/toodom02/AroundTheWorld" target=" _blank" rel="noreferrer">
                                                GitHub
                                            </Button>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Card className="project-card">
                                    <CardActionArea>
                                        <CardMedia
                                            className="media-card"
                                            image={
                                                'https://raw.githubusercontent.com/toodom02/games-js/master/static/logo.svg'
                                            }
                                        />
                                        <CardContent>
                                            <Typography variant="h4">GAMES-JS</Typography>
                                            <Typography variant="subtitle1">
                                                GAMES-JS is a small collection of classic single-player and two-player games, built from the ground up in pure HTML, CSS, and JavaScript.
                                            </Typography>
                                            <br />
                                            <Button variant="outlined" color="primary" href="https://toodom02.github.io/games-js/" target=" _blank" rel="noreferrer">
                                                View Live
                                            </Button>
                                            <Button href="https://github.com/toodom02/games-js" target=" _blank" rel="noreferrer">
                                                GitHub
                                            </Button>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Card className="project-card">
                                    <CardActionArea>
                                        <CardMedia
                                            className="media-card"
                                            image={
                                                'https://raw.githubusercontent.com/toodom02/SightRead/master/public/logo.svg'
                                            }
                                        />
                                        <CardContent>
                                            <Typography variant="h4">S♪ght<font color="#006666"><em>Read</em></font></Typography>
                                            <Typography variant="subtitle1">
                                                SightRead is a simple React web app that generates and displays a musicXML file as sheet music, based on user inputs.
                                            </Typography>
                                            <br />
                                            <Button variant="outlined" color="primary" href="https://toodom02.github.io/SightRead/" target=" _blank" rel="noreferrer">
                                                View Live
                                            </Button>
                                            <Button href="https://github.com/toodom02/SightRead" target=" _blank" rel="noreferrer">
                                                GitHub
                                            </Button>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Card className="project-card">
                                    <CardActionArea>
                                        <CardMedia
                                            className="media-card"
                                            image={
                                                'https://raw.githubusercontent.com/toodom02/GameOfLife/main/src/static/glider.svg'
                                            }
                                        />
                                        <CardContent>
                                            <Typography variant="h4">Conway's Game of Life</Typography>
                                            <Typography variant="subtitle1">
                                                A simulation of John Conway's Game of Life cellular automaton, built with JavaScript.
                                            </Typography>
                                            <br />
                                            <Button variant="outlined" color="primary" href="https://toodom02.github.io/GameOfLife/" target=" _blank" rel="noreferrer">
                                                View Live
                                            </Button>
                                            <Button href="https://github.com/toodom02/GameOfLife" target=" _blank" rel="noreferrer">
                                                GitHub
                                            </Button>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Card className="project-card">
                                    <CardActionArea>
                                        <CardMedia
                                            className="media-card"
                                            image={
                                                'https://avatars.githubusercontent.com/u/48385221?s=400&v=4'
                                            }
                                        />
                                        <CardContent>
                                            <Typography variant="h4">img-to-css</Typography>
                                            <Typography variant="subtitle1">
                                                img-to-css uses a BFS algorithm with openCV's edge detection to convert images into pure CSS/HTML.
                                            </Typography>
                                            <br />
                                            <Button href="https://github.com/toodom02/img-to-css" target=" _blank" rel="noreferrer">
                                                GitHub
                                            </Button>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Card className="project-card">
                                    <CardActionArea style={{cursor: "auto"}}>
                                        <CardMedia
                                            className="media-card"
                                            image={
                                                'https://raw.githubusercontent.com/toodom02/KingFisher/master/flasksite/static/kngfshr.png'
                                            }
                                        />
                                        <CardContent>
                                            <Typography variant="h4">King<font color="LightBlue"><b><em>Fisher</em></b></font></Typography>
                                            <Typography variant="subtitle1">
                                                Python-Flask based Website developed for the Kingfisher Trust Cafe, with built in CMS.
                                            </Typography>
                                            <br />
                                            <Button variant="outlined" color="primary" href="https://kingfisher-o0o1.onrender.com/" target=" _blank" rel="noreferrer">
                                                View Live
                                            </Button>
                                            <Button href="https://github.com/toodom02/KingFisher" target=" _blank" rel="noreferrer">
                                                GitHub
                                            </Button>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                        <br />
                        <Typography variant="subtitle1">
                            To see more (public) projects, visit my&nbsp;
                            <a href="https://github.com/toodom02" target="_blank" rel="noreferrer" style={{ color: "black" }}>
                                GitHub
                            </a>.
                        </Typography>
                    </div>
                </div>
            </Container>
        </Fragment >
    )
};

export default Projects;
