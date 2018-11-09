import React, { Component } from 'react';
import './App.css';

class InformationDesiredState extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			type: null,
			group1: null,
			group2: null,
			group3: null,
			isfull: false,
		};
		this.takeNameProject = this.takeNameProject.bind(this);
		this.takeType = this.takeType.bind(this);
		this.handleOptionChangeGroup1 = this.handleOptionChangeGroup1.bind(this);
		this.handleOptionChangeGroup2 = this.handleOptionChangeGroup2.bind(this);
		this.handleOptionChangeGroup3 = this.handleOptionChangeGroup3.bind(this);
		this.isComplete = this.isComplete.bind(this);
	}

	takeNameProject(e) {
		this.setState({name: e.target.value});
	}
	takeType(e){
		this.setState({type: e.target.value})	
	}
	handleOptionChangeGroup1(e) {
		this.setState({group1: e.target.value});
	}
	handleOptionChangeGroup2(e) {
		this.setState({group2: e.target.value});
	}
	handleOptionChangeGroup3(e) {
		this.setState({group3: e.target.value});
	}

	isComplete() {
		if(this.state.name.length !== 0) {
			if(this.state.type !== null) {
				if(this.state.group1 !== null) {
					if(this.state.group2 !== null) {
						if(this.state.group3 !== null) {
							this.setState({isfull: true});
							let newValue = this.state;
							this.props.getIsFullDesired(newValue);
						} else {
							alert("El campo Limitaciones para el desarrollo del proyecto es obligatorio");
						}
					} else {
						alert("El campo Grado de desarrollo de la Tecnología al cual se desea llegar con el proyecto: es obligatorio");
					}	
				} else {
					alert("El campo Cuál es su objetivo con el desarrollo del proyecto en el plazo establecido? es obligatorio");
				}
			}else {
				alert("El campo Estado jurídico del desarrollo del proyecto: es obligatorio");
			}
		} else {
			alert("El campo Grado de novedad del desarrollo es obligatorio");
		}
	}

	render() {
		return(
			<div>
				<tr>
					<td>
						<font color="red">*</font>Grado de novedad del desarrollo:
					</td>
					<td>
						<input type="text" placeholder="Grado de Novedad" onChange={this.takeNameProject}/>
					</td>
				</tr>
				<tr>
					<td>
						<font color="red">*</font>Estado jurídico del desarrollo del proyecto:
					</td>
					<td>
						<select value={this.state.type} onChange={this.takeType}>
				            <option value="null">-- Seleccione una opcion --</option>
				            <option value="Spin-off">Spin-off</option>
				            <option value="Empresa">Empresa</option>
				            <option value="Start Up">Start Up</option>
			          	</select>
					</td>
				</tr>
				<tr>
					<td>
						<font color="red">*</font>Cuál es su objetivo con el desarrollo del proyecto en el plazo establecido?:
					</td>
					<td>
						<form>
						    <div className="radio">
						      <label>
						        <input type="radio" value="1" 
						                      checked={this.state.group1 === "1"} 
						                      onChange={this.handleOptionChangeGroup1} />
						        No se tiene identificado aún.
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="2" 
						                      checked={this.state.group1 === "2"} 
						                      onChange={this.handleOptionChangeGroup1} />
						        Licencia o Cesión de la Tecnología/Desarrollo
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="3" 
						                      checked={this.state.group1 === "3"} 
						                      onChange={this.handleOptionChangeGroup1} />
						        Explotación Directa .
						      </label>
						    </div>						    
						</form>
					</td>
				</tr>
				<tr>
					<td>
						<font color="red">*</font>Grado de desarrollo de la Tecnología al cual se desea llegar con el proyecto:
					</td>
					<td>
						<form>
						    <div className="radio">
						      <label>
						        <input type="radio" value="1" 
						                      checked={this.state.group2 === "1"} 
						                      onChange={this.handleOptionChangeGroup2} />
						        La investigación aplicada ha comenzado y la (s) aplicación (es) práctica (s) han sido identificadas.
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="2" 
						                      checked={this.state.group2 === "2"} 
						                      onChange={this.handleOptionChangeGroup2} />
						        Han finalizado las pruebas preliminares de los componentes tecnológicos y se ha establecido la viabilidad técnica en un  ambiente de laboratorio
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="3" 
						                      checked={this.state.group2 === "3"} 
						                      onChange={this.handleOptionChangeGroup2} />
						        Las pruebas iniciales del prototipo / sistema integrado se han completado en un entorno de laboratorio
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="4" 
						                      checked={this.state.group2 === "4"} 
						                      onChange={this.handleOptionChangeGroup2} />
						        El producto / sistema integrado a escala de laboratorio demuestra el rendimiento en la (s) aplicación (es) deseada (s)
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="5" 
						                      checked={this.state.group2 === "5"} 
						                      onChange={this.handleOptionChangeGroup2} />
						        Prototipo industrial / sistema para ensayos en entorno operacional real
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="6" 
						                      checked={this.state.group2 === "6"} 
						                      onChange={this.handleOptionChangeGroup2} />
						        El prototipo /sistema se da por probado y funciona. Se certifica la tecnología según las normas del mercado donde vaya a operar
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="7" 
						                      checked={this.state.group2 === "7"} 
						                      onChange={this.handleOptionChangeGroup2} />
						        Lanzamiento del nuevo producto 
						      </label>
						    </div>
						</form>
					</td>
				</tr>
				<tr>
					<td>
						<font color="red">*</font>Limitaciones para el desarrollo del proyecto
					</td>
					<td>
						<form>
						    <div className="radio">
						      <label>
						        <input type="radio" value="1" 
						                      checked={this.state.group3 === "1"} 
						                      onChange={this.handleOptionChangeGroup3} />
						        Apoyo financiero
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="2" 
						                      checked={this.state.group3 === "2"} 
						                      onChange={this.handleOptionChangeGroup3} />
						        Acompañamiento en la formulación del proyecto
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="3" 
						                      checked={this.state.group3 === "3"} 
						                      onChange={this.handleOptionChangeGroup3} />
						        Acceso a nuevos mercados 
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="4" 
						                      checked={this.state.group3 === "4"} 
						                      onChange={this.handleOptionChangeGroup3} />
						        Personal Capacitado y/o Talento Humano
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="5" 
						                      checked={this.state.group3 === "5"} 
						                      onChange={this.handleOptionChangeGroup3} />
						        Jurídico - Legal
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="6" 
						                      checked={this.state.group3 === "6"} 
						                      onChange={this.handleOptionChangeGroup3} />
						        Otro (describir)
						      </label>
						    </div>
						</form>
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

export default InformationDesiredState;