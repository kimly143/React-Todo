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

export default class TodoList extends React.Component {
	render() {
		return (
			<div>
				<h2> Here you go: </h2>
				{this.props.todos.map((todo) => (
					<TodoItem key={todo.id} done={todo.done} onClick={() => this.props.markDone(todo.id)}>
						{todo.text}
					</TodoItem>
				))}
			</div>
		);
	}
}
