import React, { Component } from 'react';
import Product     from './Product';
import {connect} from 'react-redux';
import {getProductsAction} from '../actions/app';


class Products extends Component {

    constructor(props){
        super(props);

        this.state = {
            str: ''
        }
    }


    componentDidMount(){
        this.props.getProducts();
        this.setState({dataProducts:this.props.products})
    }

    showProducts(){

      let filtered = [];

      for(let j in this.props.products){

        let product = this.props.products[j]; 

        if(this.state.str) {
            if(JSON.stringify(product).toLowerCase().indexOf(this.state.str.toLowerCase())!== -1){
                filtered.push(<Product key={j} pKey={j} data={product} addCart = {this.props.addCart} />)
            }else{
                continue;
            }
        }else{
        filtered.push(<Product key={j} pKey={j} data={product} addCart = {this.props.addCart} />)
        }

        }
        
        return filtered
      }


      filterProducts = (el) => {
        this.showProducts(el.target.value);
        this.setState({str: el.target.value})
      }

  render() {
      
      return (
          <div className="products row">
            <h3 className="col-md-12 text-center ">Products</h3>
            <div className = 'col-md-12 my-3' >
                <input onInput={this.filterProducts} className = 'form-control' placeholder = 'Поиск по сайту' />
            </div>
          
              {this.showProducts()}
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
  )(Products);
