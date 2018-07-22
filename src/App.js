import React, { Component } 		from 'react';
import Header   					from './components/Header';
import Products   					from './components/Products';
import MainProduct   				from './components/MainProduct';
import Footer    					from './components/Footer';
import {Switch, Route, Redirect} 	from 'react-router-dom';
import Registration 				from './components/Registration';
import Login 						from './components/Login';
import About 						from './components/About';
import Home 						from './components/Home';

import './App.css';

class App extends Component {

	render() {
		return (
			<div className="App container">

				<Header />

					<Switch>
						<Route path='/Home' 			component={Home}/>
						<Route path='/Products' 		component={Products}/>
						<Route path='/Product/:slug' 	component={MainProduct}/>
						<Route path='/Registration' 	component={Registration}/>
						<Route path='/Login' 			component={Login}/>
						<Route path='/About' 			component={About}/>
						<Redirect from='/' to='/home' />
					</Switch>

				<Footer />
			</div>
		);
	}


}

export default App;