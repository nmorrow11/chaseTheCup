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

		this.setState({query: event.target.value})
	}
	submitQuery(event) {

		if(event.key == "Enter"){

		} else {
			this.updateQuery(event)
		}
	}
	render(){
  		return (
  			<div>
    			<p>Search</p>
    			<input type = "text" onKeyDown={this.submitQuery}/>
  			</div>
		);
	}
}
export default Search;