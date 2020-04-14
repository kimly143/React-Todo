import React from 'react';
import { withStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';

const styles = {
	root: {
		textAlign: 'center',
		marginBottom: '2vh'
	},
	todoText: {
		marginLeft: '2vw',
		width: '20vw',
		padding: '5px'
	}
};

class TodoForm extends React.Component {
	state = {
		text: ''
	};
	constructor() {
		super();
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event) {
		event.preventDefault();
		this.props.addTodo(this.state.text);
		this.setState({
			text: ''
		});
	}
	render() {
		return (
			<div className={this.props.classes.root}>
				<h2>Welcome to KB Todo App!</h2>
				<form onSubmit={this.onSubmit}>
					<TextField
						className={this.props.classes.todoText}
						label="What would you like to add?"
						type="text"
						name="todo"
						value={this.state.text}
						onChange={(event) => {
							this.setState({ text: event.target.value });
						}}
					/>
				</form>
			</div>
		);
	}
}

export default withStyles(styles)(TodoForm);
