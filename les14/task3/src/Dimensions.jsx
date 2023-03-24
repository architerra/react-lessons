import React, { useState, useEffect } from 'react';

const Dimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimensions({
      width: innerWidth,
      height: innerHeight,
    });
    const onResize = e => {
      const { innerWidth, innerHeight } = e.target;

      setDimensions({
        width: innerWidth,
        height: innerHeight,
      });
      document.title = `${innerWidth} x ${innerHeight}`;
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  // componentDidMount() {
  //   window.addEventListener('resize', this.onResize);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.onResize);
  // }

  const { width, height } = dimensions;
  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};

export default Dimensions;
