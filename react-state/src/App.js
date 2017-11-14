import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			greeting: "Hello Clock",
			curTime: new Date(),
			tasks: [
				{ key: 0, title: "Learn stateful React Components" },
				{ key: 1, title: "Buy the iSchool a Building" }
			],
			newTaskTitle: ""
		};
		this.nextKey = this.state.tasks.length;
	}

	//envoked once render is complete
	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({
				curTime: new Date(),
				greeting: "Hello Clock " + new Date().toLocaleTimeString()
			});
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	handleSubmit(evt) {
		evt.preventDefault();
		let task = {
			title: this.state.newTaskTitle,
			key: this.nextKey++
		};
		this.setState({
			tasks: this.state.tasks.concat(task),
			newTaskTitle: ""
		});
	}

	toggleDone(taskToToggle) {
		let newTasks = this.state.tasks.map(task => {
			if (task === taskToToggle) {
				task.done = !task.done;
			}
			return task;
		});
		this.setState({ tasks: newTasks });
	}

	purgeList() {
		let purgedTask = this.state.tasks.filter(task => !task.done);
		this.setState({ tasks: purgedTask });
	}

	render() {
		let doneTaskStyles = {
			color: "#AAA",
			textDecoration: "line-through"
		}
		return (
			<div className="container">
				<h2>Clock</h2>
				<p>{this.state.greeting}</p>
				<p>{this.state.curTime.toLocaleTimeString()}</p>
				<h2>Tasks</h2>
				<form onSubmit={(evt) => this.handleSubmit(evt)}>
					<input type="text" className="form-control" value={this.state.newTaskTitle} onInput={
						(evt) => this.setState(
							{
								newTaskTitle: evt.target.value
							}
						)
					} />
				</form>
				<ul>
					{this.state.tasks.map(task => <li key={task.key} onClick={
						() => {
							this.toggleDone(task)
						}
					}
						style={task.done ? doneTaskStyles : undefined}
					>{task.title}</li>)}
				</ul>
				<button className="btn btn-primary" onClick={() => this.purgeList()}>
					Purge Completed
				</button>

			</div>
		);
	}
}

export default App;
