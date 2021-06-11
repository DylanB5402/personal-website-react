import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

class AboutMe extends Component {

    render() {
        return(
            <Jumbotron>
                <h2>About Me:</h2>
                <p> Hello, I'm Dylan Barva, a first year student at UC San Diego (Class of 2024), studying Computer Science.</p>
            </Jumbotron>
        )
    }

}

export default AboutMe;