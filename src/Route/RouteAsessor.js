import React from 'react';
import Home from '../Home.js'
import FrequentsQuestions from '../FrequentsQuestions.js'
import Projects from '../Projects.js'
import Login from '../Login.js'
import Registro from '../Registro.js'
import logo from '../logo-rutan.png';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
const RouteAsessor = () => (

		<Router>
			<div>
				<header className="header">
					<nav className="header_navigation">
						<div className="header_logo">
							<Link to="/Home"><img src={logo} alt="logo" className="App-logo-header" /></Link> 
						</div>
						<div className="header_navigation_items">
							<ul>
								<li><Link to="/Home">Inicio</Link></li>
							    <li><Link to="/Frequents_Questions">Preguntas Frecuentes</Link></li>
							    <li><Link to="/Register_Project">Registrar Proyecto</Link></li>
							    <li><Link to="/View_Projects">Ver Proyectos</Link></li>
							</ul>
						</div>
						<div className="spacer"/>
						<div className="header_navigation_login">
							<ul>
							  <li>
							    <Link to="/Login"> Mi Sesion</Link>
							  </li>
							</ul>
						</div>
					</nav>
				</header>
				<main style={{marginTop: '50px'}}>
				  <Route exact path="/Home" component={Home}/>
				  <Route path="/Frequents_Questions/" component={FrequentsQuestions}/>
				  <Route path="/Login/" component={Login}/>
				  <Route path="/View_Projects/" component={Projects}/>
				  <Route path="/Register_Project/" component={Registro}/>
				</main>
			</div>
		</Router>

	)
export default RouteAsessor;