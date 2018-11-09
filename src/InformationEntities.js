import React, { Component } from 'react';
import './App.css';

class InformationEntities extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nature: null,
			type: null,
			nameEntity: "",
			nitEntity: "",
			nameLeader: "",
			ocupationLeader: "",
			emailLeader: "",
			phoneLeader: "",
			nameEntityA: "",
			nitEntityA: "",
			nameGroup: "",
			isfull: false
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
		this.esNumerico = this.esNumerico.bind(this);
	}
	esNumerico(newValue) {
		let numerico = false;
		if (!/^([0-9])*$/.test(newValue)) {
		} else {
			numerico = true;
		}
		return numerico;
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
		console.log(this.state);
		if(this.state.nature !== null) {
			if(this.state.type !== null) {
				if(this.state.nameEntity.length !== 0) {
					if(this.state.nitEntity.length !== 0 && this.esNumerico(this.state.nitEntity) === true) {
						if(this.state.nameLeader.length !== 0) {
							if(this.state.ocupationLeader.length !== 0) {
								if(this.state.emailLeader.length !== 0) {
									if(this.state.phoneLeader.length !== 0 && this.esNumerico(this.state.phoneLeader) === true) {
										if(this.state.nameEntityA.length !== 0 ) {
											if(this.state.nitEntityA.length !== 0 && this.esNumerico(this.state.nitEntityA) === true) {
												if (this.state.nameGroup.length !== 0) {
													this.setState({isfull: true});
													this.props.getIsFullEntities(this.state);
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
										alert("El campo telefono del lider del proyecto es obligatorio o debes ingresar un numero de telefono valido");
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
						alert("El campo NIT de la entidad proponente del proyecto es obligatorio o debes ingresar un dato numerico");
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
						<td>
							&nbsp;&nbsp;<font color="red">*</font>ID Proyecto: 
						</td>
						<td>
							<input type="text" placeholder="1" />
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
							<input type="text" placeholder="Nombre Entidad" onChange={this.takeNameEntity} value={this.state.nameEntity}/>
						</td>
					</tr>
					<tr>
						<td>
							&nbsp;&nbsp;<font color="red">*</font>NIT (sin dígito verificación):
						</td>
						<td>
							<input type="text" placeholder="NIT" onChange={this.takeNitEntity} value={this.state.nitEntity}/>
						</td>
					</tr>
					<tr>
						<td>
							&nbsp;&nbsp;<font color="red">*</font>Nombre lider del proyecto:
						</td>
						<td>
							<input type="text" placeholder="Nombre Lider" onChange={this.takeNameLeader} value={this.state.nameLeader}/>
						</td>
					</tr>
					<tr>
						<td>
							&nbsp;&nbsp;<font color="red">*</font>Cargo lider del proyecto:
						</td>
						<td>
							<input type="text" placeholder="Cargo Lider" onChange={this.takeOcupationLeader} value={this.state.ocupationLeader}/>
						</td>
					</tr>
					<tr>
						<td>
							&nbsp;&nbsp;<font color="red">*</font>Correo electrónico institucional lider del proyecto (Proponente principal):
						</td>
						<td>
							<input type="text" placeholder="e-mail" onChange={this.takeEmailLeader} value={this.state.emailLeader}/>
						</td>
					</tr>
					<tr>
						<td>
							&nbsp;&nbsp;<font color="red">*</font>Teléfono lider del proyecto (Proponente principal):
						</td>
						<td>
							<input type="text" placeholder="Teléfono" onChange={this.takePhoneLeader} value={this.state.phoneLeader}/>
						</td>
					</tr>
					<tr>
						<td>
							&nbsp;&nbsp;<font color="red">*</font>Nombre de la entidad aliada (Incluir nit de cada aliado cuando aplique):
						</td>
						<td>
							<input type="text" placeholder="name" onChange={this.takeNameEntityA} value={this.state.nameEntityA}/>
						</td>
					</tr>
					<tr>
						<td>
	        				&nbsp;&nbsp;<font color="red">*</font>NIT (sin dígito verificación):
						</td>
						<td>
							<input type="text" placeholder="NIT" onChange={this.takeNitEntityA} value={this.state.nitEntityA}/>
						</td>
					</tr>
					<tr>
						<td>
							&nbsp;&nbsp;<font color="red">*</font>Nombre del grupo de investigación participante del proyecto:
						</td>
						<td>
							<input type="text" placeholder="name" onChange={this.takeNameGroup} value={this.state.nameGroup}/>
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