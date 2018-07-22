import React, { Component } from 'react';
import ProductCart from './ProductCart';
import {connect} from 'react-redux';

class Cart extends Component {

  showProduct = () => {
    return this.props.products.map((p, k) => <ProductCart key={k} pkey={k} data={p} />)
  }
	

  render() {

      return (
        <div id="cart">
          <div className = "header-cart">
            <table className = "table table-striped">
              <thead>
                <tr>
                  <th>Total sum: {this.props.totalSum}</th>
                  <th>Total quantity: {this.props.totalQuantity}</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className = "body-cart">
            <table className = "table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Sum</th>
                  <th>Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.showProduct()}
              </tbody>
            </table>
          </div>
      </div>
      );

  }


}

export default connect (
  state => ({
    products: state.cart.products,
    totalSum: state.cart.totalSum,
    totalQuantity: state.cart.totalQuantity
  }),
  dispatch => ({
    
  })
)(Cart);
