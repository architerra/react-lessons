import React from 'react';

const CartTitle = ({ userName, count }) => {
  return <h1 className="title">{`${userName}, you added ${count} items`}</h1>;
};

export default CartTitle;
