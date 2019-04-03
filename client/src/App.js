import React, { Component } from 'react';
import './App.css';
import Content from './components/Content.js';
import Nav from './components/Nav.js';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='desktop'>
          <Nav />
        </div>
        <Content />
        <div className='mobile'>
          <Nav />
        </div>
      </div>
    );
  }
}

export default App;
