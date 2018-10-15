import React, { Component } from 'react';
import './App.css';

export default class ViewInnovationKET extends Component {
	render() {
		return (
				<option value={this.props.ket.idKET}>{this.props.ket.name}</option>
			);
	}
}