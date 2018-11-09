import React, { Component } from 'react';
import './App.css';
import coming_soon from './coming_soon.png'
class FrequentsQuestions extends Component {
	render() {
		return(
			<div className = "coming_soon">
				<img src={coming_soon} alt="logo" height='500px' width='1200px'/>
			</div>
			);
	}
}

export default FrequentsQuestions;