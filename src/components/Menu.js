import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const menu = require('../system/menu');


class Menu extends Component {


  showMenu()
  {
      return menu.map(function(el, k){
          return <li key={k} >
                    <Link to={el.link}> {el.name} </Link>
                  </li>
      });
  }


  render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="menu navbar-nav justify-content-around w-100">
            {this.showMenu()}
              <li>
                <i onClick = {this.props.changeCart} className="fa fa-cart-arrow-down cart-show" aria-hidden="true"></i>
                <span> Sum:{this.props.totalSum} / Quantity:{this.props.totalQuantity}</span>
              </li>
          </ul>
        </nav>
      );
  }
}

export default connect (
    state => ({
      totalSum: state.cart.totalSum,
      totalQuantity: state.cart.totalQuantity
    }),
    dispatch => ({
  
    })
  )(Menu);
