import React, { Component } from 'react';
import './App.css';
import Alert from "./components/Alert";
import Card from "./components/Card";
import Button from "./components/Button";

class App extends Component {
	handelButtonClick(){
		console.log("button added to app was clicked");
	}
	render() {
		let alerts = [
			{
				id: 1,
				message: "Alert One",
				type: "success"
			},
			{
				id: 2,
				message: "Zombies Approaching!",
				type: "danger"
			}
		]
		return (
			<div className="container">
				{alerts.map(a => <Alert message={a.message} type={a.type} key={a.id} />)}

				<Card title="My Card" width={300} imgsrc="pumpkin.jpg" imgalt="pumpkin">
					<p> This is my <strong> Card Text </strong></p>
					<p>This is also another paragraph</p>
					<Alert message="alert in card" />
				</Card>
				<Button caption="click me" onClick={() => this.handelButtonClick()}/>
			</div>
		);
	}
}

export default App;
