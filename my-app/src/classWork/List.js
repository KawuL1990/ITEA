import React, { Component } from 'react';
import ListItem from './ListItem'
import './style.css'

class List extends Component {
    constructor(props){
        super(props)

        this.state = {
            loading: true,
            db: []
        }
    }

    componentWillMount() {
        fetch('http://www.json-generator.com/api/json/get/bTVPoUMgpu?indent=2')
            .then(response => {
                if(response.ok){
                    return response.json()
                }
            })
            .then(data => {
                data.map(item => {
                   return this.setState({
                        loading: false,
                        db: [...this.state.db, {interviewed: false, user: item}]
                    })
                })
            })
    }

    render() {
        let { loading, db } = this.state;

        if(!loading){
            return (
                <div className="List">  
                    {db.map(( person, key ) => <ListItem key={key} {...person}/>)}
                </div>
            );
        } else {
            return (
                <h1>Loading...</h1>
            );
        }
    }
}

export default List;
