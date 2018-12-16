import React, { Component } from 'react';
import Login from './Login.js';
import './App.css';
import UserType from './UserType.js'
import RouteAccess from './RouteAccess.js'

class App extends Component {
	render() {
		return(
				<div className="MenuPrincipal">
					<RouteAccess/>
				</div>
			)
	}
}

export default App;

