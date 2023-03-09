import React from 'react';

const NumbersList = props => {
  const numElems = props.numbers.map(num => <li>{num}</li>);

  return <ul>{numElems}</ul>;
};

export default NumbersList;
