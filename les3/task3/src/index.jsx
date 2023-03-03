import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Comment from './Comment';

const rootElement = document.querySelector('#root');

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars.githubusercontent.com/u/9919?v=4',
};

ReactDOM.render(<Comment user={userInfo} text="Good job!" date={new Date()} />, rootElement);
