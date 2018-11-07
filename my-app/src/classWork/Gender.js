import React, { Component } from 'react'
import Toggler from './Toggler'
import Choose from './Choose'

class Gender extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: 'Gender',
            active: 'Male'
        }
    }

    changeActiveToogle = (gender) => {
        this.setState({
            active: gender
        })
    }

    render () {
        let { name, active } = this.state;
        return (
            <div className='Gender'>
                <Toggler name={name} activeToggle={active} action={this.changeActiveToogle}>
                    <Choose name={'Male'} />
                    <Choose name={'Female'} />
                </Toggler>
            </div>
        )
    }
}

export default Gender;