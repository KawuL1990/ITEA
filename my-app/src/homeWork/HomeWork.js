import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import { NavLink } from 'react-router-dom'
import LoaderImg from './LoaderImg'
import Table from './Table'

import './style.css'

class HomeWork extends Component {
  render() {
    return (
        <div className="HomeWork">       
            <div className="navigation">
                <NavLink className="classWorkLink" activeClassName="selected" to="/homeWork/loader">Task 1</NavLink>
                <NavLink className="classWorkLink" activeClassName="selected" to="/homeWork/table">Task 2</NavLink>
            </div>

            <Switch>
                <Route path="/homeWork/loader" exact render={() => <LoaderImg href='https://medialeaks.ru/wp-content/uploads/2017/10/catbread-02-586x500.jpg'/>}/> 
                <Route path="/homeWork/table" component={Table}/> 
            </Switch>
        </div>
    );
  }
}

export default HomeWork;
