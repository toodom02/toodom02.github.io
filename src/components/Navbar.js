import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Container } from '@material-ui/core';


export class Navbars extends Component {

    render() {

        return (
            <React.Fragment>
                <Navbar collapseOnSelect fixed="top" bg="transparent" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="nav" />
                        <Navbar.Collapse id="nav" >
                            <Nav className="me-auto" />
                            <Nav className="ml-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#projects">Projects</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </React.Fragment >
        );
    }
}

export default Navbars