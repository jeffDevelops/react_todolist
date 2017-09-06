import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {
	render() {
		return (
			<header>
				<h1><Link to={'/todos'}>React Todos</Link></h1>
			</header>
		)
	}
}

export default Header;

//The to prop on the Link component (from the 'react-router' library is like href on an a tag)