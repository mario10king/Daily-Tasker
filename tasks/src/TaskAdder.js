import React, { Component } from 'react';

class TaskAdder extends Component {
  render() {
    var style = {
      width: 100
    };
    return (
      <div className="addtask" style={style}>
        <h3> Add Task </h3>
        <form onSubmit={this.props.handleSubmit}>
          <label>
            Goal:
            <input
              type="text"
              name="goal"
              value={this.props.task.goal}
              onChange={this.props.handleChange}
            />
          </label>
          <label>
            Action:
            <input
              type="text"
              name="action"
              value={this.props.task.action}
              onChange={this.props.handleChange}
            />
          </label>
          <label>
            Date:
            <input
              type="text"
              name="date"
              value={this.props.task.date}
              onChange={this.props.handleChange}
            />
          </label>
          <label>
            Time:
            <input
              type="text"
              name="time"
              value={this.props.task.time}
              onChange={this.props.handleChange}
            />
          </label>
          <label>
            Tag:
            <input
              type="text"
              name="tag"
              value={this.props.task.tag}
              onChange={this.props.handleChange}
            />
          </label>
          <label>
            Description:
            <textarea
              type="text"
              name="description"
              value={this.props.task.description}
              onChange={this.props.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default TaskAdder;
