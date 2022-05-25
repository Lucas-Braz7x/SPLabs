import React from 'react';
import { ButtonAccess } from '../Ui';
import * as P from 'prop-types';
import './styles.scss';

export const CardCase = ({ solution }) => {
  return (
    <div className="cards-container__card">
      <span className="cards-container__card__case-title">{solution.title}</span>
      <p className="cards-container__card__description text--color-opacity-black">{solution.description}</p>
      <ButtonAccess />
    </div>
  );
};

CardCase.propTypes = {
  solution: P.object,
};
