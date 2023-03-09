import React from 'react';
import moment from 'moment';

const Transaction = ({ from, to, amount, rate, time }) => {
  let formatedAmount = new Intl.NumberFormat('en-GB').format(amount);
  const date = moment(time).format('DD MMM');
  const formatedTime = moment(time).format('hh:mm');

  return (
    <li className="transaction">
      <span className="transaction__date">{date}</span>
      <span className="transaction__time">{formatedTime}</span>
      <span className="transaction__assets">{`${from} → ${to}`}</span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{formatedAmount}</span>
    </li>
  );
};

export default Transaction;
