import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state

	state = {
		todos: [],
		nextId: 1
	};
	constructor() {
		super();
		this.addTodo = this.addTodo.bind(this);
		this.markDone = this.markDone.bind(this);
	}
	addTodo(text) {
		const todo = {
			id: this.state.nextId,
			text,
			done: false
		};
		this.setState({ todos: [ ...this.state.todos, todo ], nextId: this.state.nextId + 1 });
	}
	markDone(id) {
		const todos = this.state.todos.map((todo) => ({
			...todo,
			done: todo.id === id ? !todo.done : todo.done //just to flip the value of done (false/true)
		}));
		this.setState({ todos });
	}
	render() {
		console.log(this.state.todos);
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<TodoForm addTodo={this.addTodo} />
				<TodoList todos={this.state.todos} markDone={this.markDone}  />
			</div>
		);
	}
}

export default App;
