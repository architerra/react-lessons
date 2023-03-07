import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  setText(color) {
    this.setState({
      text: color,
    });
  }

  render() {
    return (
      <div>
        <div class="picker__title">{this.state.text}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.setText('Coral')}
            onMouseLeave={() => this.setText('')}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.setText('Aqua')}
            onMouseLeave={() => this.setText('')}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.setText('Bisque')}
            onMouseLeave={() => this.setText('')}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
