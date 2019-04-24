import React, {Component} from 'react';

class Breadcrumbs extends Component {
  render() {
    let style = {
      container: 'container',
      containerFluid: 'container-fluid',
      row: 'row',
      col: 'col',
      Search: 'search',
      breadcrumbs: 'breadcrumbs'
    }
    return (<div className={style.breadcrumbs}>
      <div className={style.row}>
        <div className={style.col + '-10 offset-1'}>
          <p>Electronica, audio y video > ipod > Reproductores > ipodTouch > 32 GB</p>
        </div>
      </div>
    </div>
    );
  }
}

export default Breadcrumbs;
