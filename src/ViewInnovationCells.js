import React, { Component } from 'react';
import './App.css';

export default class ViewInnovationCell extends Component {
	render() {
		return (
				<option value={this.props.cells.idC}>{this.props.cells.name}</option>
			);
	}
}