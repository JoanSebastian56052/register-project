import React, { Component } from 'react';
import './App.css';
import swal from 'sweetalert2'
import InformationEcosystem from './knowledegeArea/InformationEcosystem.js';
import InformationInnovationCell from './knowledegeArea/InformationInnovationCell.js';
import InformationKET from './knowledegeArea/InformationKeyTechnology.js';
import ViewInnovationEcosystem from './ViewInnovationEcosystem.js';
import ViewInnovationCells from './ViewInnovationCells.js';
import ViewInnovationKET from './ViewInnovationKET.js';

class InformationProject extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nameProject: "",
			descriptionProject: null,
			problemSolve: null,
			valueEcosystem: null,
			valueInnovationCell: null,
			valueKeyTechnology: null,
			duration: null,
			budget: null,
			objectiveGeneral: null,
			expectedResults: null,
			isfull: false
		};
		this.isComplete = this.isComplete.bind(this);
		this.takeNameProject = this.takeNameProject.bind(this);
		this.takeDescriptionProject = this.takeDescriptionProject.bind(this);
		this.takeProblemSolve = this.takeProblemSolve.bind(this);
		this.takeValueEcosystem = this.takeValueEcosystem.bind(this);
		this.takeValueInnovationCell = this.takeValueInnovationCell.bind(this);
		this.takeValueKeyTechnology = this.takeValueKeyTechnology.bind(this);
		this.takeDuration = this.takeDuration.bind(this);
		this.takeBudget = this.takeBudget.bind(this);
		this.takeObjectiveGeneral = this.takeObjectiveGeneral.bind(this);
		this.takeExpectedResults = this.takeExpectedResults.bind(this);
	}

	takeNameProject(e) {
		this.setState({nameProject: e.target.value});
	}

	takeDescriptionProject(e) {
		this.setState({descriptionProject: e.target.value});
	}

	takeProblemSolve(e) {
		this.setState({problemSolve: e.target.value});
	}

	takeValueEcosystem(e) {
		this.setState({valueEcosystem: e.target.value});
	}

	takeValueInnovationCell(e) {
		this.setState({valueInnovationCell: e.target.value});
	}

	takeValueKeyTechnology(e) {
		this.setState({valueKeyTechnology: e.target.value});
	}

	takeDuration(e) {
		this.setState({duration: e.target.value});
	}

	takeBudget(e) {
		this.setState({budget: e.target.value});
	}

	takeObjectiveGeneral(e) {
		this.setState({objectiveGeneral: e.target.value});
	}

	takeExpectedResults(e) {
		this.setState({expectedResults: e.target.value});
	}


	isComplete() {
		if(this.state.nameProject.length !== 0) {
			if(this.state.descriptionProject !== null) {
				if(this.state.problemSolve !== null) {
					if(this.state.valueEcosystem !== null) {
						if(this.state.valueKeyTechnology !== null) {
							if (this.state.valueInnovationCell !== null) {
								if(this.state.duration !== null) {
									if(this.state.budget !== null) {
										if(this.state.objectiveGeneral !== null) {
											if(this.state.expectedResults !== null) {
												this.setState({isfull: true});
												let newValue = this.state;
												this.props.getIsFullProjects(newValue);
												swal({
												  position: 'center',
												  type: 'success',
												  title: 'La informacion de la entidades ha sido guardado exitosamente',
												  showConfirmButton: false,
												  timer: 1500
												})
											}  else {
												swal({
												  type: 'error',
												  title: 'Oops...',
												  text: 'El campo resultados esperados del proyecto es obligatorio!!!',
												})
											}
										} else {
											swal({
												  type: 'error',
												  title: 'Oops...',
												  text: 'El campo objetivo general del proyecto es obligatorio!!!',
												})
										}
									} else {
										swal({
										  type: 'error',
										  title: 'Oops...',
										  text: 'El campo presupuesto del proyecto es obligatorio!!!',
										})
									}
								} else {
									swal({
									  type: 'error',
									  title: 'Oops...',
									  text: 'El campo duracion del proyecto es obligatorio!!!',
									})
								}
							} else {
								swal({
								  type: 'error',
								  title: 'Oops...',
								  text: 'Seleccione un Area de conocimiento de la tecnología a desarrollar o usar KEY ENABLING TECHNOLOGY!!!',
								})
							}
						} else {
							swal({
							  type: 'error',
							  title: 'Oops...',
							  text: 'Seleccione un Area de conocimiento de la tecnología a desarrollar o usar INNOVATION CELL!!!',
							})
						}
					} else {
						swal({
						  type: 'error',
						  title: 'Oops...',
						  text: 'Seleccione un Area de conocimiento de la tecnología a desarrollar o usar ECOSYSTEM!!!',
						})
					}
				} else {
					swal({
					  type: 'error',
					  title: 'Oops...',
					  text: 'El campo descripcion del proyecto es obligatorio!!!',
					})
				}
			} else {
				swal({
				  type: 'error',
				  title: 'Oops...',
				  text: 'El campo problema a resolver del proyecto es obligatorio!!!',
				})
			}
		} else {
			swal({
			  type: 'error',
			  title: 'Oops...',
			  text: 'El campo nombre o iniciativa del proyecto es obligatorio!!!',
			})
		}
	}

	render() {
		let eachecosystem = [];
		let termino = null;
		let eachcells = [];
		let eachket = [];

		InformationEcosystem.forEach((ecosystem) => {
			if(ecosystem.id !== termino) {
				eachecosystem.push(<ViewInnovationEcosystem ecosystem={ecosystem} key={ecosystem.idE}/>);
			}
			termino = ecosystem.idE;
		});
		termino = null;
		InformationInnovationCell.forEach((cells) => {
			if(cells.id !== termino && cells.idE === this.state.valueEcosystem) {
				eachcells.push(<ViewInnovationCells cells = {cells} key={cells.idC}/>);
			}
			termino = cells.idC;
		});
		termino = null;
		InformationKET.forEach((ket) => {
			if(ket.id !== termino && ket.idE === this.state.valueEcosystem && this.state.valueInnovationCell === ket.idC) {
				eachket.push(<ViewInnovationKET ket = {ket} key={ket.idKET}/>);
			}
			termino = ket.idC;
		});
		return(
				<div>
				<tr>
					<td>
						<font color="red">*</font>Nombre corto del proyecto o iniciativa:
					</td>
					<td>
						<input type="text" placeholder="Nombre Proyecto"  onChange={this.takeNameProject} onFocus={this.value=""}/>
					</td>
				</tr>
				<tr>
					<td>
						&nbsp;&nbsp;<font color="red">*</font>Problema a resolver con el proyecto:
					</td>
					<td>
					<div clasName="contenedor">
						<input type="text" placeholder="Problema a resolver" onChange={this.takeProblemSolve} onFocus={this.value=""}/>
					</div>
					</td>
				</tr>
				<tr>
					<td>
						&nbsp;&nbsp;<font color="red">*</font>Descripción del proyecto o iniciativa:<br/>
					</td>
					<td>
						<input type="text" maxLength="300" required="true" placeholder="Descripcion Proyecto" onChange={this.takeDescriptionProject}/>
					</td>
				</tr>
				<tr>
					<td>
						&nbsp;&nbsp;<font color="red">*</font>Area de conocimiento de la tecnología a desarrollar o usar ECOSYSTEM:
					</td>
					<td>
						<select value={this.state.valueEcosystem} onChange={this.takeValueEcosystem}>
				            <option value="null">-- Seleccione una opcion --</option>
				            {eachecosystem}
					    </select>
					</td>
				</tr>
				<tr>
					<td>
						&nbsp;&nbsp;<font color="red">*</font>Area de conocimiento de la tecnología a desarrollar o usar INNOVATION CELL:
					</td>
					<td>
						<select value={this.state.valueInnovationCell} onChange={this.takeValueInnovationCell}>
				            <option value="null">-- Seleccione una opcion --</option>
				            {eachcells}
					    </select>
					</td>
				</tr>
				<tr>
					<td>
						&nbsp;&nbsp;<font color="red">*</font>Area de conocimiento de la tecnología a desarrollar o usar KEY ENABLING TECHNOLOGY:
					</td>
					<td>
						<select value={this.state.valueKeyTechnology} onChange={this.takeValueKeyTechnology}>
				            <option value="null">-- Seleccione una opcion --</option>
				            {eachket}
					    </select>
					</td>
				</tr>
				<tr>
					<td>
						&nbsp;&nbsp;<font color="red">*</font>Duracion estimada en la ejecucion del proyecto (Duracion en meses):
					</td>
					<td>
						<input type="text" required="true" placeholder="Duracion" onChange={this.takeDuration}/>
					</td>
				</tr>
				<tr>
					<td>
						&nbsp;&nbsp;<font color="red">*</font>Presupuesto estimado total del proyecto:
					</td>
					<td>
						<input type="text" required="true" placeholder="Presupuesto" onChange={this.takeBudget}/>
					</td>
				</tr>
				<tr>
					<td>
						&nbsp;&nbsp;<font color="red">*</font>Objetivo general:
					</td>
					<td>
						<input type="text" maxLength="300" required="true" placeholder="Objetivo" onChange={this.takeObjectiveGeneral}/>
					</td>
				</tr>
				<tr>
					<td>
						&nbsp;&nbsp;<font color="red">*</font>Resultados Esperados:
					</td>
					<td>
						<input type="text" maxLength="300" required="true" placeholder="Resultados" onChange={this.takeExpectedResults}/>
					</td>
				</tr>
			        <br/>
			        <center><input type="button" value="Guardar" onClick={this.isComplete}/></center>
		    	</div>
			);
	}
}

export default InformationProject;