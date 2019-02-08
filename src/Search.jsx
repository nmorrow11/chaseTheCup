import React from 'react';

class Search extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			query: ''
		};
		this.updateQuery = this.updateQuery.bind(this);
		this.submitQuery = this.submitQuery.bind(this);
	}

	updateQuery(event) {
		console.log(event.key)
		this.setState({query: event.target.value})
	}
	submitQuery(event) {

	}
	render(){
  		return (
  			<div>
    			<p>Search</p>
    			<input type = "text" onChange={this.updateQuery}/>
  			</div>
		);
	}
}
export default Search;