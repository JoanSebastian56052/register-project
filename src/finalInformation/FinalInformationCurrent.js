import React, { Component } from 'react';
import '../App.css';


class FinalInformationCurrent extends Component {
	render() {
		return(
			<div>
				<tr>
					<td>
						Grado de desarrollo actual de la Tecnología:
					</td>
					<td>
						{this.props.datacurrent.group1}
					</td>
				</tr>
				<tr>
					<td>
						Grado de desarrollo del producto, servicios o proceso:
					</td>
					<td>
						{this.props.datacurrent.group2}
					</td>
				</tr>
				<tr>
					<td>
						Definición / diseño del producto:
					</td>
					<td>
						{this.props.datacurrent.group3}
					</td>
				</tr>
				<tr>
					<td>
						Panorama competitivo actual / Conocimiento del mercado:
					</td>
					<td>
						{this.props.datacurrent.group4}
					</td>
				</tr>
				<tr>
					<td>
						Conformación del Equipo:
					</td>
					<td>
						{this.props.datacurrent.group5}
					</td>
				</tr>
				<tr>
					<td>
						Estado actual con miras  al mercado:
					</td>
					<td>
						{this.props.datacurrent.group6}
					</td>
				</tr>
				<tr>
					<td>
						Estado actual en la Fabricación / cadena de suministro:
					</td>
					<td>
						{this.props.datacurrent.group7}
					</td>
				</tr>
			</div>
			);
	}
}

export default FinalInformationCurrent;