import React from 'react'

class Button extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            ref: React.createRef()
        }
    }

    addAnimation = () => {
        
    }

    render(){
        let { ref } = this.state;
        return (
            <button ref={ref} onClick={this.addAnimation} className="Button">Click for Animation</button>
        )
    }
}

export default Button;