import React, { Component } from 'react';

class Expand extends Component {
  state = {
    isOpen: false,
  };

  hideContent = () => {
    this.setState({
      isOpen: false,
    });
  };

  showContent = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.state.isOpen ? this.hideContent : this.showContent}>
            {this.state.isOpen 
            ? <i className="fas fa-chevron-up"  /> 
            : <i className="fas fa-chevron-down" />}
          </button>
        </div>
        {this.state.isOpen && <div className="expand__content">{this.props.children}</div>}
      </div>
    );
  }
}

export default Expand;
