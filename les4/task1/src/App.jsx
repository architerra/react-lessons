import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <>
      <Counter start={0} interval={1000} />
      <Counter start={100} interval={500} />
      <Counter start={-200} interval={1500} />
    </>
  );
};

export default App;
