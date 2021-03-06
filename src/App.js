import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Search from './components/Search/search';
import Results from './components/Results/results';
import Breadcrumbs from './components/Breadcrums/breadcrumbs';
import Home from './components/Home/home';
import Detail from './components/Detail/detailView';


class Index extends Component {


  render() {
    return (<div className="App">
      <section className="header">
        <Search />
      </section>
      <Breadcrumbs />
      <Home />
      <section className="footer"/>
    </div>);
  }
}

function Topic({match}) {
  return (<section className="container content">

        <Breadcrumbs />
        <Detail prodId={`https://api.mercadolibre.com/items/` + match.params.id}></Detail>

  </section>);
}

function AppRouter() {
  return (<Router>
    <div className="App">
      <section className="header">
        <Search />
      </section>
      <Route path="/" exact="exact" component={Home}/>
      <Route path="/details/:id" component={Topic}/>
    </div>
  </Router>);
}

export default AppRouter;
