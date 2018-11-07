import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import { NavLink } from 'react-router-dom'

import Uploader from './Uploader';
import Button from './Button';

import './style.css'

class HomeWork extends Component {
  render() {
    return (
        <div className="HomeWork">       
            <div className="navigation">
                <NavLink className="classWorkLink" activeClassName="selected" to="/homeWork/uploader">Task 1</NavLink>
                <NavLink className="classWorkLink" activeClassName="selected" to="/homeWork/button">Task 2</NavLink>
            </div>

            <Switch>
                <Route path="/homeWork/uploader" component={Uploader}/> 
                <Route path="/homeWork/button" component={Button}/> 
            </Switch>
        </div>
    );
  }
}

export default HomeWork;
