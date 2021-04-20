import React from 'react';
import './nav.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useParams,
    useRouteMatch
  } from "react-router-dom";

function Nav() {
  return (
    <header>
        <img src="/rssl/rssl-logo.png" alt="RSSL Fantasy Hockey Manager" title="RSSL Fantasy Hockey Manager" />
        <nav>
            <NavLink exact to="/rssl" activeClassName="active">Home</NavLink>
            <NavLink exact to="/rssl/teams" activeClassName="active">Teams</NavLink>
            <NavLink exact to="/rssl/standings" activeClassName="active">Standings</NavLink>
        </nav>
    </header>
  );
}

export default Nav;
