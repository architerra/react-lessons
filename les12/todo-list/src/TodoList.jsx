import React, { Component } from 'react';
import TaskList from './TasksList';

class TodoList extends Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <TaskList />
      </>
    );
  }
}

export default TodoList;
