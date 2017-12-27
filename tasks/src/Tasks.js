import React, { Component } from 'react';
import Task from './task.js';

class Tasks extends Component {
  render() {
    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    var formattedDate = `${month + 1}-${date}-${year}`;
    var data;
    if (this.props.tasks.length > 0) {
      data = this.props.tasks
        .filter(function(task) {
          return formattedDate === task.date;
        })
        .map(function(task) {
          return <Task key={task.id} task={task} />;
        });
    }

    return (
      <div>
        <h3> TODO </h3>
        {data}
      </div>
    );
  }
}

export default Tasks;
