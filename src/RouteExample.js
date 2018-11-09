import React from 'react'
import Registro from './Registro';
import App from './App';
import logo from './logo-rutan.png';
import FrequentsQuestions from './FrequentsQuestions.js';
import Login from './Login.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const RouteExample = () => (
  <Router>
    <div>
      <nav className="navbar navbar-inverse"> 
        <div className="container-fluid"> 
          <div className="navbar-header"> 
            <button type="button" className="collapsed navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-9" aria-expanded="false"> 
              <span className="sr-only">Toggle navigation</span> 
              <span className="icon-bar"></span> 
              <span className="icon-bar"></span> 
              <span className="icon-bar"></span> 
            </button> 

            <Link to="/"><img src={logo} alt="logo" className="App-logo-header" /></Link> 
          </div> 
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-9">
            <ul className="nav navbar-nav"> 
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/Register_Project">Registro</Link></li>
              <li><Link to="/Frequents_Questions">Preguntas Frecuentes</Link></li>
              <li className="login">
                  <Link to="/Login">Ingresar</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      <Route exact path="/" component={App}/>
      <Route path="/Register_Project" component={Registro}/>
      <Route path="/Frequents_Questions/" component={FrequentsQuestions}/>
      <Route path="/Login/" component={Login}/>
    </div>
  </Router>
)
export default RouteExample
