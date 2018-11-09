import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouteExample from './RouteExample'

const app = document.getElementById('root');
//ReactDOM.render(<Paciente />, app);
//ReactDOM.render(<Doctor informacion ={ListaDoctores}/>, app);
//ReactDOM.render(<Agenda />, document.getElementById('calen'));
//ReactDOM.render(<HorarioDoctores informacion ={ListaDoctores}/>, app);
ReactDOM.render(<RouteExample/>, app);