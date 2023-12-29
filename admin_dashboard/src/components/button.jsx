/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

const button = ({ bgColor, color, size, text, borderRadius }) => (
  <button
    type="button"
    style={{ backgroundColor: bgColor, color, borderRadius }}
    className={`text- ${size} p-3 hover:drop-shadow-xl`}
  >
    {text}
  </button>
);

export default button;
