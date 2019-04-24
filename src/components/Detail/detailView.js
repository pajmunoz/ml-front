import React, {Component} from "react";
import Breadcrumbs from '../Breadcrums/breadcrumbs';

class DetailView extends Component{
  render() {
    let style = {
      container: "container",
      row: "row",
      col: "col",
      item: "item"
    };
    return (<div className={style.container}>

      <div className={style.row}>
        <div className={style.col}>
          <h1>{this.props.prodId}</h1>

        </div>
      </div>
    </div>);
  }
}

export default DetailView;
