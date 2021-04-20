import React from 'react';
import logo from './logo.svg';
import './App.css';
import Project from './content/Project';
import { Container, Jumbotron, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <Navbar fixed="top" color = "faded" bg="dark" variant="dark">
        
        <Navbar.Brand>Dylan Barva</Navbar.Brand>
        <Nav.Link style={{color: 'white'}} href="#github">Github</Nav.Link>
        <Nav.Link style={{color: 'white'}} >Projects</Nav.Link>
        <Nav.Link style={{color: 'white'}}>Courses</Nav.Link>
      </Navbar>
      /* <Project projectName = "Taco" projectDescription = "Potato" projectTimeline = "Now"></Project> */
  );
}

export default App;
