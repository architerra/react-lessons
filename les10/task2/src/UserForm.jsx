import React, { Component } from 'react';

class UserForm extends Component {
  handleChange = event => {
    this.props.handleChange(event);
  };

  render() {
    return (
      <form className="user-form">
        <input
          type="text"
          name="firstName"
          className="user-form__input"
          value={this.props.userData.firstName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="lastName"
          className="user-form__input"
          value={this.props.userData.lastName}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default UserForm;
