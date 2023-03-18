import React, { Component } from 'react';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      <FontAwesomeIcon icon={faChevronDown} onClick={this.showContent} />
    );
    const up = this.state.isOpen && (
      <FontAwesomeIcon icon={faChevronUp} onClick={this.hideContent} />
    );

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn">
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