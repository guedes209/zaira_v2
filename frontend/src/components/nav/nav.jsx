import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useRouteMatch, useParams } from 'react-router-dom';

import './nav.css';
import Home from '../body/home/Home';
import ListaPresente from '../body/listaPresente/ListaPresente';
import LuaDeMel from '../body/luaDeMel/LuaDeMel';

export default props => {
  return (
    <div>
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/home">Marcella & Bruno</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/listaPresente">Presente</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/luaDeMel">Lua de Mel</Link>
                    </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="/listaPresente">
                    <ListaPresente></ListaPresente>
                </Route>
                <Route path="/luaDeMel">
                    <LuaDeMel></LuaDeMel>
                </Route>
            </Switch>
        </Router>
    </div>
  )
}