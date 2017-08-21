import React from 'react';

var FriendsContainer = React.createClass({
	// Set initial state 
	getInitialState: function(){
		return {
			name: 'Bianca Prodan',
			friends: ['Dante', 'Logan McRae', 'Totoro']
		}
	},

	render: function(){
    	return (
      	<div>
        	<h3> Name: {this.state.name} </h3>
        	<ShowList names={this.state.friends} />
      	</div>
    	)
  	}
});

var ShowList = React.createClass({
	render: function(){
		var listItems = this.props.names.map(function(friend){
			return <li> {friend} </li>;
		});

		return (
			<div>
				<h3> Friends </h3>
				<ul>
					{listItems}
				</ul>
			</div>
		)
	}
});

export default FriendsContainer;