import React, { Component, PropTypes } from 'react'

class LoaderImg extends Component {
    constructor(props){
        super(props)

        this.state = {
            loading: true
        }
    }

    componentWillMount() {
        this.setState({
            loading: false
        })
    }

    render () {
        let { href } = this.props
        let { loading } = this.state

        if(loading){
            return <h1>Loading...</h1>
        } else {
            return (
                <img className='Image' alt="Cat" src={href} />
            )
        }
    }
}

LoaderImg.propTypes = {
    
}

export default LoaderImg