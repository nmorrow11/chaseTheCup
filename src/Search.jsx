import React from 'react';
import axios from 'axios';

class Search extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			query: '',
			teams: {},
		};
		this.updateQuery = this.updateQuery.bind(this);
		this.submitQuery = this.submitQuery.bind(this);
	}

	componentDidMount() {

		axios.get('https://statsapi.web.nhl.com/api/v1/teams')
				.then(res => {
					const teams = res.data.teams;
					this.setState({ teams })
				})
	}

	updateQuery(value) {

		this.setState({query: value})
	}
	submitQuery(event) {

		if(event.key == "Enter"){
			for(let i = 0; i < 31; i++) {
				if(this.state.teams[i].name.toLowerCase().includes(this.state.query.toLowerCase())){
					console.log(this.state.teams[i])
				}
			}
		} else {
			this.updateQuery(event.target.value)
		}
	}
	render(){
  		return (
  			<div>
    			<p>Search</p>
    			<input type = "text" onKeyUp={this.submitQuery}/>
  			</div>
		);
	}
}
export default Search;