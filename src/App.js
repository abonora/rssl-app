import './App.scss';
import './components/Nav/nav.scss';
import './styles/team.scss';
import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";

import Home from './pages/home';
import Standings from './pages/standings';
import Teams from './pages/teams';
import Team from './components/Team/team';
import Nav from './components/Nav/nav';
import Footer from './components/Footer/footer';


const teamPage = ({ match, location }) => {
  const {
    params: { teamId, teamName }
  } = match;

  return (
    <main id="team">
      <NavLink className="back-to-teams" to={'/rssl/teams'}>
      <svg xmlns="http://www.w3.org/2000/svg" width="41.441" height="41.441" viewBox="0 0 41.441 41.441">
        <path id="ic_keyboard_arrow_left_24px" d="M23.354,27.443l-9.49-9.511,9.49-9.511L20.432,5.5,8,17.932,20.432,30.365Z" transform="translate(4.432 3.5)"/>
        <path id="ic_panorama_fish_eye_24px" d="M22.721,2A20.72,20.72,0,1,0,43.441,22.72,20.7,20.7,0,0,0,22.721,2Zm0,37.3A16.576,16.576,0,1,1,39.3,22.72,16.6,16.6,0,0,1,22.721,39.3Z" transform="translate(-2 -2)"/>
      </svg>

        <span>Back to teams</span>
      </NavLink>
      <Team teamID={teamId} teamName={teamName}/>
    </main>
  );
};


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/rssl" component={Home} />
          <Route
            exact
            path="/rssl/teams"
            component={() => <Teams title={'Teams'} />}
          />
          <Route exact path="/rssl/teams/:teamId/:teamName" component={teamPage} />
          <Route
            exact
            path="/rssl/standings"
            component={() => <Standings title={'Standings'} />}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
