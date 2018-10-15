import React, { Component } from 'react';
import './App.css';

class InformationCurrentState extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(

			<div>
				<h3>Autodiagnostico estado actual del proyecto</h3>
				&nbsp;&nbsp;<font color="red">*</font>Grado de desarrollo actual de la Tecnología:
				<form id="form-a" name="form-a">
				    <input type="radio" name="name-a" id="idaa" value="El trabajo del proyecto va más allá de la investigación básica y se ha definido el concepto de la tecnología " checked="checked" />
				    <input type="radio" name="name-b" id="idba" value="La investigación aplicada ha comenzado y la (s) aplicación (es) práctica (s) han sido identificadas" />
				    <input type="radio" name="name-c" id="idca" value="Han comenzado las pruebas preliminares de los componentes tecnológicos y se ha establecido la viabilidad técnica en un  ambiente de laboratorio"/>
				    <input type="radio" name="name-d" id="idda" value="Las pruebas iniciales del prototipo / sistema integrado se han completado en un entorno de laboratorio" /> 	
				    <input type="radio" name="name-e" id="idea" value="El producto / sistema integrado a escala de laboratorio demuestra el rendimiento en la (s) aplicación (es) deseada (s)"/>
				    <input type="radio" name="name-f" id="idfa" value="Prototipo industrial / sistema para ensayos en entorno operacional real" />
				    <input type="radio" name="name-g" id="idga" value="El prototipo /sistema se da por probado y funciona. Se certifica la tecnología según las normas del mercado donde vaya a operar"/>
				    <input type="radio" name="name-h" id="idha" value="Lanzamiento del nuevo producto"/>
				</form>
				&nbsp;&nbsp;<font color="red">*</font>Grado de desarrollo del producto, servicios o proceso:
				<form id="form-b" name="form-b">
				    <input type="radio" name="name-a" id="idab" value="No se tiene identificado aún." checked="checked" />
				    <input type="radio" name="name-b" id="idbb" value="El producto / mercado inicial ha sido definido " />
				    <input type="radio" name="name-c" id="idcb" value="El producto / sistema a escala piloto ha sido probado en la (s) aplicación (es) deseada (s) "/>
				    <input type="radio" name="name-d" id="iddb" value="La demostración de un prototipo de producto / sistema a escala completa se ha completado en la (s) aplicación (es) deseada (s) " /> 	
				    <input type="radio" name="name-e" id="ideb" value="Se ha comprobado que el producto / sistema real funciona en su forma casi final bajo un conjunto representativo de condiciones y entornos esperados"/>
				    <input type="radio" name="name-f" id="idfb" value="El producto / sistema está en forma final y ha sido operado bajo la gama completa de condiciones y ambientes operativos" />
				</form>
				&nbsp;&nbsp;<font color="red">*</font>Definición/diseño del producto:
				<form id="form-c" name="form-c">
				    <input type="radio" name="name-a" id="idac" value="No se tiene identificado aún." checked="checked" />
				    <input type="radio" name="name-b" id="idbc" value="Se han definido una o más hipótesis iniciales del producto" />
				    <input type="radio" name="name-c" id="idcc" value="La asignación de los atributos del producto / sistema a las necesidades del cliente ha resaltado una propuesta de valor clara"/>
				    <input type="radio" name="name-d" id="iddc" value="El producto / sistema ha sido escalado de laboratorio a escala piloto y los problemas que pueden afectar el logro de una escala completa han sido identificados" /> 	
				    <input type="radio" name="name-e" id="idec" value="Se desarrolló un modelo integral de propuesta de valor para el cliente, que incluye una comprensión detallada del producto / sistema con especificaciones de diseño, certificaciones requeridas y compensaciones."/>
				    <input type="radio" name="name-f" id="idfc" value="La optimización del diseño final del producto / sistema se ha completado, se han obtenido las certificaciones requeridos y el producto / sistema ha incorporado requisitos detallados de los clientes y productos." />
				</form>
				&nbsp;&nbsp;<font color="red">*</font>Panorama competitivo actual / Conocimiento del mercado:
				<form id="form-d" name="form-d">
				    <input type="radio" name="name-a" id="idad" value="No se tiene identificado aún." checked="checked" />
					<input type="radio" name="name-b" id="idbd" value="Se realizó una investigación de mercado secundaria y el conocimiento básico de aplicaciones potenciales y el panorama competitivo ha sido identificado." />
				    <input type="radio" name="name-c" id="idcd" value="Se ha completado la investigación de mercado principal para probar la viabilidad comercial del producto / sistema y la comprensión básica de productos / sistemas competitivos han sido demostrados."/>
				    <input type="radio" name="name-d" id="iddd" value="Se ha completado una exhaustiva investigación de mercado para comprobar la viabilidad comercial del producto / sistema y se ha demostrado una comprensión intermedia de los productos / sistemas de la competencia." /> 	
				    <input type="radio" name="name-e" id="ided" value="Se completó un análisis competitivo para ilustrar las características y ventajas únicas del producto / sistema en comparación con los productos / sistemas de la competencia."/>
				    <input type="radio" name="name-f" id="idfd" value="Se ha logrado una comprensión total y completa del panorama competitivo, la (s) aplicación (es) de destino, los productos / sistemas competitivos y el mercado." />
				</form>
				&nbsp;&nbsp;<font color="red">*</font>Conformación del Equipo:
				<form id="form-e" name="form-e">
				    <input type="radio" name="name-a" id="idae" value="No se tiene identificado aún." checked="checked" />
				    <input type="radio" name="name-b" id="idbe" value="Ningún equipo o compañía en el lugar (persona natural, ninguna entidad legal)" />
				    <input type="radio" name="name-c" id="idce" value="Fundadores únicamente técnicos o no técnicos que dirigen la empresa sin asistencia externa"/>
				    <input type="radio" name="name-d" id="idde" value="Fundadores únicamente técnicos o no técnicos que dirigen la empresa con ayuda de asesores externos / mentores y / o incubadora / aceleradora" /> 	
				    <input type="radio" name="name-e" id="idee" value="Equipo equilibrado con experiencia en desarrollo / comercialización técnica y comercial al cargo de la empresa con la asistencia de asesores externos / mentores"/>
				    <input type="radio" name="name-f" id="idfe" value="Equipo equilibrado con todas las capacidades a bordo (por ejemplo, ventas, marketing, servicio al cliente, operaciones, etc.) dirigiendo la empresa con asistencia de asesores externos / mentores" />
				</form>
				&nbsp;&nbsp;<font color="red">*</font>Estado actual con miras  al mercado:
				<form id="form-f" name="form-f">
				    <input type="radio" name="name-a" id="idaf" value="No se tiene identificado aún." checked="checked" />
				    <input type="radio" name="name-b" id="idbf" value="El modelo de negocio inicial y la propuesta de valor han sido definidos." />
				    <input type="radio" name="name-c" id="idcf" value="Los clientes / socios han sido entrevistados para comprender sus puntos / necesidades de dolor, y el modelo comercial y la propuesta de valor han sido refinados en base a los comentarios de los clientes / socios."/>
				    <input type="radio" name="name-d" id="iddf" value="Se han definido las necesidades del mercado y del cliente / socio y cómo se traducen a los requisitos del producto, y se han desarrollado relaciones iniciales con los principales interesados ​​en toda la cadena de valor." /> 	
				    <input type="radio" name="name-e" id="idef" value="Se han formado asociaciones con partes interesadas clave en toda la cadena de valor (por ejemplo, proveedores, socios, proveedores de servicios y clientes)"/>
				    <input type="radio" name="name-f" id="idff" value="Se han establecido acuerdos de suministro con proveedores y socios y se han recibido las órdenes de compra iniciales de los clientes." />
				</form>
				&nbsp;&nbsp;<font color="red">*</font>Estado actual en la Fabricación / cadena de suministro:
				<form id="form-g" name="form-g">
				    <input type="radio" name="name-a" id="idag" value="No se tiene identificado aún." checked="checked" />
				    <input type="radio" name="name-b" id="idbg" value="Se identificaron y mapearon posibles proveedores, socios y clientes en un análisis inicial de la cadena de valor (adicional otra con valor 0)" />
				    <input type="radio" name="name-c" id="idcg" value="Se establecieron relaciones con posibles proveedores, socios, proveedores de servicios y clientes, y se proporcionaron comentarios sobre los requisitos del producto y la capacidad de fabricación."/>
				    <input type="radio" name="name-d" id="iddg" value="Las calificaciones del proceso de fabricación (por ejemplo, QC / QA) se han definido y están en progreso" /> 	
				    <input type="radio" name="name-e" id="ideg" value="Los productos / sistemas se han fabricado y vendido a clientes iniciales"/>
				    <input type="radio" name="name-f" id="idfg" value="Se ha logrado la fabricación a gran escala y el despliegue generalizado de producto / sistema a clientes y / o usuarios." />
				</form>
			</div>
				
			);
	}
}
export default InformationCurrentState;