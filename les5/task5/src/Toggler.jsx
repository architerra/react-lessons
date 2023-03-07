import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Off',
    };
    this.decrement = this.decrement.bind(this);
  }

  decrement() {
    if (this.state.text === 'Off') {
      this.setState({
        text: 'On',
      });
    } else {
      this.setState({
        text: 'Off',
      });
    }
  }

  render() {
    return (
      <div className="toggler" onClick={this.decrement}>
        {this.state.text}
      </div>
    );
  }
}

export default Toggler;
