import React from 'react'
import Registro from './Registro';
import App from './App';
import logo from './logo-rutan.png';
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
              <li><Link to="/">VENTANILLA UNICA DE PROYECTOS</Link></li>
              <li><Link to="/register">Registro</Link></li>
            </ul> 
          </div>
        </div>
      </nav>
      <Route exact path="/" component={App}/>
      <Route path="/register" component={Registro}/>
    </div>
  </Router>
)
export default RouteExample
