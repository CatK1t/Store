import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProductsAction} from '../actions/app';

import '../App.css';


class MainProduct extends Component {

  constructor(props){

    super(props)

    this.state={
      product: this.getProduct()
    }

  }

  getProduct = () => {

    let slug = this.props.match.params.slug;

    for(let j in this.props.products){

      if(this.props.products[j]['slug'] === slug){

        return this.props.products[j]

      }

    }
    return {}

  }

  componentDidMount(){
    this.props.getProducts();
    console.log(this.props.products)
    this.getProduct();
  }

  render() {
      
      return (
        <div className="MainProduct">
          <h3 className="text-center" >{this.state.product.name} </h3>
          <img className="img-fluid" src={'/img/'+this.state.product.image} alt="img" />
          <p>Lorem Ipsum - це текст-"риба", що використовується в друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною "рибою" аж з XVI сторіччя, коли невідомий друкар взяв шрифтову гранку та склав на ній підбірку зразків шрифтів. "Риба" не тільки успішно пережила п'ять століть, але й прижилася в електронному верстуванні, залишаючись по суті незмінною. Вона популяризувалась в 60-их роках минулого сторіччя завдяки виданню зразків шрифтів Letraset, які містили уривки з Lorem Ipsum, і вдруге - нещодавно завдяки програмам комп'ютерного верстування на кшталт Aldus Pagemaker, які використовували різні версії Lorem Ipsum.</p>
        </div>
      );

  }


}

export default connect (
  state => ({
    products: state.app.products
  }),
  dispatch => ({
    getProducts: () => {
		  dispatch(getProductsAction());
	  }
  })
)(MainProduct);
