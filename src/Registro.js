import React, { Component } from 'react';
import './App.css';
import InformationCurrentState from './InformationCurrentState.js';
import InformationDesiredState from './InformationDesiredState.js';
import InformationEntities from './InformationEntities.js';
import InformationProject from './InformationProject.js';
import FinalInformationEntities from './finalInformation/FinalInformationEntities.js';
import FinalInformationProjects from './finalInformation/FinalInformationProjects.js';
import FinalInformationCurrent from './finalInformation/FinalInformationCurrent.js';
import FinalInformationDesired from './finalInformation/FinalInformationDesired.js';
import {
  Link
} from 'react-router-dom'

class Registro extends Component {
	constructor() {
	    super();
	    this.state = {
	    	mensaje: " ",
	    	buttonState: "Siguiente",
	    	isfullEntities: [],
	    	isfullProject: [],
	    	isfullCurrent: [],
	    	isfullDesired: [],
	    	next: <InformationEntities getIsFullEntities={this.getIsFullEntities.bind(this)}/>,
	    	title: "Información Inicial de la(s) entidades:",
	    	hiden: true,
	    	tabla: "App-tablas",
	    	inicio: true,
	    	previous: "",

		};	    
	    this.nextForm = this.nextForm.bind(this);
	    this.previousForm = this.previousForm.bind(this);
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
	previousForm() {
		this.setState({next: this.state.previous,
			inicio: true})
	}
	nextForm() {
		let datas = [];
		if(this.state.isfullEntities.isfull) {
			this.setState({mensaje: " ",
				title: "Informacion inicial del Proyecto:",
				next: <InformationProject getIsFullProjects={this.getIsFullProjects.bind(this)}/>,
				inicio: false,
				previous: <InformationEntities state={this.state.isfullEntities}/>})
			datas.push(<FinalInformationEntities dataentities={this.state.isfullEntities}/>)
			if(this.state.isfullProject.isfull) {
				this.setState({mensaje: " "});
				this.setState({title: "Autodiagnostico estado actual del proyecto:"});
				this.setState({next: <InformationCurrentState getIsFullCurrent={this.getIsFullCurrent.bind(this)}/>, anterior: <InformationProject getIsFullProjects={this.getIsFullProjects.bind(this)}/>})
				datas.push(<FinalInformationProjects dataprojects={this.state.isfullProject}/>)
				if(this.state.isfullCurrent.isfull) {
					this.setState({mensaje: " ", title: "Autodiagnóstico estado al cual se quiere llegar y la necesidad identificada:", buttonState: "Finalizar", next: <InformationDesiredState getIsFullDesired={this.getIsFullDesired.bind(this)}/>, anterior: <InformationCurrentState getIsFullCurrent={this.getIsFullCurrent.bind(this)}/>})
					datas.push(<FinalInformationCurrent datacurrent={this.state.isfullCurrent}/>)
					if(this.state.isfullDesired.isfull) {
						this.setState({mensaje: " ", title: "Informacion Final del Proyecto", hiden: false, tabla: "App-tablas-final", anterior: <InformationDesiredState getIsFullDesired={this.getIsFullDesired.bind(this)}/>})
						datas.push(<FinalInformationDesired datadesired={this.state.isfullDesired}/>)
						this.setState({next: datas});
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
  	let buttonview;
  	if(this.state.hiden) {
  		if(this.state.inicio) {
  			buttonview = (
  				<div className="login">
  					 <input type="button" value={this.state.buttonState} onClick={this.nextForm} />
  					 <p>{"Mensajes: Los campos marcados con ("} <font color="red">*</font> {") son obligatorios"+this.state.mensaje}</p>
  				</div>
  			);
  		} else {
  			buttonview = (
  				<div>
  					 <input type="button" value="Anterior" onClick={this.previousForm} />
  					 <input type="button" value={this.state.buttonState} onClick={this.nextForm} />
  					 <p>{"Mensajes: Los campos marcados con ("} <font color="red">*</font> {") son obligatorios"+this.state.mensaje}</p>
  				</div>
  			);
  		}
  		
  	} else {
  		buttonview = <Link to="/">SALIR</Link>;
  	}
    return (
    	<center>
    	<div className="App">
      	  	<div className="App-form">
      	  		<h4>REGISTRO DE PROYECTOS DE CIENCIA Y TECNOLOGIA DE RUTA-N</h4>
      	  		<table  className={this.state.tabla}>
      	  			<thead>
      	  				<center><th>{this.state.title}</th></center>
      	  			</thead>
      	  			<tbody>
      	  				{nextcheckform}
      	  			</tbody>
      	  		</table>
      	  		<br/><br/>
      	  		{buttonview}
      		</div>
      	</div>
      	</center>
    );
  }
}



export default Registro;