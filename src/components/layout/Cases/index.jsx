import React, { useEffect } from 'react';
import { Slogan } from '../../Slogan';
import './styles.scss';
import { api } from '../../../services/api';
import { ButtonAccess } from '../../Ui/ButtonAccess';
//import axios from 'axios';

export const Cases = () => {
  useEffect(() => {
    api.get('/cases').then((response) => console.log(response));
  }, []);

  return (
    <section className="container--responsive cases-section">
      <Slogan />

      <div className="cases-section__cards-container .cards-container">
        <div className="cards-container__card">
          <span className="cards-container__card__case-title">Solução 1</span>
          <p className="cards-container__card__description">
            Repita comigo: Não vou esquecer de prestar atenção se está tudo alinhadinho. Não vou esquecer de prestar
            atenção se está tudo alinhado. Não vou esquecer de prestar atenção.
          </p>
          <ButtonAccess />
        </div>
      </div>
    </section>
  );
};
