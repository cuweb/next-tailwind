import { useEffect, useRef } from 'react';
import { Gradient } from './Gradient.js';

const GradientDiv = () => {
  const gradient = new Gradient();
  const ref = useRef();

  useEffect(() => {
    gradient.initGradient('#gradient-canvas');
  }, [ref]);

  return (
    <div ref={ref}>
      <canvas
        className="sm:relative"
        id="gradient-canvas"
        data-transition-in
      ></canvas>
    </div>
  );
};

export default GradientDiv;
