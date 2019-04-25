import React, {Component} from "react";
import Breadcrumbs from '../Breadcrums/breadcrumbs';
import axios from "axios";

class DetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axios.get(this.props.prodId).then(res => {
      const data = res.data;
      this.setState({data:data});
      console.log(this.state.data);
      console.log(this.state.data.pictures[0].url);
      console.log(res.data);
    });

  }
  render() {
    let style = {
      container: "container",
      row: "row",
      col: "col",
      item: "item"
    };
    return (<div className="row">
      <div className="col-10 offset-1 p-0 bgWhite">
        <div className={style.row}>
          <div className="col-8">
            <img src={this.state.data.thumbnail} alt=""/>
          </div>
          <div className="col-4">
            <p className="selled">{this.state.data.condition}
              - {this.state.data.sold_quantity}
              vendidos</p>
            <p className="title">{this.state.data.title}</p>
            <p className="price">${this.state.data.price}</p>
            <button className="buyBtn"></button>
          </div>
        </div>
        <div className={style.row}>
          <div className={style.col}>
            <p className="descriptionTitle">Descripción del producto</p>
            <p className="descriptionText">{this.state.data.description}</p>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default DetailView;
