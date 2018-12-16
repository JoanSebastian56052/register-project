import React, {Component} from 'react'
import './App.css'
import DataBase from './DataBase.js'
import ViewProjects from './ViewProjects.js'
import UserType from './UserType.js'
class Projects extends Component {
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
	getProjects(user,asessor, User) {
		let proyectos = []
		let termino = null
		if(user) {
			DataBase.forEach((database) => {
				if(termino !== database.id && database.email  === User.email) {
					proyectos.push(<ViewProjects database={database}/>)
					proyectos.push(<br/>)
				}
				termino = database.idP;
			})
		} else if(asessor) {
			DataBase.forEach((database) => {
				if(termino !== database.id && database.emailasessor  === User.email) {
					proyectos.push(<ViewProjects database={database}/>)
					proyectos.push(<br/>)
				}
				termino = database.idP;
			})
		} else {
			DataBase.forEach((database) => {
				if(termino !== database.id) {
					proyectos.push(<ViewProjects database={database}/>)
					proyectos.push(<br/>)
				}
				termino = database.idP;
			})
		}
		return proyectos
	}
	render() {
		const firebaseAuthKey = "firebaseAuthInProgress";
		const appTokenKey = "appToken";
		const firebaseUser = "userData";
		let User = JSON.parse(localStorage.getItem(firebaseUser));
		let user = this.getRouteUser(User)
		let asessor = this.getRouteAsessor(User)
		let proyectos = this.getProjects(user, asessor, User)
		
		return(

				<div className="App">
			      	  	<div className="MenuPrincipal">
			      	  		<div className="menu">
			      	  			Proyectos de Innovacion
			      	  			{proyectos}
			      	  		</div>
			      		</div>
				</div>
			)
	}

}

export default Projects