import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statusNav: true,
      text: 'online',
    };
  }

  componentDidMount() {
    window.addEventListener('offline', e => {
      this.setState({
        statusNav: false,
        text: 'offline',
      });
    });
    window.addEventListener('online', e => {
      this.setState({
        statusNav: true,
        text: 'online',
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('offline', e => {
      this.setState({
        statusNav: false,
        text: 'offline',
      });
    });
    window.removeEventListener('online', e => {
      this.setState({
        statusNav: true,
        text: 'online',
      });
    });
  }

  render() {
    return (
      <div className={`status${this.state.statusNav === false ? ' status_offline' : ''}`}>
        {`${this.state.text}`}
      </div>
    );
  }
}

export default ConnectionStatus;
