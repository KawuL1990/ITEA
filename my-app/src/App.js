import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import { NavLink } from 'react-router-dom'

import ClassWork from './classWork/ClassWork'
import HomeWork from './homeWork/HomeWork'
import './App.css'

class App extends Component {
  render() {
    return (
        <div className="App">

            <div className="navigation">
                <NavLink className="link" activeClassName="activeLink" to="/classWork">ClassWork</NavLink>
                <NavLink className="link" activeClassName="activeLink" to="/homeWork">HomeWork</NavLink>
            </div>

        
            <Switch>
                <Route path="/classWork" component={ClassWork}/>
                <Route path="/homeWork" component={HomeWork}/>
            </Switch>
        </div>
    );
  }
}

export default App;
