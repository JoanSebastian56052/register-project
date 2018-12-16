import React from 'react'
import Home from '../Home';
import logo from '../logo-rutan.png';
import FrequentsQuestions from '../FrequentsQuestions.js';
import Login from '../Login.js';
import Registro from '../Registro.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const RouteUnlogin = () => (
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
            </ul>
          </div>
          <div className="spacer"/>
           <div className="header_navigation_login">
            <ul>
              <li>
                <Link to="/Login">Sesion</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main style={{marginTop: '50px'}}>
          <Route exact path="/" component={Home}/>
          <Route path="/Frequents_Questions/" component={FrequentsQuestions}/>
          <Route path="/Login/" component={Login}/>
      </main>
    </div>
  </Router>
)
export default RouteUnlogin;