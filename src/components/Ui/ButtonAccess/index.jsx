import React from 'react';
import './styles.scss';
import arrowImg from '../../../assets/image/arrow-right.svg';

export const ButtonAccess = () => {
  return (
    <button className="button-access">
      <span className="button-access__text">Acesse</span>
      <img className="button-access__arrow-image" src={arrowImg} alt="Arrow right" />
    </button>
  );
};
