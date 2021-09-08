import React, { Component } from 'react';
import { Home } from './Home';
import { About } from './About';
import { Projects } from './Projects';
import { FormContact } from './FormContact';

export class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Home />

                <About />

                <Projects />

                <FormContact />
            </React.Fragment>
        )
    }
}

export default Main
