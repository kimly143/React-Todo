import React from 'react';
import styled from 'styled-components';

const TodoItem = styled.p`
	${(props) => {
		if (props.done) {
			return 'text-decoration: line-through;';
		}
		return '';
	}};
`;

const Ls = styled.div`text-align: center;`;

export default class TodoList extends React.Component {
	render() {
		return (
			<div>
				<Ls>
					<h3> Your list: </h3>
					{this.props.todos.map((todo) => (
						<TodoItem key={todo.id} done={todo.done} onClick={() => this.props.markDone(todo.id)}>
							{todo.text}
						</TodoItem>
					))}
					<button onClick={this.props.clearDone}> Clear done </button>
				</Ls>
			</div>
		);
	}
}
