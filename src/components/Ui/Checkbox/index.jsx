import React from 'react';
import './styles.scss';

export const Checkbox = () => {
  return (
    <label className="checkbox">
      <input className="checkbox__input" type="checkbox" required />
      <span className="checkbox__checkmark"></span>
    </label>
  );
};
