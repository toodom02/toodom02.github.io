import React, { Component } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import ReCAPTCHA from 'react-google-recaptcha';
import { Footer } from './Footer';

function ContactForm() {
    const [state, handleSubmit] = useForm("xdoyypjr");
    if (state.succeeded) {
        return (
            <React.Fragment>
                <Typography variant="h2">
                    Message sent!
                </Typography>
                <Typography variant="subtitle1">Thanks for getting in contact!</Typography>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <Typography variant="h2">Contact Me</Typography>
            <form className="contactform" onSubmit={handleSubmit}>
                <TextField
                    required
                    label="Name"
                    id="name"
                    type="name"
                    name="name"
                />
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />
                <br />
                <TextField
                    required
                    label="Email"
                    id="email"
                    type="email"
                    name="email"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <br />
                <br />
                <TextField
                    required
                    multiline
                    label="Message"
                    placeholder="Start typing your message here..."
                    rows={8}
                    variant="outlined"
                    id="message"
                    name="message"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <br />
                <ReCAPTCHA className="form_group_recaptcha"
                    sitekey="6LeI0UwcAAAAAKWyTYxlNRa1nQOe5uBeBpysILLC"
                />
                <br />
                <Button
                    variant="contained"
                    type="submit"
                    disabled={state.submitting}
                >
                    Submit
                </Button>
            </form>
        </React.Fragment >
    );
}

export class FormContact extends Component {

    render() {
        return (
            <React.Fragment>
                <Container>
                    <div id="contact">
                        <Container>
                            <ContactForm />
                            <br />
                            <Footer />
                        </Container>
                    </div>
                </Container>
            </React.Fragment >
        )
    }
}

export default FormContact
