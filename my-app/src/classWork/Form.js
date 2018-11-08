import React, { Component } from 'react';
import Input from './Input'
import Toggler from './Toggler'
import Choose from './Choose'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputLogin: '',
            inputPass: '',
            gender: '',
            age: '',
            language: ''
        }
    }

    changeActiveToggle = (gender) => {
        this.setState({
            gender: gender
        })
    }

    changeLanguageToggle = (lang) => {
        this.setState({
            language: lang
        })
    }

    submit = (e) => {
        e.preventDefault()

        let db = {
            login: this.state.inputLogin,
            password: this.state.inputPass,
            gender: this.state.gender,
            age: this.state.age,
            language: this.state.language
        }

        console.log(db)

        this.setState({
            inputLogin: '',
            inputPass: '',
            gender: '',
            age: '',
            language: ''
        })
        e.target.reset();
    }

    getValue = (e) => {
        let value = e.target.value;
        let type = e.target.type;

        if(type === 'text'){
            this.setState({
                inputLogin: value
            })
        } else if(type === 'password') {
            this.setState({
                inputPass: value
            })
        } else {
            this.setState({
                age: value
            })
        }
    }

    render () {
        let { gender, language } = this.state
        return (
            <form className="Form" onSubmit={this.submit}>
                <Input type={'text'} name='Login' placeholder={'Enter your Login'} handler={this.getValue} />
                <Input type={'password'} name='Password' placeholder={'Enter your password'} handler={this.getValue} />
                <Toggler name={'Gender'} activeToggle={gender} action={this.changeActiveToggle}>
                    <Choose name={'Male'} />
                    <Choose name={'Female'} />
                </Toggler>
                <Input type={'number'} min={0} handler={this.getValue}/>
                <Toggler name={'Language'} activeToggle={language} action={this.changeLanguageToggle}>
                    <Choose name={'Ua'} />
                    <Choose name={'En'} />
                </Toggler>            
                <button>Send</button>
            </form>
        )
    }
}

export default Form;