import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
	state = {
		todos: [],
		nextId: 1
	};
	constructor() {
    super();
    //bind all functions
		this.addTodo = this.addTodo.bind(this);
		this.markDone = this.markDone.bind(this);
		this.clearDone = this.clearDone.bind(this);
	}

	//when enter, add item to to do list
	addTodo(text) {
		const todo = {
      // id: this.state.nextId,
      id: Date.now(),
			text,
			done: false
		};
		this.setState({ todos: [ ...this.state.todos, todo ], nextId: this.state.nextId + 1 });
	}

	//add a strike through item(s) that click on (done)
	markDone(id) {
		const todos = this.state.todos.map((todo) => ({
			...todo,
			done: todo.id === id ? !todo.done : todo.done //just to flip the value of done (false/true)
		}));
		this.setState({ todos });
	}

	//clear all item(s) marked done
	clearDone() {
		const todos = this.state.todos.filter((todo) => {
			return !todo.done;
		});
		this.setState({ todos });
	}
	render() {
		console.log(this.state.todos);
		return (
			<div>
				<TodoForm addTodo={this.addTodo} />
				<TodoList todos={this.state.todos} markDone={this.markDone} clearDone={this.clearDone}/>
			</div>
		);
	}
}

export default App;
