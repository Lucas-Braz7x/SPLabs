import React from 'react';
import { ButtonAccess } from '../Ui';
import * as P from 'prop-types';
import './styles.scss';

export const CardCase = ({ cases }) => {
  return (
    <div className="cards-container__card">
      <span className="cards-container__card__case-title">{cases.title}</span>
      <p className="cards-container__card__description text--color-opacity-black">{cases.description}</p>
      <ButtonAccess />
    </div>
  );
};

CardCase.propTypes = {
  cases: P.object,
};
