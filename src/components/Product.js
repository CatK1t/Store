import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Product extends Component {

    add = (el) => {
        console.log(el.target);
        let pKey = el.target.dataset.key;
        let product = this.props.products[pKey];
        this.props.addCart(product);
    }

  render() {

      return (
        <div className="col-sm-3">
            <div className="product text-center">
                <h3>{this.props.data.name}</h3>
                <div className="image">
                    <Link to={"/Product/" + this.props.data.slug}><img className="img-fluid" src={'/img/'+this.props.data.image} alt="img" /> </Link>
                </div>
                <div className="price">
                    {this.props.data.price}
                </div>
                <div className="manufacturer">
                    {this.props.data.manufacturer}
                </div>
                <div className="description">
                    {this.props.data.description}
                </div>
                {
                  this.props.data.quantity 
                  ? <button onClick={this.add} data-key = {this.props.pKey} type="button" className="btn btn-primary">Add to cart</button>
                  : <button type="button" className="btn btn-success">Pre order</button>
                }
            </div>
        </div>
      );
  }


}


export default connect (
    state => ({
      products: state.app.products
    }),
    dispatch => ({
      addCart: (Product) => {
          dispatch({type: 'ADD_CART', data: Product})
      }
    })
  )(Product);