import React, { Component } from 'react';

class EditTodoForm extends Component {
	constructor() {
		super();
		this.state = {
			updatedTodoBody: ''
		}
	}
	onInputChange(event) {
		console.log('changing a todo');
		this.setState({
			updatedTodoBody: event.target.value
		})
	}
	onFormSubmit(event) {
		event.preventDefault();
		console.log('edit todo form submitted');
		//get the value of the form
		let newBody = this.state.updatedTodoBody;
		this.props.onUpdateTodo(newBody, this.props.id);

		//make an AJAX call
		//setState
		this.setState({
			updatedTodoBody: ''
		});
		return newBody;
	}
	render() {
		return (
			<div className="editTodoForm">
				<form onSubmit={ event => this.onFormSubmit(event)}>
					<input
						onChange={ event => this.onInputChange(event) }
						placeholder="Write updated todo here!"
						type="text"
						value={this.state.updatedTodoBody}
					/>
					<button type="submit">Update Todo!</button>
				</form>
			</div>
		)
	}
}

export default EditTodoForm;