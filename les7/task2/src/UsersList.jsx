import React from 'react';
import { Component } from 'react';
import User from './User';

class UsersList extends Component {
  state = {
    sorting: null,
  };

  toggleSorting = () => {
    const newSorting = this.state.sorting === 'asc' ? 'desc' : 'asc';
    this.setState({
      sorting: newSorting,
    });
  };

  render() {
    let usList;
    if (this.state.sorting) {
      usList = this.props.users
        .slice()
        .sort((a, b) => (this.state.sorting === 'asc' ? a.age - b.age : b.age - a.age));
    } else {
      usList = this.props.users;
    }
    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>
          {this.state.sorting || '-'}
        </button>
        <ul className="users">
          {usList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
