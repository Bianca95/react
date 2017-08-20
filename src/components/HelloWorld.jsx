import React from 'react';

var HelloWorld = React.createClass({
	// Set initial state 
	getInitialState: function(){
		return {
			username: 'Bianca'
		}
	},
	// Change state
	handleChange: function(e){
		this.setState({
			username: e.target.value
		});
	},

	render: function(){
    	return (
      	<div>
        	Hello {this.state.username}! <br />
        	Change Name: <input type="text" value={this.state.username} onChange={this.handleChange} />
      	</div>
    	)
  	}
});

export default HelloWorld;