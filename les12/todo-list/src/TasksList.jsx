import React, { Component } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';

class TaskList extends Component {
  state = {
    tasks: [
      { text: 'Buy', done: true, id: 1 },
      { text: 'Visit', done: false, id: 2 },
    ],
  };

  onCreate = text => {
    const { tasks } = this.state;
    const newTask = {
      text,
      done: false,
      id: Math.random(),
    };

    const updateTasks = tasks.concat(newTask);
    this.setState({ tasks: updateTasks });
  };

  handleTaskStatus = id => {
    const updatedTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    this.setState({ tasks: updatedTasks });
  };

  handleTaskDelete = id => {
    const updatedTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: updatedTasks });
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);

    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={this.handleTaskStatus}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </main>
    );
  }
}

export default TaskList;
