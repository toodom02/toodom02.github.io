import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { ReactComponent as GlitchSVG } from '../assets/glitch.svg';


const NotFoundPage = () => {

    const parallax = (e) => {
        const glitchelem = document.getElementById("glitch");
        const glitchblueelem = document.getElementById("glitch-blue");
        const glitchredelem = document.getElementById("glitch-red");

        const midX = window.innerWidth / 2 - e.clientX;
        const midY = window.innerHeight / 2 - e.clientY;
        glitchelem.style.transform = `translateX(${(midX * 4) / 700}px) translateY(${(midY * 3) / 700} px)`;
        glitchblueelem.style.transform = `translateX(${(-midX * 3) / 700}px) translateY(${(midY * 4) / 700}px)`;
        glitchredelem.style.transform = `translateX(${(midX * 2) / 700}px) translateY(${(-midY * 5) / 700}px)`;
    };
    window.addEventListener("mousemove", parallax);

    return (
        <>
            <div id="notFound" >
                <Container>
                    <GlitchSVG />
                    <br />
                    <Typography variant="subtitle1">Something went wrong</Typography>
                    <br />
                    <Button href="/">Home</Button>
                </Container>
            </div >
        </>
    )
};

export default NotFoundPage;
