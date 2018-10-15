import React, { Component } from 'react';
import './App.css';

class InformationDesiredState extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return(
			<div>
				<h3>Autodiagnóstico estado al cual se quiere llegar y la necesidad identificada</h3>
				<font color="red">*</font>Grado de novedad del desarrollo:
		        <input type="text" placeholder="Nombre Proyecto" onChange={this.takeNameProject} onFocus={this.value=""}/>
		        <br/><br/>
		        <font color="red">*</font>Estado jurídico del desarrollo del proyecto:
			    <select value={this.state.type} onChange={this.takeType}>
		            <option value="null">-- Seleccione una opcion --</option>
		            <option value="Spin-off">Spin-off</option>
		            <option value="Empresa">Empresa</option>
		            <option value="Start Up">Start Up</option>
	          	</select>
	          	<br/><br/>
		        <font color="red">*</font>Cuál es su objetivo con el desarrollo del proyecto en el plazo establecido?:
		        <form id="form-a" name="form-a">
				    <input type="radio" name="name-a" id="idaa" value="No se tiene identificado aún." checked="checked" />
				    <input type="radio" name="name-b" id="idba" value="Licencia o Cesión de la Tecnología/Desarrollo " />
				    <input type="radio" name="name-c" id="idca" value="Explotación Directa "/>
				</form>
	          	<br/><br/>
		        <font color="red">*</font>Grado de desarrollo de la Tecnología al cual se desea llegar con el proyecto:
		        <form id="form-b" name="form-b">
				    <input type="radio" name="name-a" id="idab" value="La investigación aplicada ha comenzado y la (s) aplicación (es) práctica (s) han sido identificadas" checked="checked" />
				    <input type="radio" name="name-b" id="idbb" value="Han finalizado las pruebas preliminares de los componentes tecnológicos y se ha establecido la viabilidad técnica en un  ambiente de laboratorio" />
				    <input type="radio" name="name-c" id="idcb" value="Las pruebas iniciales del prototipo / sistema integrado se han completado en un entorno de laboratorio"/>
				    <input type="radio" name="name-b" id="iddb" value="El producto / sistema integrado a escala de laboratorio demuestra el rendimiento en la (s) aplicación (es) deseada (s)" />
				    <input type="radio" name="name-b" id="ideb" value="Prototipo industrial / sistema para ensayos en entorno operacional real" />
				    <input type="radio" name="name-b" id="idfb" value="El prototipo /sistema se da por probado y funciona. Se certifica la tecnología según las normas del mercado donde vaya a operar" />
				    <input type="radio" name="name-b" id="idgb" value="Lanzamiento del nuevo producto " />
				</form>
				<br/><br/>
		        <font color="red">*</font>Limitaciones para el desarrollo del proyecto
		        <form id="form-c" name="form-c">
				    <input type="radio" name="name-a" id="idac" value="Apoyo financiero" />
				    <input type="radio" name="name-b" id="idbc" value="Acompañamiento en la formulación del proyecto" />
				    <input type="radio" name="name-c" id="idcc" value="Acceso a nuevos mercados "/>
				    <input type="radio" name="name-b" id="iddc" value="Personal Capacitado y/o Talento Humano" />
				    <input type="radio" name="name-b" id="idec" value="Jurídico - Legal" />
				    <input type="radio" name="name-b" id="idfc" value="Otro (describir)" />
				</form>
			</div>
		);
	}
}

export default InformationDesiredState;