import React from 'react';
import * as P from 'prop-types';
import './styles.scss';
export const Logo = (props) => {
  return <span className={'sp-labs ' + props.classElement}>SP labs_</span>;
};

Logo.propTypes = {
  classElement: P.string,
};
