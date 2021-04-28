import React, { Component, useEffect } from 'react';
import Loading from './../Loading/loading';
import DOMPurify from 'dompurify';

// All Teams: https://albertobonora.com/feeds/wp-json/wp/v2/teams/
// Individual Team: https://albertobonora.com/feeds/wp-json/wp/v2/teams/288
// Individual Player: https://albertobonora.com/feeds/wp-json/wp/v2/players/276


class Team extends Component{
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            keepers: [],
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
                    //isLoaded: true,
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
                },() =>{
                    fetch("https://albertobonora.com/feeds/wp-json/wp/v2/players?include="+this.state.teamData.keeper1id+","+this.state.teamData.keeper2id+","+this.state.teamData.keeper3id+","+this.state.teamData.keeper4id)
                    .then(res => res.json())
                    .then(
                        (result) => {
                            console.log(result);
                            this.setState({
                                isLoaded: true,
                                keepers: result
                            });
                        }
                    )
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
                    <div className="team-wrapper">
                        <div className="imgWrapper">
                            <img src={`/rssl/team-logos/${this.props.teamName}.png`}/>
                        </div>
                        <h3 dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.state.teamData.name)}}></h3>
                        <h5>GM: {this.state.teamData.teamGM}</h5>

                        <div className="player-wrapper">
                            <ul>
                                {this.state.keepers.map((keeper, index) => (
                                <li key={index}>
                                    Name: {keeper.title.rendered} <br />
                                    Team: {keeper.meta_box.nhlTeam} <br />
                                    Photo: {keeper.meta_box.playerPhoto[0].full_url} <br />
                                    Contract: {keeper.meta_box.contractLength} 
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Team;