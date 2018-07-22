import React, { Component } from 'react';
import Menu     from './Menu';
import Cart     from './Cart';




class Header extends Component {

  constructor(props){
    
    super(props);

    this.state = {
      showCart: false
    }

  }

  changeShowCart = () => {
    this.setState({showCart: !this.state.showCart});
  }


  render() {  
      return (
        <header>
            <Menu changeCart = {this.changeShowCart} />
            {this.state.showCart ? <Cart delete = {this.props.deleteCart} products = {this.props.productsCart} /> : ''}
        </header>
      );

  }


}

export default Header;
