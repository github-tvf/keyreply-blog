import React from 'react';

const Spinner = ({ align = 'center', theme = 'dark' }) => {
  return (
    <div className={`spinner text-${align} spinner-${theme}`}>
      <div className="loadingio-spinner-spin-e8oyp2k9pg4">
        <div className="ldio-w7vp5azzy7">
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
