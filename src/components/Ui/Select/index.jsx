import React from 'react';
import * as P from 'prop-types';
import './styles.scss';

export const Select = (props) => {
  return (
    <select className={props.classElement + ' select'} name="segmento" id="segmento" required>
      <option value="" disabled selected hidden>
        Seu segmento
      </option>
      {props.optionsSelect.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  classElement: P.string,
  optionsSelect: P.array,
};
