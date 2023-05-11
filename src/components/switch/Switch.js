import React from 'react';
import './Switch.css';

const Switch = ({ id, isOn, handleToggle, onColor }) => {
  return (
    <div className="switch" >
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-${id}`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        className="react-switch-label"
        htmlFor={`react-switch-${id}`}
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
};

export default Switch;