import React from 'react';
import * as P from 'prop-types';
import './styles.scss';

export const AnchorLink = (props) => {
  return (
    <a className={'link ' + props.elementClassName} href={props.to}>
      {props.children}
    </a>
  );
};

AnchorLink.propTypes = {
  children: P.string.isRequired,
  to: P.string,
  elementClassName: P.string,
};
