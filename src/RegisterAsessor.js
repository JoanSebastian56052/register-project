import React, {Component} from 'react'
import './App.css'

class RegisterAsessor extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: "",
			email: "",
			telefono: "",
			oficina: "",
			cargo: "",
		}
	}
	render() {
		return(
			<div className = "App">
				<div className="App-form">
					<div className="MenuPrincipal">
						<div className="menu-registro">
							<br/>
							Registrar Asesor
							<br/>
							<div className="submenu-registro">
								<br/><br/>	
								&nbsp;&nbsp;<font color="red">*</font>Nombre:<br/>
								<input type="text" value={this.state.id}/><br/><br/>
								&nbsp;&nbsp;<font color="red">*</font>Telefono:<br/>
								<input type="text" value={this.state.id}/><br/><br/>
								&nbsp;&nbsp;<font color="red">*</font>Correo:<br/>
								<input type="text" value={this.state.id}/><br/><br/>
								&nbsp;&nbsp;<font color="red">*</font>Oficina:<br/>
								<input type="text" value={this.state.id}/><br/><br/>
								<button>
									Agregar
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			)
	}
}

export default RegisterAsessor