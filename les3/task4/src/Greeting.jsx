import React from 'react';
import './index.scss';

const Greeting = props => {
  let d1 = new Date(props.birthDate);
  let d2 = new Date();
  d1 = d1.toISOString().split('T')[0].replaceAll('-', '');
  d2 = d2.toISOString().split('T')[0].replaceAll('-', '');
  const val = Math.trunc((d2 - d1) / 10000);

  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I am ${val} years old`}
    </div>
  );
};

export default Greeting;
