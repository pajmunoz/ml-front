import React, {Component} from 'react';
import './App.scss';
import Search from './components/Search/search';
import Results from './components/Results/results';
import Breadcrumbs from './components/Breadcrums/breadcrumbs';

class App extends Component {
  render() {
    return (<div className="App">
      <section className="header">
          <Search></Search>
      </section>
      <section className="content container">
      <Breadcrumbs></Breadcrumbs>
      <Results></Results>
      </section>
      <section className="footer"></section>
    </div>);
  }
}

export default App;
