import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import { BrowserRouter } from "react-router-dom";
import Main from './Main'
import About from './About'
import List from './List'
import ListItem from './ListItem'
import Navigation from './Navigation'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Navigation />

            <Switch>
              <Route path="/" exact component={Main}/>
              <Route path="/about" component={About}/>
              <Route path="/list" exact component={List}/>
              <Route path="/list/:itemId" exact component={ListItem}/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
