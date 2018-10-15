import React, { Component } from 'react';
import './App.css';
import InformationCurrentState from './InformationCurrentState.js';
import InformationDesiredState from './InformationDesiredState.js';
import InformationEntities from './InformationEntities.js';
import InformationProject from './InformationProject.js';
import FinalInformation from './FinalInformation.js';

class Registro extends Component {
	constructor() {
	    super();
	    this.state = {
	    	mensaje: " ",
	    	buttonState: "Siguiente",
	    	isfullEntities: false,
	    	isfullProject: false,
	    	isfullCurrent: false,
	    	isfullDesired:false,
	    	next: <InformationEntities getIsFullEntities={this.getIsFullEntities.bind(this)}/>
		};	    
	    this.nextForm = this.nextForm.bind(this);
	    this.getIsFullEntities = this.getIsFullEntities.bind(this);

	  }

	getIsFullEntities(newValue) {
		this.setState({isfullEntities: newValue});
	}

	getIsFullProjects(newValue) {
		this.setState({isfullProject: newValue});
	}

	getIsFullCurrent(newValue) {
		this.setState({isfullCurrent: newValue});
	}

	getIsFullDesired(newValue) {
		this.setState({isfullDesired: newValue});
	}

	nextForm() {
		if(this.state.isfullEntities) {
			this.setState({mensaje: " "});
			this.setState({next: <InformationProject getIsFullProjects={this.getIsFullProjects.bind(this)}/>})
			if(this.state.isfullProject) {
				this.setState({mensaje: " "});
				this.setState({next: <InformationCurrentState getIsFullCurrent={this.getIsFullCurrent.bind(this)}/>})
				if(this.state.isfullCurrent) {
					this.setState({mensaje: " "});
					this.setState({buttonState: "Finalizar"})
					this.setState({next: <InformationDesiredState getIsFullDesired={this.getIsFullDesired.bind(this)}/>})
					if(this.state.isfullDesired) {
						this.setState({next: <FinalInformation/>})
					}
				} else {
					this.setState({mensaje: ", debe llenarlos en su totalidad"})
				}
			} else {
				this.setState({mensaje: ", debe llenarlos en su totalidad"})
			}
		} else {
			this.setState({mensaje: ", debe llenarlos en su totalidad"})
		}
	}
	
  	render() {
  	let nextcheckform = this.state.next;
    return (
    	<div className="App">
      	  	<div className="Appform">
      	  		<table className="App-tablas">
      	  			<thead>
      	  				<center><th>REGISTRO DE PROYECTOS DE CIENCIA Y TECNOLOGIA DE RUTA-N</th></center>
      	  			</thead>
      	  			<tbody>
      	  				{nextcheckform}
      	  			</tbody>
      	  		</table>
      	  		<br/><br/>
	      		<input type="button" value={this.state.buttonState} onClick={this.nextForm} />  	
	  			<p>{"Mensajes: Los campos marcados con ("} <font color="red">*</font> {") son obligatorios"+this.state.mensaje}</p>
      		</div>
      	</div>
    );
  }
}



export default Registro;