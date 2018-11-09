import React, { Component } from 'react';
import UserOptions from '../UserOptions.js';
import '../App.css';


class FinalInformationDesired extends Component {
	render() {
		let group1 = "";
		let group2 = "";
		let group3 = "";
		let termino;
		let id = "8" + this.props.datadesired.group1;
		UserOptions.forEach((option) => {
			if(id === option.id) {
				group1 = option.value;
			}
			termino = option.id;
		});
		id = "9" + this.props.datadesired.group2;
		UserOptions.forEach((option) => {
			if(id === option.id) {
				group2 = option.value;
			}
			termino = option.id;
		});
		id = "10" + this.props.datadesired.group3;
		UserOptions.forEach((option) => {
			if(id === option.id) {
				group3 = option.value;
			}
			termino = option.id;
		});
		return(
			<div>
				<tr>
					<td>
						Grado de novedad del desarrollo:
					</td>
					<td>
						{this.props.datadesired.name}
					</td>
				</tr>
				<tr>
					<td>
						Estado jurídico del desarrollo del proyecto:
					</td>
					<td>
						{this.props.datadesired.type}
					</td>
				</tr>
				<tr>
					<td>
						Nombre de la emprezaCuál es su objetivo con el desarrollo del proyecto en el plazo establecido? :
					</td>
					<td>
						{group1}
					</td>
				</tr>
				<tr>
					<td>
						Grado de desarrollo de la Tecnología al cual se desea llegar con el proyecto:
					</td>
					<td>
						{group2}
					</td>
				</tr>
				<tr>
					<td>
						Limitaciones para el desarrollo del proyecto
					</td>
					<td>
						{group3}
					</td>
				</tr>
			</div>
			);
	}
}

export default FinalInformationDesired;