import React, {Component} from 'react';
import Logo from './assets/Logo_ML@2x.png.png'
import SearchIco from './assets/ic_Search@2x.png.png'

class Search extends Component {
  render() {
    let style = {
      container: 'container',
      containerFluid: 'container-fluid',
      row: 'row',
      col:'col',
      Search: 'search'
    }
    return (<div className={style.container}>
      <div className={style.Search}>
        <div className={style.row}>
          <div className={style.col+'-10 offset-1'}>
            <div className={style.row}>
              <div className="col-1 text-right">
                <img src={Logo} alt=""/>
              </div>
              <div className="col-11 nav-search pr-0">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Nunca dejes de buscar"/>
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button"><img src={SearchIco} alt=""/></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Search;
