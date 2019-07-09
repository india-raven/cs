import React from 'react';

const Button = props => {
  return (
    <div className="knopochka">
      <button className="btn" onClick={() => props.onClick()}>
        USA Climate Info
      </button>
    </div>
  );
};

export default Button;
