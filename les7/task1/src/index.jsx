import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import NumbersList from './NumbersList.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<NumbersList numbers={[11, 33, 44]} />, rootElement);
