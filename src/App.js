import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import SearchForm from './components/SearchForm';

class App extends React.Component {
	state = {
		todos: [],
		query: ''
	};
	constructor() {
		super();
		//bind all functions
		this.addTodo = this.addTodo.bind(this);
		this.markDone = this.markDone.bind(this);
		this.clearDone = this.clearDone.bind(this);
		this.updateQuery = this.updateQuery.bind(this);
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

	//search todo list
	updateQuery(query) {
		this.setState({ query });
	}

	getVisibleTodos() {
		const queryRX = new RegExp(this.state.query, 'i');
		return this.state.todos.filter((todo) => {
			if (this.state.query === '') return true;
			return queryRX.test(todo.text);
		});
	}

	render() {
		//console.log(this.state.todos);
		const todos = this.getVisibleTodos();
		return (
			<div>
				<TodoForm addTodo={this.addTodo} />
				<SearchForm query={this.state.query} updateQuery={this.updateQuery} />
				{/* <TodoList todos={this.state.todos} markDone={this.markDone} clearDone={this.clearDone} /> */}
				<TodoList todos={todos} markDone={this.markDone} clearDone={this.clearDone} />
			</div>
		);
	}
}

export default App;
