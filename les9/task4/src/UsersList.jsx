import React from 'react';
import { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  state = {
    filter: '',
  };

  filtredList = this.props.users.filter(user => {
    return user.name.toLowerCase().includes(this.state.filter.toLowerCase());
  });

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    return (
      <div>
        <Filter
          count={this.filtredList.length}
          onChange={this.handleChange}
          filterText={this.state.filter}
        />
        <ul className="users">
          {this.filtredList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
