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
      </div>
    );
  }
}

export default App;

