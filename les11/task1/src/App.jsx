import React, { Component } from 'react';
import Numbers from './Numbers';
import EvenNumbers from './EvenNumbers';
import OddNumbers from './OddNumbers';

class App extends Component {
  state = {
    number: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        number: this.state.number + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="App">
        <Numbers title="All numbers" number={this.state.number} />
        <EvenNumbers title="Even numbers" number={this.state.number} />
        <OddNumbers title="Odd numbers" number={this.state.number} />
      </div>
    );
  }
}

export default App;
