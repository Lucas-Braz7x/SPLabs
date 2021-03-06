import React from 'react';
import * as P from 'prop-types';
import './styles.scss';

export const Button = (props) => {
  return (
    <button type={props.type} className={'button button--bg-color ' + props.size}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: P.string,
  size: P.string,
  type: P.string,
};
