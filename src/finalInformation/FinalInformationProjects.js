import React, { Component } from 'react';
import InformationEcosystem from '../knowledegeArea/InformationEcosystem.js';
import InformationInnovation from '../knowledegeArea/InformationInnovationCell.js';
import InformationKET from '../knowledegeArea/InformationKeyTechnology.js';
import '../App.css';


class FinalInformationProjects extends Component {
	render() {
		let ecosystems = "";
		let innovation = "";
		let kets = "";
		let termino = null;
		InformationEcosystem.forEach((ecosystem) => {
			if(ecosystem.id !== termino && ecosystem.idE === this.props.dataprojects.valueEcosystem) {
				ecosystems = ecosystem.name;
			}
			termino = ecosystem.idE;
		});
		termino = null;
		InformationInnovation.forEach((cells) => {
			if(cells.id !== termino && cells.idE === this.props.dataprojects.valueEcosystem && cells.idC === this.props.dataprojects.valueInnovationCell) {
				innovation = cells.name;
			}
			termino = cells.idC;
		});
		termino = null;
		InformationKET.forEach((ket) => {
			if(ket.id !== termino && ket.idE === this.props.dataprojects.valueEcosystem && ket.idC === this.props.dataprojects.valueInnovationCell && ket.idKET === this.props.dataprojects.valueKeyTechnology) {
				kets = ket.name;
			}
			termino = ket.idC;
		});
		return(
			<div>
				<tr>
					<td>
						Nombre del proyecto o iniciativa:
					</td>
					<td>
						{this.props.dataprojects.nameProject}
					</td>
				</tr>
				<tr>
					<td>
						Descripción del proyecto o iniciativa:
					</td>
					<td>
						{this.props.dataprojects.descriptionProject}
					</td>
				</tr>
				<tr>
					<td>
						Problema a resolver con el proyecto o iniciativa:
					</td>
					<td>
						{this.props.dataprojects.problemSolve}
					</td>
				</tr>
				<tr>
					<td>
						Área de conocimiento de la tecnología a desarrollar o usar ECOSYSTEM
					</td>
					<td>
						{ecosystems}
					</td>
				</tr>
				<tr>
					<td>
						Área de conocimiento de la tecnología a desarrollar o usar INNOVATION CELL 
					</td>
					<td>
						{innovation}
					</td>
				</tr>
				<tr>
					<td>
						Área de conocimiento de la tecnología a desarrollar o usar KEY ENABLING TECHNOLOGY 
					</td>
					<td>
						{kets}
					</td>
				</tr>
				<tr>
					<td>
						Duración estimada de la ejecución:
					</td>
					<td>
						{this.props.dataprojects.duration}
					</td>
				</tr>
				<tr>
					<td>
						Presupuesto estimado total:
					</td>
					<td>
						{this.props.dataprojects.budget}
					</td>
				</tr>
				<tr>
					<td>
						Objetivo general:
					</td>
					<td>
						{this.props.dataprojects.objectiveGeneral}
					</td>
				</tr>
				<tr>
					<td>
						Resultados esperados:
					</td>
					<td>
						{this.props.dataprojects.expectedResults}
					</td>
				</tr>
				</div>
			);
	}
}

export default FinalInformationProjects;