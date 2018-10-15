import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './component/search_bar.js';
const API_KEY = 'AIzaSyDDbEamzm-I0k4jpjUqbre2XJQ5IwAdIvs';
 
//Create some component and produce some html throught it
const App = () => {
	return (
		<div>
		<SearchBar/>
		</div>

		);
}

//take the component generated html and put it in the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));