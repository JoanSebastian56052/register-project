import React, {Component} from 'react'
import './App.css'
import UserType from './UserType.js'

class ViewProject extends Component {
	render() {
		const firebaseAuthKey = "firebaseAuthInProgress";
		const appTokenKey = "appToken";
		const firebaseUser = "userData";
		let User = JSON.parse(localStorage.getItem(firebaseUser));
		let termino = null
		let admin = false
		let asessor = false
		let user = false
		UserType.forEach((database) => {
			if(termino !== database.id) {
				if(database.email === User.email) {
					if(database.type === "Asessor") {
						asessor = true
					}
					if(database.type === "Admin") {
						admin = true
					}
					if(database.type === "User") {
						user = true
					}
				}
			}
		})
		return(
			<div>
				<div className="submenu">
					<div>
						ID: {this.props.database.idP}
						<br/>
						Nombre: {this.props.database.name}
						<br/>
						Email: {this.props.database.email}
						<br/>
						Categoria: {this.props.database.category}
						<br/>
					</div>
				</div>
				<div className="submenu">
					<div>
						{admin ? (
							<div>
								<button>
									VER
								</button>
								<br/>
								<button>
									ASIGNAR ASESOR
								</button>
							</div>
							):(
								""
							)}
						{asessor ?(
							<div>
								<button>
									VER
								</button>
								<br/>
								<button>
									REALIZAR OBSERVACION
								</button>
							</div>
							):(
								""
							)}
						{user ?(
						<div>
							<button>
								VER
							</button>
						</div>
						):(
							""
						)}
					</div>	
				</div>
			</div>
			)
	}
}

export default ViewProject