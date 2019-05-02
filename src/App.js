import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Banner from './components/Banner';




class App extends Component {
  render() {
    return (
      <Container>
        <Banner />
        <Projects />
        <ContactMe />
      </Container>
    );
  }
}

export default App;
