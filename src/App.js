import React, { Component } from 'react';
import logo from './logo-rutan.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>
            VENTANILLA ÚNICA DE PROYECTOS DE CIENCIA Y TECNOLOGÍA
          </h2>
          <img src={logo} alt="logo" height='110px'/>
        </div>
        <p className="App-intro">
          <h2>Realizado por:</h2>
          <h4>Sebastian Londoño Alvarez</h4>
          <h4>Joan Alberto Marin Bustamante</h4>
          <h4>Joan Sebastian Morales</h4>
        </p>
      </div>
    );
  }
}

export default App;

