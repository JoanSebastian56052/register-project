import React, { Component } from 'react';
import './App.css';
import swal from 'sweetalert2'


class InformationCurrentState extends Component {
	constructor(props) {
		super(props);
		this.state = {
			group1: null,
			group2: null,
			group3: null,
			group4: null,
			group5: null,
			group6: null,
			group7: null,
			isfull: false,

		};
		this.handleOptionChangeGroup1 = this.handleOptionChangeGroup1.bind(this);
		this.handleOptionChangeGroup2 = this.handleOptionChangeGroup2.bind(this);
		this.handleOptionChangeGroup3 = this.handleOptionChangeGroup3.bind(this);
		this.handleOptionChangeGroup4 = this.handleOptionChangeGroup4.bind(this);
		this.handleOptionChangeGroup5 = this.handleOptionChangeGroup5.bind(this);
		this.handleOptionChangeGroup6 = this.handleOptionChangeGroup6.bind(this);
		this.handleOptionChangeGroup7 = this.handleOptionChangeGroup7.bind(this);
		this.isComplete = this.isComplete.bind(this);

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
	handleOptionChangeGroup4(e) {
		this.setState({group4: e.target.value});
	}
	handleOptionChangeGroup5(e) {
		this.setState({group5: e.target.value});
	}
	handleOptionChangeGroup6(e) {
		this.setState({group6: e.target.value});
	}
	handleOptionChangeGroup7(e) {
		this.setState({group7: e.target.value});
	}

	isComplete() {
		if(this.state.group1 !== null) {
			if(this.state.group2 !== null) {
				if(this.state.group3 !== null) {
					if(this.state.group4 !== null) {
						if(this.state.group5 !== null) {
							if(this.state.group6 !== null) {
								if(this.state.group7 !== null) {
									this.setState({isfull: true});
									let newValue = this.state;
									this.props.getIsFullCurrent(newValue);
									swal({
									  position: 'center',
									  type: 'success',
									  title: 'La informacion de la entidades ha sido guardado exitosamente',
									  showConfirmButton: false,
									  timer: 1500
									})
								} else {
									swal({
									  type: 'error',
									  title: 'Oops...',
									  text: 'Debes seleccionar una opcion en: Estado actual en la Fabricación / cadena de suministro!!!',
									})
								}
							} else {
								swal({
								  type: 'error',
								  title: 'Oops...',
								  text: 'Debes seleccionar una opcion en: Estado actual con miras  al mercado!!!',
								})
							}
						} else {
							swal({
							  type: 'error',
							  title: 'Oops...',
							  text: 'Debes seleccionar una opcion en: Conformación del Equipo!!!',
							})
						}
					} else {
						swal({
						  type: 'error',
						  title: 'Oops...',
						  text: 'Debes seleccionar una opcion en: Panorama competitivo actual / Conocimiento del mercado!!!',
						})
					}
				} else {
					swal({
					  type: 'error',
					  title: 'Oops...',
					  text: 'Debes seleccionar una opcion en: Definición/diseño del producto!!!',
					})
				}
			} else {
				swal({
				  type: 'error',
				  title: 'Oops...',
				  text: '!!!',
				})
				alert("Debes seleccionar una opcion en: Grado de desarrollo del producto, servicios o proceso");
			}
		} else {
			swal({
			  type: 'error',
			  title: 'Oops...',
			  text: '!!!',
			})
			alert("Debes seleccionar una opcion en: Grado de desarrollo actual de la Tecnología");
		}

	}

	render() {
		return(

			<div>
				<tr>
					<td>
						&nbsp;&nbsp;<font color="red">*</font>Grado de desarrollo actual de la Tecnología:
					</td>
					<td>
						<form>
						    <div className="radio">
						      <label>
						        <input type="radio" value="El trabajo del proyecto va más allá de la investigación básica y se ha definido el concepto de la tecnología." 
						                      checked={this.state.group1 === "El trabajo del proyecto va más allá de la investigación básica y se ha definido el concepto de la tecnología."} 
						                      onChange={this.handleOptionChangeGroup1} />
						        El trabajo del proyecto va más allá de la investigación básica y se ha definido el concepto de la tecnología.
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="La investigación aplicada ha comenzado y la (s) aplicación (es) práctica (s) han sido identificadas." 
						                      checked={this.state.group1 === "La investigación aplicada ha comenzado y la (s) aplicación (es) práctica (s) han sido identificadas."} 
						                      onChange={this.handleOptionChangeGroup1} />
						        La investigación aplicada ha comenzado y la (s) aplicación (es) práctica (s) han sido identificadas.
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="Han comenzado las pruebas preliminares de los componentes tecnológicos y se ha establecido la viabilidad técnica en un  ambiente de laboratorio." 
						                      checked={this.state.group1 === "Han comenzado las pruebas preliminares de los componentes tecnológicos y se ha establecido la viabilidad técnica en un  ambiente de laboratorio."} 
						                      onChange={this.handleOptionChangeGroup1} />
						        Han comenzado las pruebas preliminares de los componentes tecnológicos y se ha establecido la viabilidad técnica en un  ambiente de laboratorio.
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="Las pruebas iniciales del prototipo / sistema integrado se han completado en un entorno de laboratorio." 
						                      checked={this.state.group1 === "Las pruebas iniciales del prototipo / sistema integrado se han completado en un entorno de laboratorio."} 
						                      onChange={this.handleOptionChangeGroup1} />
						        Las pruebas iniciales del prototipo / sistema integrado se han completado en un entorno de laboratorio.
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="El producto / sistema integrado a escala de laboratorio demuestra el rendimiento en la (s) aplicación (es) deseada (s)." 
						                      checked={this.state.group1 === "El producto / sistema integrado a escala de laboratorio demuestra el rendimiento en la (s) aplicación (es) deseada (s)."} 
						                      onChange={this.handleOptionChangeGroup1} />
						        El producto / sistema integrado a escala de laboratorio demuestra el rendimiento en la (s) aplicación (es) deseada (s).
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="Prototipo industrial / sistema para ensayos en entorno operacional real." 
						                      checked={this.state.group1 === "Prototipo industrial / sistema para ensayos en entorno operacional real."} 
						                      onChange={this.handleOptionChangeGroup1} />
						        Prototipo industrial / sistema para ensayos en entorno operacional real.
						      </label>
						    </div>
						</form>
					</td>
				</tr>
				<tr>
					<td>
						&nbsp;&nbsp;<font color="red">*</font>Grado de desarrollo del producto, servicios o proceso:
					</td>
					<td>
						<form>
						    <div className="radio">
						      <label>
						        <input type="radio" value="No se tiene identificado aún" 
						                      checked={this.state.group2 === "No se tiene identificado aún"} 
						                      onChange={this.handleOptionChangeGroup2} />
						        No se tiene identificado aún
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="El producto / mercado inicial ha sido definido" 
						                      checked={this.state.group2 === "El producto / mercado inicial ha sido definido"} 
						                      onChange={this.handleOptionChangeGroup2} />
						        El producto / mercado inicial ha sido definido
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="El producto / sistema a escala piloto ha sido probado en la (s) aplicación (es) deseada (s)" 
						                      checked={this.state.group2 === "El producto / sistema a escala piloto ha sido probado en la (s) aplicación (es) deseada (s)"} 
						                      onChange={this.handleOptionChangeGroup2} />
						        El producto / sistema a escala piloto ha sido probado en la (s) aplicación (es) deseada (s)
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="La demostración de un prototipo de producto / sistema a escala completa se ha completado en la (s) aplicación (es) deseada (s)" 
						                      checked={this.state.group2 === "La demostración de un prototipo de producto / sistema a escala completa se ha completado en la (s) aplicación (es) deseada (s)"} 
						                      onChange={this.handleOptionChangeGroup2} />
						        La demostración de un prototipo de producto / sistema a escala completa se ha completado en la (s) aplicación (es) deseada (s)
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="Se ha comprobado que el producto / sistema real funciona en su forma casi final bajo un conjunto representativo de condiciones y entornos esperados" 
						                      checked={this.state.group2 === "Se ha comprobado que el producto / sistema real funciona en su forma casi final bajo un conjunto representativo de condiciones y entornos esperados"} 
						                      onChange={this.handleOptionChangeGroup2} />
						        Se ha comprobado que el producto / sistema real funciona en su forma casi final bajo un conjunto representativo de condiciones y entornos esperados
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="El producto / sistema está en forma final y ha sido operado bajo la gama completa de condiciones y ambientes operativos" 
						                      checked={this.state.group2 === "El producto / sistema está en forma final y ha sido operado bajo la gama completa de condiciones y ambientes operativos"} 
						                      onChange={this.handleOptionChangeGroup2} />
						        El producto / sistema está en forma final y ha sido operado bajo la gama completa de condiciones y ambientes operativos
						      </label>
						    </div>
						</form>
					</td>
				</tr>
				<tr>
					<td>
						&nbsp;&nbsp;<font color="red">*</font>Definición/diseño del producto:
					</td>
					<td>
						<form>
						    <div className="radio">
						      <label>
						        <input type="radio" value="No se tiene identificado aún." 
						                      checked={this.state.group3 === "No se tiene identificado aún."} 
						                      onChange={this.handleOptionChangeGroup3} />
						        No se tiene identificado aún.
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="Se han definido una o más hipótesis iniciales del producto" 
						                      checked={this.state.group3 === "Se han definido una o más hipótesis iniciales del producto"} 
						                      onChange={this.handleOptionChangeGroup3} />
						        Se han definido una o más hipótesis iniciales del producto
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="La asignación de los atributos del producto / sistema a las necesidades del cliente ha resaltado una propuesta de valor clara" 
						                      checked={this.state.group3 === "La asignación de los atributos del producto / sistema a las necesidades del cliente ha resaltado una propuesta de valor clara"} 
						                      onChange={this.handleOptionChangeGroup3} />
						        La asignación de los atributos del producto / sistema a las necesidades del cliente ha resaltado una propuesta de valor clara
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="El producto / sistema ha sido escalado de laboratorio a escala piloto y los problemas que pueden afectar el logro de una escala completa han sido identificados" 
						                      checked={this.state.group3 === "El producto / sistema ha sido escalado de laboratorio a escala piloto y los problemas que pueden afectar el logro de una escala completa han sido identificados"} 
						                      onChange={this.handleOptionChangeGroup3} />
						        El producto / sistema ha sido escalado de laboratorio a escala piloto y los problemas que pueden afectar el logro de una escala completa han sido identificados
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="Se desarrolló un modelo integral de propuesta de valor para el cliente, que incluye una comprensión detallada del producto / sistema con especificaciones de diseño, certificaciones requeridas y compensaciones." 
						                      checked={this.state.group3 === "Se desarrolló un modelo integral de propuesta de valor para el cliente, que incluye una comprensión detallada del producto / sistema con especificaciones de diseño, certificaciones requeridas y compensaciones."} 
						                      onChange={this.handleOptionChangeGroup3} />
						        Se desarrolló un modelo integral de propuesta de valor para el cliente, que incluye una comprensión detallada del producto / sistema con especificaciones de diseño, certificaciones requeridas y compensaciones.
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="La optimización del diseño final del producto / sistema se ha completado, se han obtenido las certificaciones requeridos y el producto / sistema ha incorporado requisitos detallados de los clientes y productos." 
						                      checked={this.state.group3 === "La optimización del diseño final del producto / sistema se ha completado, se han obtenido las certificaciones requeridos y el producto / sistema ha incorporado requisitos detallados de los clientes y productos."} 
						                      onChange={this.handleOptionChangeGroup3} />
						        La optimización del diseño final del producto / sistema se ha completado, se han obtenido las certificaciones requeridos y el producto / sistema ha incorporado requisitos detallados de los clientes y productos.
						      </label>
						    </div>
						</form>
					</td>
				</tr>
				<tr>
					<td>
						&nbsp;&nbsp;<font color="red">*</font>Panorama competitivo actual / Conocimiento del mercado:
					</td>
					<td>
						<form>
						    <div className="radio">
						      <label>
						        <input type="radio" value="No se tiene identificado aún." 
						                      checked={this.state.group4 === "No se tiene identificado aún."} 
						                      onChange={this.handleOptionChangeGroup4} />
						        No se tiene identificado aún.
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="Se realizó una investigación de mercado secundaria y el conocimiento básico de aplicaciones potenciales y el panorama competitivo ha sido identificado." 
						                      checked={this.state.group4 === "Se realizó una investigación de mercado secundaria y el conocimiento básico de aplicaciones potenciales y el panorama competitivo ha sido identificado."} 
						                      onChange={this.handleOptionChangeGroup4} />
						        Se realizó una investigación de mercado secundaria y el conocimiento básico de aplicaciones potenciales y el panorama competitivo ha sido identificado.
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="Se ha completado la investigación de mercado principal para probar la viabilidad comercial del producto / sistema y la comprensión básica de productos / sistemas competitivos han sido demostrados." 
						                      checked={this.state.group4 === "Se ha completado la investigación de mercado principal para probar la viabilidad comercial del producto / sistema y la comprensión básica de productos / sistemas competitivos han sido demostrados."} 
						                      onChange={this.handleOptionChangeGroup4} />
						        Se ha completado la investigación de mercado principal para probar la viabilidad comercial del producto / sistema y la comprensión básica de productos / sistemas competitivos han sido demostrados.
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="Se ha completado una exhaustiva investigación de mercado para comprobar la viabilidad comercial del producto / sistema y se ha demostrado una comprensión intermedia de los productos / sistemas de la competencia." 
						                      checked={this.state.group4 === "Se ha completado una exhaustiva investigación de mercado para comprobar la viabilidad comercial del producto / sistema y se ha demostrado una comprensión intermedia de los productos / sistemas de la competencia."} 
						                      onChange={this.handleOptionChangeGroup4} />
						        Se ha completado una exhaustiva investigación de mercado para comprobar la viabilidad comercial del producto / sistema y se ha demostrado una comprensión intermedia de los productos / sistemas de la competencia.
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="Se completó un análisis competitivo para ilustrar las características y ventajas únicas del producto / sistema en comparación con los productos / sistemas de la competencia." 
						                      checked={this.state.group4 === "Se completó un análisis competitivo para ilustrar las características y ventajas únicas del producto / sistema en comparación con los productos / sistemas de la competencia."} 
						                      onChange={this.handleOptionChangeGroup4} />
						        Se completó un análisis competitivo para ilustrar las características y ventajas únicas del producto / sistema en comparación con los productos / sistemas de la competencia.
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="Se ha logrado una comprensión total y completa del panorama competitivo, la (s) aplicación (es) de destino, los productos / sistemas competitivos y el mercado." 
						                      checked={this.state.group4 === "Se ha logrado una comprensión total y completa del panorama competitivo, la (s) aplicación (es) de destino, los productos / sistemas competitivos y el mercado."} 
						                      onChange={this.handleOptionChangeGroup4} />
						        Se ha logrado una comprensión total y completa del panorama competitivo, la (s) aplicación (es) de destino, los productos / sistemas competitivos y el mercado.
						      </label>
						    </div>
						</form>
					</td>
				</tr>
				<tr>
					<td>
						&nbsp;&nbsp;<font color="red">*</font>Conformación del Equipo:
					</td>
					<td>
						<form>
						    <div className="radio">
						      <label>
						        <input type="radio" value="No se tiene identificado aún." 
						                      checked={this.state.group5 === "No se tiene identificado aún."} 
						                      onChange={this.handleOptionChangeGroup5} />
						        No se tiene identificado aún.
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="Ningún equipo o compañía en el lugar (persona natural, ninguna entidad legal)" 
						                      checked={this.state.group5 === "Ningún equipo o compañía en el lugar (persona natural, ninguna entidad legal)"} 
						                      onChange={this.handleOptionChangeGroup5} />
						        Ningún equipo o compañía en el lugar (persona natural, ninguna entidad legal)
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="Fundadores únicamente técnicos o no técnicos que dirigen la empresa sin asistencia externa" 
						                      checked={this.state.group5 === "Fundadores únicamente técnicos o no técnicos que dirigen la empresa sin asistencia externa"} 
						                      onChange={this.handleOptionChangeGroup5} />
						        Fundadores únicamente técnicos o no técnicos que dirigen la empresa sin asistencia externa
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="Fundadores únicamente técnicos o no técnicos que dirigen la empresa con ayuda de asesores externos / mentores y / o incubadora / aceleradora" 
						                      checked={this.state.group5 === "Fundadores únicamente técnicos o no técnicos que dirigen la empresa con ayuda de asesores externos / mentores y / o incubadora / aceleradora"} 
						                      onChange={this.handleOptionChangeGroup5} />
						        Fundadores únicamente técnicos o no técnicos que dirigen la empresa con ayuda de asesores externos / mentores y / o incubadora / aceleradora
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="Equipo equilibrado con experiencia en desarrollo / comercialización técnica y comercial al cargo de la empresa con la asistencia de asesores externos / mentores" 
						                      checked={this.state.group5 === "Equipo equilibrado con experiencia en desarrollo / comercialización técnica y comercial al cargo de la empresa con la asistencia de asesores externos / mentores"} 
						                      onChange={this.handleOptionChangeGroup5} />
						        Equipo equilibrado con experiencia en desarrollo / comercialización técnica y comercial al cargo de la empresa con la asistencia de asesores externos / mentores
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="Equipo equilibrado con todas las capacidades a bordo (por ejemplo, ventas, marketing, servicio al cliente, operaciones, etc.) dirigiendo la empresa con asistencia de asesores externos / mentores" 
						                      checked={this.state.group5 === "Equipo equilibrado con todas las capacidades a bordo (por ejemplo, ventas, marketing, servicio al cliente, operaciones, etc.) dirigiendo la empresa con asistencia de asesores externos / mentores"} 
						                      onChange={this.handleOptionChangeGroup5} />
						        Equipo equilibrado con todas las capacidades a bordo (por ejemplo, ventas, marketing, servicio al cliente, operaciones, etc.) dirigiendo la empresa con asistencia de asesores externos / mentores
						      </label>
						    </div>
						</form>
					</td>
				</tr>
				<tr>
					<td>
						&nbsp;&nbsp;<font color="red">*</font>Estado actual con miras  al mercado:
					</td>
					<td>
						<form>
						    <div className="radio">
						      <label>
						        <input type="radio" value="No se tiene identificado aún." 
						                      checked={this.state.group6 === "No se tiene identificado aún."} 
						                      onChange={this.handleOptionChangeGroup6} />
						        No se tiene identificado aún.
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="El modelo de negocio inicial y la propuesta de valor han sido definidos." 
						                      checked={this.state.group6 === "El modelo de negocio inicial y la propuesta de valor han sido definidos."} 
						                      onChange={this.handleOptionChangeGroup6} />
						        El modelo de negocio inicial y la propuesta de valor han sido definidos.
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="Los clientes / socios han sido entrevistados para comprender sus puntos / necesidades de dolor, y el modelo comercial y la propuesta de valor han sido refinados en base a los comentarios de los clientes / socios." 
						                      checked={this.state.group6 === "Los clientes / socios han sido entrevistados para comprender sus puntos / necesidades de dolor, y el modelo comercial y la propuesta de valor han sido refinados en base a los comentarios de los clientes / socios."} 
						                      onChange={this.handleOptionChangeGroup6} />
						        Los clientes / socios han sido entrevistados para comprender sus puntos / necesidades de dolor, y el modelo comercial y la propuesta de valor han sido refinados en base a los comentarios de los clientes / socios.
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="Se han definido las necesidades del mercado y del cliente / socio y cómo se traducen a los requisitos del producto, y se han desarrollado relaciones iniciales con los principales interesados ​​en toda la cadena de valor." 
						                      checked={this.state.group6 === "Se han definido las necesidades del mercado y del cliente / socio y cómo se traducen a los requisitos del producto, y se han desarrollado relaciones iniciales con los principales interesados ​​en toda la cadena de valor."} 
						                      onChange={this.handleOptionChangeGroup6} />
						        Se han definido las necesidades del mercado y del cliente / socio y cómo se traducen a los requisitos del producto, y se han desarrollado relaciones iniciales con los principales interesados ​​en toda la cadena de valor.
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="Se han formado asociaciones con partes interesadas clave en toda la cadena de valor (por ejemplo, proveedores, socios, proveedores de servicios y clientes)" 
						                      checked={this.state.group6 === "Se han formado asociaciones con partes interesadas clave en toda la cadena de valor (por ejemplo, proveedores, socios, proveedores de servicios y clientes)"} 
						                      onChange={this.handleOptionChangeGroup6} />
						        Se han formado asociaciones con partes interesadas clave en toda la cadena de valor (por ejemplo, proveedores, socios, proveedores de servicios y clientes)
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="Se han establecido acuerdos de suministro con proveedores y socios y se han recibido las órdenes de compra iniciales de los clientes." 
						                      checked={this.state.group6 === "Se han establecido acuerdos de suministro con proveedores y socios y se han recibido las órdenes de compra iniciales de los clientes."} 
						                      onChange={this.handleOptionChangeGroup6} />
						        Se han establecido acuerdos de suministro con proveedores y socios y se han recibido las órdenes de compra iniciales de los clientes.
						      </label>
						    </div>
						</form>
					</td>
				</tr>
				<tr>
					<td>
						&nbsp;&nbsp;<font color="red">*</font>Estado actual en la Fabricación / cadena de suministro:
					</td>
					<td>
						<form>
						    <div className="radio">
						      <label>
						        <input type="radio" value="No se tiene identificado aún." 
						                      checked={this.state.group7 === "No se tiene identificado aún."} 
						                      onChange={this.handleOptionChangeGroup7} />
						        No se tiene identificado aún.
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="Se identificaron y mapearon posibles proveedores, socios y clientes en un análisis inicial de la cadena de valor." 
						                      checked={this.state.group7 === "Se identificaron y mapearon posibles proveedores, socios y clientes en un análisis inicial de la cadena de valor."} 
						                      onChange={this.handleOptionChangeGroup7} />
						        Se identificaron y mapearon posibles proveedores, socios y clientes en un análisis inicial de la cadena de valor.
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="Se establecieron relaciones con posibles proveedores, socios, proveedores de servicios y clientes, y se proporcionaron comentarios sobre los requisitos del producto y la capacidad de fabricación." 
						                      checked={this.state.group7 === "Se establecieron relaciones con posibles proveedores, socios, proveedores de servicios y clientes, y se proporcionaron comentarios sobre los requisitos del producto y la capacidad de fabricación."} 
						                      onChange={this.handleOptionChangeGroup7} />
						        Se establecieron relaciones con posibles proveedores, socios, proveedores de servicios y clientes, y se proporcionaron comentarios sobre los requisitos del producto y la capacidad de fabricación.
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="Las calificaciones del proceso de fabricación (por ejemplo, QC / QA) se han definido y están en progreso" 
						                      checked={this.state.group7 === "Las calificaciones del proceso de fabricación (por ejemplo, QC / QA) se han definido y están en progreso"} 
						                      onChange={this.handleOptionChangeGroup7} />
						        Las calificaciones del proceso de fabricación (por ejemplo, QC / QA) se han definido y están en progreso
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="Los productos / sistemas se han fabricado y vendido a clientes iniciales" 
						                      checked={this.state.group7 === "Los productos / sistemas se han fabricado y vendido a clientes iniciales"} 
						                      onChange={this.handleOptionChangeGroup7} />
						        Los productos / sistemas se han fabricado y vendido a clientes iniciales
						      </label>
						    </div>
						    <div className="radio">
						      <label>
						        <input type="radio" value="Se ha logrado la fabricación a gran escala y el despliegue generalizado de producto / sistema a clientes y / o usuarios." 
						                      checked={this.state.group7 === "Se ha logrado la fabricación a gran escala y el despliegue generalizado de producto / sistema a clientes y / o usuarios."} 
						                      onChange={this.handleOptionChangeGroup7} />
						        Se ha logrado la fabricación a gran escala y el despliegue generalizado de producto / sistema a clientes y / o usuarios.
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
export default InformationCurrentState;