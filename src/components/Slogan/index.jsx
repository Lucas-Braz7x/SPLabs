import React from 'react';
import './styles.scss';

export const Slogan = () => {
  return (
    <>
      <div className="slogan">
        <h2 className="slogan__title">
          <span className="slogan__title--display-block">problemas complexos. </span>
          Soluções <span className="slogan__title--text-style">complexas</span>
          <span className="slogan__title--text-italic"> criativas_</span>
        </h2>
      </div>
      <div className="slogan__sub-title">
        <h3 className="slogan__sub-title__text-content text--color-opacity-black">
          confira nossos cases de sucesso que vão além do mundo juridico.
        </h3>
      </div>
    </>
  );
};
