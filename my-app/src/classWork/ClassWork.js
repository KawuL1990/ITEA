import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import { NavLink } from 'react-router-dom'

import Button from './Button'
import List from './List'
import './style.css'

class ClassWork extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    alertMessage = () => {
        alert('IM Button')
    }

  render() {
    return (
        <div className="ClassWork">  

            <div className="navigation">
                <NavLink className="classWorkLink" activeClassName="selected" to="/classWork/button">Task 1</NavLink>
                <NavLink className="classWorkLink" activeClassName="selected" to="/classWork/list">Task 2</NavLink>
            </div>

            <Switch>
                <Route path="/classWork/button" exact render={() => <Button func={this.alertMessage} value={'I`m Button'}/>}/> 
                <Route path="/classWork/list" component={List}/> 
            </Switch>
        </div>
    );
  }
}

export default ClassWork;
