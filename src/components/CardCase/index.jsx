import React from 'react';
import { ButtonAccess } from '../Ui';
import * as P from 'prop-types';
import './styles.scss';

export const CardCase = ({ solution }) => {
  return (
    <div className="card">
      <span className="card__case-title">{solution.title}</span>
      <p className="card__case-description text--color-opacity-black">{solution.description}</p>
      <ButtonAccess />
    </div>
  );
};

CardCase.propTypes = {
  solution: P.object,
};
