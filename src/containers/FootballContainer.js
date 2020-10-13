import React, { Component, Fragment } from 'react';
import {apiKey} from '../token' 


export default class FootballContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            competitions: []

        };
    }


    componentDidMount() {
console.log( " message CODE: " + process.env.REACT_APP_FOOTBALL_API_KEY)

        const url = 'http://api.football-data.org/v2/competitions';
        fetch(url, {
            headers: {
                'X-Auth-Token': apiKey
            }
        })
            .then(response => response.json())
            .then(data => this.setState({competitions: data}))
            .catch(err => console.error(err));
    }

    render(){
        return(
        <Fragment>
            <h2> Football DATA container </h2>


        </Fragment>
        )

    }
}
