import React from 'react';
import logo from './logo.svg';
import './App.css';
import Project from './content/Project';
import AboutMe from './content/AboutMe';
import { Container, Jumbotron, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
    <Container>
    <Navbar style={{position : 'sticky'}} fixed="top" color = "faded" bg="light" variant="light">
        <Navbar.Brand>Dylan Barva</Navbar.Brand>
        <Nav.Link style={{color: 'black'}} href="#github">Github</Nav.Link>
        <Nav.Link style={{color: 'black'}} >Projects</Nav.Link>
        <Nav.Link style={{color: 'black'}}>Courses</Nav.Link>
    </Navbar>
      <AboutMe></AboutMe>
      <Project projectName = "Taco" projectDescription = "Potato" projectTimeline = "Now"></Project> 
    </Container>
    </div>
  );
}

export default App;
