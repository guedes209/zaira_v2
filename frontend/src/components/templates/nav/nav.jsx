import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './nav.css';
import Home from '../../pages/home/Home';
import CRUDProdutos from '../../pages/CRUDProdutos/crudprodutos';
import CRUDPedidosCompra from '../../pages/CRUDPedidosCompra/crudpedidoscompra';

export default props => {
  return (
    <div className='container'>
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Teste Starti</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/crudprodutos">CRUD de produtos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/crudpedidoscompra">CRUD de pedidos de compra</Link>
                    </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route path="/CRUDProdutos">
                    <CRUDProdutos></CRUDProdutos>
                </Route>
                <Route path="/CRUDPedidosCompra">
                    <CRUDPedidosCompra></CRUDPedidosCompra>
                </Route>
                <Route path="/">
                    <Home></Home>
                </Route>
            </Switch>
        </Router>
    </div>
  )
}