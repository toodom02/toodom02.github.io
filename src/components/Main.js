import React, { Fragment } from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import FormContact from './FormContact';

const Main = () => {
    return (
        <Fragment>
            <Home />

            <About />

            <Projects />

            <FormContact />
        </Fragment>
    )
};

export default Main;
