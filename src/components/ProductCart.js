import React, { Component } from 'react';
import {connect} from 'react-redux';

class ProductCart extends Component {

  remove = (el)=> {
    let pkey = el.target.dataset.key;
    this.props.deleteCart({key: pkey, product: this.props.products[pkey]});
  }

  render() {

      return (
        <tr className = "product-cart">
          <td className = "text-primary">{this.props.data.name}</td>
          <td>{this.props.data.price}</td>
          <td>{this.props.data.quantity}</td>
          <td><i onClick = {this.remove} 
                 data-key = {this.props.pkey} 
                 data-id = {this.props.data.id}
                 className="fa fa-trash text-danger" 
                 aria-hidden="true"></i></td>
        </tr>
      );

  }


}

export default connect (
  state => ({
    products: state.cart.products
  }),
  dispatch => ({
    deleteCart:(da)=>{
      dispatch({type:'DELETE_CART',data:da})
    }
  })
)(ProductCart);