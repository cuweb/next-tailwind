import { useEffect } from 'react';
import { Gradient } from './Gradient.js';

const GradientDiv = () => {
  const gradient = new Gradient();
  useEffect(() => {
    gradient.initGradient('#gradient-canvas');
  }, []);

  return (
    <canvas
      className="sm:relative"
      id="gradient-canvas"
      data-transition-in
    ></canvas>
  );
};

export default GradientDiv;
