import React, { Component } from 'react';

class Task extends Component {
  render() {
    var style = {
      width: 200,
      display: 'inline-block'
    };
    return (
      <div style={style}>
        <p> Goal: {this.props.task.goal}</p>
        <p> Action: {this.props.task.action} </p>
        <p> Time: {this.props.task.time}</p>
        <p> Description: {this.props.task.description} </p>
      </div>
    );
  }
}

export default Task;
