import React, { Component } from 'react';
import '../App.css';


class FinalInformationEntities extends Component {
	render() {
		return(
			<div >
				<tr>
					<td>
						Naturaleza de la entidad proponente:
					</td>
					<td>
						{this.props.dataentities.nature}
					</td>
				</tr>
				<tr>
					<td>
						Tipo de empresa
					</td>
					<td>
						{this.props.dataentities.type}
					</td>
				</tr>
				<tr>
					<td>
						Nombre de la entidad proponente principal:
					</td>
					<td>
						{this.props.dataentities.nameEntity}
					</td>
				</tr>
				<tr>
					<td>
						NIT de la empresa:
					</td>
					<td>
						{this.props.dataentities.nitEntity}
					</td>
				</tr>
				<tr>
					<td>
						Nombre líder del proyecto:
					</td>
					<td>
						{this.props.dataentities.nameLeader}
					</td>
				</tr>
				<tr>
					<td>
						Cargo líder del proyecto:
					</td>
					<td>
						{this.props.dataentities.ocupationLeader}
					</td>
				</tr>
				<tr>
					<td>
						Correo electrónico institucional líder del proyecto:
					</td>
					<td>
						{this.props.dataentities.emailLeader}
					</td>
				</tr>
				<tr>
					<td>
						Teléfono líder del proyecto:
					</td>
					<td>
						{this.props.dataentities.phoneLeader}
					</td>
				</tr>
				<tr>
					<td>
						Nombre de la entidad aliadas:
					</td>
					<td>
						{this.props.dataentities.nameEntityA}
					</td>
				</tr>
				<tr>
					<td>
						NIT de la entidad aliadas:
					</td>
					<td>
						{this.props.dataentities.nameEntityA}
					</td>
				</tr>
				<tr>
					<td>
						Nombre del grupo de investigación participantes del proyecto:
					</td>
					<td>
						{this.props.dataentities.nameGroup}
					</td>
				</tr>
			</div>
			);
	}
}

export default FinalInformationEntities;