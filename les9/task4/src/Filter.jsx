import React from 'react';
import { Component } from 'react';

class Filter extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       value: this.props.filterText,
  //     };

  //     // this.handleChange = this.handleChange.bind(this);
  //     // this.handleSubmit = this.handleSubmit.bind(this);
  //   }

  //   handleChange(event) {
  //     this.setState({ value: event.target.value });
  //   }

  onChange = props => {
    this.handleChange(props);
  };

  render() {
    // console.log(this.props.filterText);
    return (
      <>
        <div className="filter">
          <span className="filter__count">{this.props.count}</span>
          <input
            type="text"
            className="filter__input"
            value={this.props.filterText}
            onChange={this.props.onChange}
          />
        </div>
      </>
    );
  }
}

export default Filter;
