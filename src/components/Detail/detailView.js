import React, {Component} from "react";

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
          <h1>Hello</h1>

        </div>
      </div>
    </div>);
  }
}

export default DetailView;
