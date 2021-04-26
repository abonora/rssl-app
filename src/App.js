import './App.scss';
import './components/Nav/nav.scss';
import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
    <main>
      <Link to={'/rssl/teams'}>Back To Teams</Link>
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
