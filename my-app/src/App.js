import React, { Component } from 'react';
import Main from './Main'
import About from './About'
import List from './List'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <About /> 
        <List /> 
      </div>
    );
  }
}

export default App;
