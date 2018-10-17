//purpose of this file is to provide a search bar where user type's input and then we make an API request to youtube and get our data
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = {term: ''}; 
	}


	render(){
		return( 
		<div className="search-bar">
		<input className="search-bar-width" onChange={event => this.onInputChange(event.target.value)} />		
		</div>
		);

	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);

	}


}

export default SearchBar;