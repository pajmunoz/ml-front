import React, {Component} from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Search from './components/Search/search';
import Results from './components/Results/results';
import Breadcrumbs from './components/Breadcrums/breadcrumbs';
import Home from './components/Home/home';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <section className="header">
            <Search></Search>
        </section>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route render={()=><p>No he encontré la página</p>}></Route>
        </Switch>
      <section className="footer"></section>
    </div>
  </Router>);
  }
}

export default App;
