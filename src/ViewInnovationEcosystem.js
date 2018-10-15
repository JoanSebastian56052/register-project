import React, { Component } from 'react';
import './App.css';

export default class ViewInnovationEcosystem extends Component {
	render() {
		return (
				<option value={this.props.ecosystem.idE}>{this.props.ecosystem.name}</option>
			);
	}
}