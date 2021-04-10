import React from 'react';
import logo from './logo.svg';
import './App.css';
import Project from './content/Project';
import { Container, Jumbotron } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Jumbotron fluid style={{backgroundColor : "blue"}}>
          <h1 style={{}}>Dylan Barva</h1>
      </Jumbotron>
      {/* <Project projectName = "Taco" projectDescription = "Potato" projectTimeline = "Now"></Project> */}
      
    </Container>
  );
}

export default App;
