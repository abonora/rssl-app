import React, { Component } from 'react';
import DOMPurify from 'dompurify';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    NavLink
  } from "react-router-dom";
import Loading from './../components/Loading/loading';
import './../styles/teams.scss';

// All Teams: https://albertobonora.com/feeds/wp-json/wp/v2/teams/
// Individual Team: https://albertobonora.com/feeds/wp-json/wp/v2/teams/288
// Individual Player: https://albertobonora.com/feeds/wp-json/wp/v2/players/276

class Teams extends Component{
  constructor() {
    super();

    this.state = {
        error: null,
        isLoaded: false,
        teams: []
    };

  }
  componentDidMount(){
      fetch("https://albertobonora.com/feeds/wp-json/wp/v2/teams/")
      .then(res => res.json())
      .then(
          (result) => {
              this.setState({
                  isLoaded: true,
                  teams: result
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
        <main id="teams">
            <h1>{this.props.title}</h1>
            <p>In here we need to call the ALL TEAMS feed and store the post id, teamname, GM, colours for the jersey</p>
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
                <div className="wrapper">
                    <ul>
                    {this.state.teams.map((team, index) => (
                      <li key={index}>
                        <NavLink to={`teams/${team.id}/${team.slug}`}>
                          <div className="imgWrapper">
                            <img src={`/rssl/team-logos/${team.slug}.png`}/>
                          </div>
                          <h3 dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(team.title.rendered)}}></h3>
                          <h5>GM: {team.meta_box.owner}</h5>
                        </NavLink>
                      </li>
                    ))}
                    </ul>
                </div>
            }
        </main>
    )
  }
}

export default Teams;