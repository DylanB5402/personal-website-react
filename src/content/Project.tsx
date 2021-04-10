import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

type ProjectProps  = {
    projectName : String;
    projectDescription : String;
    projectTimeline : String;
}
class Project extends Component<ProjectProps> {

    constructor(props : ProjectProps) {
        super(props);
        
    }

    render() {
        return(
            <Container>
                <p> {this.props.projectName} </p>
            </Container>
        )
    }
}
export default Project;