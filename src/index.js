import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RouteExample from './RouteExample'
import Registro from './Registro'

const app = document.getElementById('root');
//ReactDOM.render(<Paciente />, app);
//ReactDOM.render(<Doctor informacion ={ListaDoctores}/>, app);
//ReactDOM.render(<Agenda />, document.getElementById('calen'));
//ReactDOM.render(<HorarioDoctores informacion ={ListaDoctores}/>, app);
ReactDOM.render(<RouteExample/>, app);