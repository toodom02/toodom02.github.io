import React from 'react';
import { Container, Card, CardContent, CardActionArea, CardMedia, Typography, Button, Grid } from '@mui/material';

const ProjectCard = (props) => {
    const {
        image,
        title,
        subtitle,
        link,
        githublink
    } = props
    return (                            
        <Grid item xs={12} sm={6}>
            <Card className="project-card">
                <CardActionArea disableRipple>
                    <CardMedia
                        className="media-card"
                        image={image}
                    />
                    <CardContent>
                        <Typography variant="h4">{title}</Typography>
                        <Typography variant="subtitle1">
                            {subtitle}
                        </Typography>
                        <br />
                        {link ? <Button variant="outlined" color="primary" href={link} target=" _blank" rel="noreferrer">
                            View Live
                        </Button>
                        : ''}
                        <Button href={githublink} target=" _blank" rel="noreferrer">
                            GitHub
                        </Button>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

const Projects = () => {
    return (
        <>
            <Container>
                <div id="projects">
                    <div className="Content">
                        <Typography variant="h2">Projects</Typography>
                        <br />
                        <Grid
                            container
                            justifyContent="space-evenly"
                            spacing={6}>

                            <ProjectCard image='https://raw.githubusercontent.com/ocaml/ocaml-logo/master/Colour/SVG/colour-icon.svg' 
                                title="OCamlregextkit"
                                subtitle='An OCaml library providing simple interface to operations on regular expressions, NFAs, and DFAs.'
                                githublink='https://github.com/toodom02/ocamlregextkit'
                            />
                            <ProjectCard image='https://raw.githubusercontent.com/d3/d3-logo/master/d3.svg' 
                                title="montco-911-vis"
                                subtitle='An interactive D3 visualisation of emergency 911 calls in Montgomery County, PA.'
                                link='https://toodom02.github.io/montco-911-vis/'
                                githublink='https://github.com/toodom02/montco-911-vis'
                            />
                            <ProjectCard image='https://raw.githubusercontent.com/toodom02/AroundTheWorld/main/static/logo.png' 
                                title="Around the World"
                                subtitle='A 3D JavaScript game built with WebGL using the three.js library, and the cannon-es physics engine.'
                                link='https://toodom02.github.io/AroundTheWorld/'
                                githublink='https://github.com/toodom02/AroundTheWorld'
                            />
                            <ProjectCard image='https://raw.githubusercontent.com/toodom02/games-js/master/static/logo.svg' 
                                title="GAMES-JS"
                                subtitle='GAMES-JS is a small collection of classic single-player and two-player games, built from the ground up in pure HTML, CSS, and JavaScript.'
                                link='https://toodom02.github.io/games-js/'
                                githublink='https://github.com/toodom02/games-js'
                            />
                            <ProjectCard image='https://avatars.githubusercontent.com/u/48385221?s=400&v=4' 
                                title="img-to-css"
                                subtitle="img-to-css uses a BFS algorithm with openCV's edge detection to convert images into pure CSS/HTML with Python."
                                githublink='https://github.com/toodom02/img-to-css'
                            />
                            <ProjectCard image='https://raw.githubusercontent.com/toodom02/SightRead/master/public/logo.svg' 
                                title={<>S♪ght<font color="#006666"><em>Read</em></font></>}
                                subtitle='SightRead is a simple React web app that generates and displays a musicXML file as sheet music.'
                                link='https://toodom02.github.io/SightRead/'
                                githublink='https://github.com/toodom02/SightRead'
                            />

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
        </>
    )
};

export default Projects;
