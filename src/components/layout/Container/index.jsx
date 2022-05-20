import React from 'react';
import './styles.scss';
import * as P from 'prop-types';

export const Container = (props) => {
  return <div className="container">{props.children}</div>;
};

Container.propTypes = {
  children: P.element.isRequired,
};
