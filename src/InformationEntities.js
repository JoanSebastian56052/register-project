import React, { Component } from 'react';
import './App.css';
class InformationEntities extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nature: null,
			type: null,
			nameEntity: null,
			nitEntity: null,
			nameLeader: null,
			ocupationLeader: null,
			emailLeader: null,
			phoneLeader: null,
			nameEntityA: null,
			nitEntityA: null,
			nameGroup: null,
		}
		this.takeNature = this.takeNature.bind(this);
		this.takeType = this.takeType.bind(this);
		this.takeNameEntity = this.takeNameEntity.bind(this);
		this.takeNitEntity = this.takeNitEntity.bind(this);
		this.takeNameLeader = this.takeNameLeader.bind(this);
		this.takeOcupationLeader = this.takeOcupationLeader.bind(this);
		this.takeEmailLeader = this.takeEmailLeader.bind(this);
		this.takePhoneLeader = this.takePhoneLeader.bind(this);
		this.takeNameEntityA = this.takeNameEntityA.bind(this);
		this.takeNitEntityA = this.takeNitEntityA.bind(this);
		this.takeNameGroup = this.takeNameGroup.bind(this);
		this.isComplete = this.isComplete.bind(this);
	}

	takeNature(e) {
		this.setState({nature: e.target.value})
	}

	takeType(e){
		this.setState({type: e.target.value})	
	}

	takeNameEntity(e) {
		this.setState({nameEntity: e.target.value})
	}

	takeNitEntity(e) {
		this.setState({nitEntity: e.target.value})
	}

	takeNameLeader(e) {
		this.setState({nameLeader: e.target.value})
	}

	takeOcupationLeader(e) {
		this.setState({ocupationLeader: e.target.value})
	}

	takeEmailLeader(e) {
		this.setState({emailLeader: e.target.value})
	}

	takePhoneLeader(e) {
		this.setState({phoneLeader: e.target.value})
	}

	takeNameEntityA(e) {
		this.setState({nameEntityA: e.target.value})
	}

	takeNitEntityA(e) {
		this.setState({nitEntityA: e.target.value})
	}

	takeNameGroup(e) {
		this.setState({nameGroup: e.target.value})
	}
	isComplete() {

		if(this.state.nature !== null) {
			if(this.state.type !== null) {
				if(this.state.nameEntity !== null) {
					if(this.state.nitEntity !== null) {
						if(this.state.nameLeader !== null) {
							if(this.state.ocupationLeader !== null) {
								if(this.state.emailLeader !== null) {
									if(this.state.phoneLeader !== null) {
										if(this.state.nameEntityA !== null) {
											if(this.state.nitEntityA !== null) {
												if (this.state.nameGroup !== null) {
													let newValue = true;
													this.props.getIsFullEntities(newValue)
												} else {
													alert("El campo nombre del grupo asociado es obligatorio");
												}
											} else {
												alert("El campo nit de la entidad asociada es obligatorio");
											}
										} else {
											alert("El campo nombre de la entidad asociada es obligatorio");
										}
									} else {
										alert("El campo telefono del lider del proyecto es obligatorio");
									}
								} else {
									alert("El campo e-mail del lider del proyecto es obligatorio");
								}
							} else {
								alert("El campo ocupacion del lider del proyecto es obligatorio");
							}
						} else {
							alert("El campo nombre del lider del proyecto es obligatorio");
						}
					} else {
						alert("El campo NIT de la entidad proponente del proyecto es obligatorio");
					}
				} else {
					alert("El campo nombre de la entidad proponente del proyecto es obligatorio");
				}
			} else {
				alert("El campo tipo de la entidad proponente del proyecto es obligatorio");
			}
		} else {
			alert("El campo naturaleza de la entidad proponente del proyecto es obligatorio");
		}

	}

	render() {
		return(
				<div>
					<tr>
						Información Inicial de la(s) entidades:
					</tr>
					<tr>
						<td>
							&nbsp;&nbsp;<font color="red">*</font>ID Proyecto: 
						</td>
						<td>
							<input type="text" placeholder="1"/>
						</td>
					</tr>
					<tr>
						<td>
							&nbsp;&nbsp;<font color="red">*</font>Naturaleza de la entidad proponente:		        
						</td>
						<td>
							<select value={this.state.nature} onChange={this.takeNature}>
					            <option value="null">-- Seleccione una opcion --</option>
					            <option value="Publica">Publica</option>
					            <option value="Mixta">Mixta</option>
					            <option value="Privada">Privada</option>
					        </select>
						</td>
					</tr>
					<tr>
						<td>
						&nbsp;&nbsp;<font color="red">*</font>Tipo de proponente:
						</td>
						<td>
							<select value={this.state.type} onChange={this.takeType}>
					            <option value="null">-- Seleccione una opcion --</option>
					            <option value="Universidad">Universidad</option>
					            <option value="CDT">CDT</option>
					            <option value="Empresa">Empresa</option>
					            <option value="Start Up">Start Up</option>
					        </select>
						</td>
					</tr>
					<tr>
						<td>
							&nbsp;&nbsp;<font color="red">*</font>Nombre de la entidad proponente principal: 
						</td>
						<td>
							<input type="text" placeholder="Nombre Entidad" onChange={this.takeNameEntity} onFocus={this.value=""}/>
						</td>
					</tr>
					<tr>
						<td>
							&nbsp;&nbsp;<font color="red">*</font>NIT (sin dígito verificación):
						</td>
						<td>
							<input type="text" placeholder="NIT" onChange={this.takeNitEntity} onFocus={this.value=""}/>
						</td>
					</tr>
					<tr>
						<td>
							&nbsp;&nbsp;<font color="red">*</font>Nombre lider del proyecto:
						</td>
						<td>
							<input type="text" placeholder="Nombre Lider" onChange={this.takeNameLeader} onFocus={this.value=""}/>
						</td>
					</tr>
					<tr>
						<td>
							&nbsp;&nbsp;<font color="red">*</font>Cargo lider del proyecto:
						</td>
						<td>
							<input type="text" placeholder="Cargo Lider" onChange={this.takeOcupationLeader} onFocus={this.value=""}/>
						</td>
					</tr>
					<tr>
						<td>
							&nbsp;&nbsp;<font color="red">*</font>Correo electrónico institucional lider del proyecto (Proponente principal):
						</td>
						<td>
							<input type="text" placeholder="e-mail" onChange={this.takeEmailLeader} onFocus={this.value=""}/>
						</td>
					</tr>
					<tr>
						<td>
							&nbsp;&nbsp;<font color="red">*</font>Teléfono lider del proyecto (Proponente principal):
						</td>
						<td>
							<input type="text" placeholder="Teléfono" onChange={this.takePhoneLeader}/>
						</td>
					</tr>
					<tr>
						<td>
							&nbsp;&nbsp;<font color="red">*</font>Nombre de la entidad aliada (Incluir nit de cada aliado cuando aplique):
						</td>
						<td>
							<input type="text" placeholder="name" onChange={this.takeNameEntityA} onFocus={this.value=""}/>
						</td>
					</tr>
					<tr>
						<td>
	        				&nbsp;&nbsp;<font color="red">*</font>NIT (sin dígito verificación):
						</td>
						<td>
							<input type="text" placeholder="NIT" onChange={this.takeNitEntityA} onFocus={this.value=""}/>
						</td>
					</tr>
					<tr>
						<td>
							&nbsp;&nbsp;<font color="red">*</font>Nombre del grupo de investigación participante del proyecto:
						</td>
						<td>
							<input type="text" placeholder="name" onChange={this.takeNameGroup} onFocus={this.value=""}/>
						</td>
					</tr>
					<br/>
					<center>
						<input type="button" value="Guardar" onClick={this.isComplete}/>	
					</center>
		        </div>
			);
	}
}

export default InformationEntities;