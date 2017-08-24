import React from 'react';

var FriendsContainer = React.createClass({
	// Set initial state 
	getInitialState: function(){
		return {
			name: 'Bianca Prodan',
			friends: ['Dante', 'Logan McRae', 'Totoro']
		}
	},
	
	addFriend: function(friend){
		this.setState({
			friends: this.state.friends.concat([friend])
		});
	},

	render: function(){
    	return (
      	<div>
        	<h3> Name: {this.state.name} </h3>
        	<AddFriend addNew={this.addFriend} />
        	<ShowList names={this.state.friends} />
      	</div>
    	)
  	}
});

var AddFriend = React.createClass({
	getInitialState: function(){
		return {
			newFriend: ''
		}
	},
	//Use propTypes to require the presence of the addFriend prop to be passed
	propTypes: {
		addNew: React.PropTypes.func.isRequired
	},

	updateNewFriend: function(e){
		this.setState({
			newFriend: e.target.value
		});
	},

	handleAddNew: function(){
		this.props.addNew(this.state.newFriend);
		this.setState({
			newFriend: ''
		});
	}, 

	render: function(){
		return (
			<div>
				<input class="field" type="text" value={this.state.newFriend} onChange={this.updateNewFriend} />
				<button onClick={this.handleAddNew}>Add New Friend</button>
			</div>
		)
	}
})

var ShowList = React.createClass({
	getDefaultProps: function(){
		return {
			names: []
		}
	},

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