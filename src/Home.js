import React, {Component} from 'react';
import './App.css';
import coming_soon from './coming_soon.png'
class Home extends Component {
	render() {
		return( 
				<img src={coming_soon} alt="logo" height='500px' width='1200px'/>
			);
	}
}

export default Home;