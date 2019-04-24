import React, {Component} from 'react';

import Search from '../Search/search';
import Results from '../Results/results';
import Breadcrumbs from '../Breadcrums/breadcrumbs';

class Home extends Component {

  render() {
    return (<div>
      <section className="content container">
        <Breadcrumbs></Breadcrumbs>
        <Results></Results>
      </section>
      <section className="footer"></section>
    </div>);
  }
}

export default Home;
