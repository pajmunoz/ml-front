import React, {Component} from 'react';

class ResultsItem extends Component {
  render() {
    let style = {
      container: 'container',
      row: 'row',
      col: 'col',
      item: 'item'
    }
    return (<div className={style.item}>
      <div className={style.row}>
        <div className="col-2 image">
          <img src={this.props.thumbnail} alt=""/>
        </div>
        <div className="col-4 data">
          <p className="price">${this.props.price}</p>
          <p className="description">{this.props.title} </p>
        </div>
        <div className="col-2 offset-2 city">
          <p className="location">{this.props.location}</p>
        </div>
      </div>
    </div>);
  }
}

export default ResultsItem;
