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
    const content = this.state.isOpen && (
      <div className="expand__content">{this.props.children}</div>
    );
    const down = !this.state.isOpen && (
      <i className="fas fa-chevron-down" onClick={this.showContent}></i>
    );
    const up = this.state.isOpen && (
      <i className="fas fa-chevron-up" onClick={this.hideContent}></i>
    );

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn">
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
              integrity="sha256-+N4/V/SbAFiW1MPBCXnfnP9QSN3+Keu+NlB+0ev/YKQ="
              crossorigin="anonymous"
            />
            {down}
            {up}
          </button>
        </div>
        {content}
      </div>
    );
  }
}

export default Expand;
