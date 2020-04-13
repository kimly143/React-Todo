import React from 'react';
import styled from 'styled-components';

const Td = styled.div`
	text-align: center;
	margin-bottom: 2vh;
`;
const TdForm = styled.input`
	margin-left: 2vw;
	width: 15vw;
	padding: 5px;
`;

export default class TodoForm extends React.Component {
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
			<Td className="todo-form">
				<h2>Welcome to KB Todo App!</h2>
				<form onSubmit={this.onSubmit}>
					<label htmlFor="todo">What would you like to add?</label>
					<TdForm
						type="text"
						name="todo"
						value={this.state.text}
						onChange={(event) => {
							this.setState({ text: event.target.value });
						}}
					/>
				</form>
			</Td>
		);
	}
}
