import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import { NavLink } from 'react-router-dom'
import Gender from './Gender'
import Input from './Input'
import Form from './Form'

import './style.css'

class ClassWork extends Component {
    constructor(props){
        super(props)

        this.state = {
            inputValue: ''
        }
    }

    getValue = (e) => {
        let value = e.target.value;

        this.setState({
            inputValue: value
        })
    }

  render() {
      let { inputValue } = this.state;
    return (
        <div className="ClassWork">  

            <div className="navigation">
                <NavLink className="classWorkLink" activeClassName="selected" to="/classWork/gender">Task 1</NavLink>
                <NavLink className="classWorkLink" activeClassName="selected" to="/classWork/input">Task 2</NavLink>
                <NavLink className="classWorkLink" activeClassName="selected" to="/classWork/form">Task 3</NavLink>
            </div>

            <Switch>
                <Route path="/classWork/gender" component={Gender}/> 
                <Route path="/classWork/input" render={() => <Input handler={this.getValue} type={'text'} name='input' placeholder='enter what you whant' value={inputValue}/>}/> 
                <Route path="/classWork/form" component={Form}/> 
            </Switch>
        </div>
    );
  }
}

export default ClassWork;
