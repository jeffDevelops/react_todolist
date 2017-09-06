import React from 'react'; //import React
import { Route } from 'react-router'; 
import App from '../App';
import TodosContainer from '../containers/TodosContainer';

export default (
	<Route path='/' component={App}> {/*configure / to the App component*/}
		<Route path='/todos' component={TodosContainer} />
  </Route>
)