import React, { Component } from 'react'
import { connect } from 'react-redux';

class ToDoForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            theme: '',
            text: '',
            done: false
            
        }
    }

    
    getValue = (e) => {
        let value = e.target.value;
        let className = e.target.className;
        
        if(className){
            this.setState({
                text: value
            })
        } else {
            this.setState({
                theme: value
            })
        }   
    }

    submit = (e) => {
        e.preventDefault();   

        this.props.addTodo(this.state)

        this.setState({
            id: this.state.id + 1,
            theme: '',
            text: '',
        })
    }

    render () {
        return (
            <div>
                <h1>ToDoList</h1>
                <form className='form' onSubmit={this.submit}>
                    <label className='label'>Theme ToDo</label>
                    <input type='text' placeholder='enter theme' value={this.state.theme} onChange={this.getValue}/>
                    <label className='label'>Text ToDo</label>
                    <textarea className='textarea' value={this.state.text}type='text' placeholder='enter the text' cols={20} onChange={this.getValue}/>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => {
            dispatch({
                type: 'ADD_TODO',
                payload: todo
            })
        }}
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm)