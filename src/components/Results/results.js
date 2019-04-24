import React, {Component} from 'react';
import ResultsItem from './ResultsItem/resultsItem';
import API from '../../Data/api';
import axios from 'axios';

class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items:[]
    }
  }
  componentDidMount() {
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=tecnologia`).then(res => {
      const items = res.data.results;
      this.setState({items});
      console.log(items);
    })
    console.log(this.state)
  };

  render() {
    let style = {
      container: 'container',
      row: 'row',
      col: 'col',
      bgWhite: 'bgWhite'
    }
    return (<div className={style.row}>
      <div className="col-10 offset-1 p-0 bgWhite">
        {
        this.state.items.map((product, index)=>{
          return <ResultsItem key={index} title={product.title} permalink={product.permalink} price={product.price} thumbnail={product.thumbnail} location={product.address.state_name} />
        })
      }

      </div>
    </div>);
  }
}

export default Results;
