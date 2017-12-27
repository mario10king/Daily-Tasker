import React, { Component } from 'react';
import './App.css';
import TaskAdder from './TaskAdder.js';
import Tasks from './Tasks.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      goal: '',
      action: '',
      date: '',
      time: '',
      tag: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTasks = this.handleTasks.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.handleTasks();
  }
  handleChange(event) {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value
    });
  }
  handleSubmit(event) {
    var data = {
      goal: this.state.goal,
      action: this.state.action,
      date: this.state.date,
      time: this.state.time,
      tag: this.state.tag,
      description: this.state.description
    };
    fetch('/users', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => console.log(res));

    this.setState({
      goal: '',
      action: '',
      date: '',
      time: '',
      tag: '',
      description: ''
    });

    event.preventDefault();
    this.handleTasks();
  }
  handleTasks() {
    fetch('/users')
      .then(res => res.json())
      .then(res => this.setState({ tasks: res }));
  }
  render() {
    return (
      <div className="App">
        <TaskAdder
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          task={this.state}
        />
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
