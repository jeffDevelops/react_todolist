import React, {Component} from 'react';
import TodoModel from '../models/Todo';
import TodoList from '../components/TodoList';
import CreateTodoForm from '../components/CreateTodoForm';
import EditTodoForm from '../components/EditTodoForm';

class TodosContainer extends Component {
	constructor() {
		super();
		this.state = {
			todos: []
		}
	}
	componentDidMount() {
		this.fetchData()
	}

	fetchData() {
		TodoModel.all().then( (response) => {
			this.setState ({
				todos: response.todos
			});
		});
	}

 	createTodo(newBody) { //bound to CreateTodoForm component in the rendered template; it is available to children components via this.props.createTodo(newBody)
 		let newTodo = {
 			body: newBody,
 			completed: false
 		}
 		TodoModel.create(newTodo).then( response => {
 			console.log('created todo', response);
 			let todos = this.state.todos;
 			let newTodos = todos.push(response);
 			this.setState({
 				newTodos
 			});
 		});
	}

	deleteTodo(todo) {
		console.log('deleting Todo', todo);
		TodoModel.delete(todo).then( response => {
			let todos = this.state.todos.filter(function(todo) {
				return todo._id !== response._id;
			});
			this.setState({todos});
		});
	}

	updateTodo(todo, id) {
		console.log('updating ');
		console.log(todo, id);
		TodoModel.update(todo, id).then( response => {
			console.log('We got a response.', response);
			let todos = this.state.todos;
			let newTodos = todos.unshift(response, id);
			this.setState({
				newTodos
			});
		});
	}
 
	render() {
		return (
			<div className='TodosContainer'>
				<h2>TodosContainer</h2>
				<CreateTodoForm
					createTodo={this.createTodo.bind(this)} 
				/>
				<TodoList
					todos={this.state.todos}
					onDeleteTodo={this.deleteTodo.bind(this)}
					onUpdateTodo={this.updateTodo.bind(this)}
				/>
			</div>
		)
	}
}

export default TodosContainer;