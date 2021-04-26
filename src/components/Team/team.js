import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import Loading from './../Loading/loading';

// All Teams: https://albertobonora.com/feeds/wp-json/wp/v2/teams/
// Individual Team: https://albertobonora.com/feeds/wp-json/wp/v2/teams/288
// Individual Player: https://albertobonora.com/feeds/wp-json/wp/v2/players/276


class Team extends Component{
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            teamData: {
                name: null,
                slug: null,
                teamID: null,
                teamGM: null,
                teamLogo: null,
                primaryColour: null,
                secondaryColour: null,
                altColour: null,
                keeper1id: null,
                keeper2id: null,
                keeper3id: null,
                keeper4id: null
            }
        };

    }
    
    componentDidMount(){
        fetch('https://albertobonora.com/feeds/wp-json/wp/v2/teams/'+this.props.teamID)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                this.setState({
                    isLoaded: true,
                    //items: result
                    teamData: {
                        name: result.title.rendered,
                        slug: result.slug,
                        teamID: result.id,
                        teamGM: result.meta_box.owner,
                        teamLogo: result.meta_box.teamLogo[0].full_url,
                        primaryColour: result.meta_box.team_primary_colour,
                        secondaryColour: result.meta_box.team_secondary_colour,
                        altColour: result.meta_box.team_alt_colour,
                        keeper1id: result.meta_box.players_to_teams_from[0],
                        keeper2id: result.meta_box.players_to_teams_from[1],
                        keeper3id: result.meta_box.players_to_teams_from[2],
                        keeper4id: result.meta_box.players_to_teams_from[3]
                    }
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }
    render(){
        return (
            
            <div>
                {
                    this.state.error &&
                    <div>
                        <h1>{this.state.error}</h1>
                    </div>
                }
                {
                    !this.state.isLoaded &&
                    <Loading/>
                }
                {
                    !this.state.error && this.state.isLoaded &&
                    <div>
                        Team Slug: {this.props.teamName}<br />
                        Team ID: {this.props.teamID}<br />
                        Team GM/Owner: {this.state.teamData.teamGM}<br />
                        Team Name Full: {this.state.teamData.name}<br />
                        Team Logo: {this.state.teamData.teamLogo}<br />
                        Team Color 1: {this.state.teamData.primaryColour}<br />
                        Team Color 2: {this.state.teamData.secondaryColour}<br />
                        Team Color 3: {this.state.teamData.altColour}<br />
                        Keeper ID 1: {this.state.teamData.keeper1id}<br />
                        Keeper ID 2: {this.state.teamData.keeper2id}<br />
                        Keeper ID 3: {this.state.teamData.keeper3id}<br />
                        Keeper ID 4: {this.state.teamData.keeper4id}<br />
                    </div>
                }
            </div>
        )
    }
}

export default Team;