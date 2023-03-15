import React from 'react';
import { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  state = {
    filter: '',
  };

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  // filteredList = this.props.users.filter(user => {
  //   return user.name.toLowerCase().includes(this.state.filter.toLowerCase());
  // });

  render() {
    const filteredList = this.props.users.filter(user => {
      return user.name.toLowerCase().includes(this.state.filter.toLowerCase());
    });
    return (
      <div>
        <Filter
          count={filteredList.length}
          onChange={this.handleChange}
          filterText={this.state.filter}
        />
        <ul className="users">
          {filteredList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
