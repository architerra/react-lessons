import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

// class Status extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOnline: false,
//     };
//   }
const Status = ({ isOnline }) => {
  return <div className="status">{isOnline ? <Online /> : <Offline />}</div>;
};

export default Status;
