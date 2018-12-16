import React, {Component} from 'react';
import './App.css';
import UserType from './UserType.js';
import RouteAdmin from './Route/RouteAdmin.js'
import RouteAsessor from './Route/RouteAsessor.js'
import RouteUser from './Route/RouteUser.js'
import RouteUnlogin from './Route/RouteUnlogin.js'

class RouteAccess extends Component {
	getRouteAdmin(User) {
		let aux = false
		if(User) {
			let type = "Admin"
	 		let email = User.email
	 		let termino = null
	 		UserType.forEach((usertype) => {
	 			if(termino !== usertype.id && usertype.email === email) {
	 				if(usertype.type === type) {
	 					aux = true;
	 				} 
	 			}
	 			termino = usertype.email;
	 		})
		}
		
 		return aux;

	}
	getRouteAsessor(User) {
		let aux = false
		if(User) {
			let type = "Asessor"
	 		let email = User.email
	 		let termino = null
	 		UserType.forEach((usertype) => {
	 			if(termino !== usertype.id && usertype.email === email) {
	 				if(usertype.type === type) {
	 					aux = true;
	 				} 
	 			}
	 			termino = usertype.email;
	 		})
		}
		
 		return aux;
	}
	getRouteUser(User) {
		let aux = false
		if(User) {
			let type = "User"
	 		let email = User.email
	 		let termino = null
	 		UserType.forEach((usertype) => {
	 			if(termino !== usertype.id && usertype.email === email) {
	 				if(usertype.type === type) {
	 					aux = true;
	 				} 
	 			}
	 			termino = usertype.email;
	 		})
		}
		
 		return aux;
	}
	getRouteUnlogin(User) {
		if(User) {
			return false
		}
		return true
	}
  render() {
  	const firebaseAuthKey = "firebaseAuthInProgress";
	const appTokenKey = "appToken";
	const firebaseUser = "userData";
	let User = JSON.parse(localStorage.getItem(firebaseUser));
	let admin = this.getRouteAdmin(User);
	let asessor = this.getRouteAsessor(User);
	let user = this.getRouteUser(User);
	let unlogin = this.getRouteUnlogin(User);
    return (
    	<div>
    		{admin ? (
    			<RouteAdmin/>):(
    			""
    			)
    		}
    		{asessor ? (
    			<RouteAsessor/>):(
    			""
    			)
    		}
    		{user ? (
    			<RouteUser/>):(
    			""
    			)
    		}
    		{unlogin ? (
    			<RouteUnlogin/>):(
    			""
    			)
    		}
    	</div>
    );
  }
}

export default RouteAccess;