import React, { Component } from 'react';
// import { Switch, Route } from 'react-router'
// import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import ToDoForm from './ToDoForm'
import ToDoItem from './ToDoItem'
import './App.css'

class App extends Component {
    render() {
        const { todos, deleteTodo, changeStatus } = this.props;
        return (
            <div className="App">
                <ToDoForm />
                {
                    todos.map(item => 
                        <ToDoItem key={item.id} {...item} deleteTodo={deleteTodo} changeStatus={changeStatus}/>
                    )
                }
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    todos: state.todos
})

let mapDispatchToProps = (dispatch) => ({
    deleteTodo: (id) => {
        dispatch({
            type: "DELETE_TODO",
            payload: id
        })
    },
    changeStatus: (id) => {
        dispatch({
            type: "CHANGE_TODO",
            payload: id
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);