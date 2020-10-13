import React, { Component, Fragment } from 'react';
import TeamSelector from '../components/TeamSelector';
import {apiKey} from '../token'
import TeamDisplay from '../components/TeamDisplay';


export default class FootballContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            teamId:null,
            teamPlayers:[]

        };

        this.onTeamSelected = this.onTeamSelected.bind(this);
    }

    onTeamSelected(id){

        // const selectedTeamId = this.state.teams.find(team => team.id === parseInt(id))
        // this.setState({teamId:selectedTeamId.id})

        // console.log(" team ID: "+this.state.teamId);
        // const url2 = `http://api.football-data.org/v2/teams/${this.state.teamId}/`;
        const url2 = `http://api.football-data.org/v2/teams/${id}/`;

        console.log(url2);

            fetch(url2, {
                headers: {
                    'X-Auth-Token': apiKey
                }
            })
                .then(response => response.json())
                .then(data => this.setState({teamPlayers: data.squad}))
                .catch(err => console.error(err));

        
    
    }


    componentDidMount() {
        const url1 = 'http://api.football-data.org/v2/teams';
        fetch(url1, {
            headers: {
                'X-Auth-Token': apiKey
            }
        })
            .then(response => response.json())
            .then(data => this.setState({teams: data.teams}))
            .catch(err => console.error(err));
    }

    render(){
        return(
        <Fragment>
            <h2> Football DATA container </h2>
            <TeamSelector teams={this.state.teams} onTeamSelected={this.onTeamSelected}/>
            
           
            <TeamDisplay players={this.state.teamPlayers}/>

        </Fragment>
        )

    }
}
