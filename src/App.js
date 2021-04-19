import logo from './logo.svg';
import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Home from './pages/home';
import Standings from './pages/standings';
import Teams from './pages/teams';
import Nav from './components/Nav/nav';
import Footer from './components/Footer/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>

        <Switch>
          <Route exact path="/rssl">
            <Home />
          </Route>
          <Route exact path="/rssl/teams">
            <Teams />
          </Route>
          <Route exact path="/rssl/standings">
            <Standings />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
    // <div className="App">
    //   <header className="App-header">
        
    //     <Home />
    //     <Standings/>
    //     <Teams></Teams>
    //   </header>
    // </div>
  );
}

export default App;
