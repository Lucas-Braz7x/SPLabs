import React, { useCallback, useEffect, useState } from 'react';
import { Slogan } from '../../Slogan';
import './styles.scss';
import { api } from '../../../services/api';
import { ButtonAccess } from '../../Ui/ButtonAccess';
import { CardCase } from '../../CardCase';
//import axios from 'axios';

export const Cases = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getApi();
  }, []);
  const getApi = useCallback(() => {
    api.get('/cases').then((response) => setData(response.data.cases));
    console.log(data);
  }, [data]);

  const post = () => {
    api.post('/contact', { name: 'teste' }).then((response) => console.log(response));
  };

  return (
    <section className="container--responsive cases-section">
      <Slogan />
      <div className="cases-section__cards-container .cards-container">
        <div className="cards-container__card">
          <span onClick={getApi} className="cards-container__card__case-title">
            Solução 1
          </span>
          <p onClick={post} className="cards-container__card__description">
            Repita comigo: Não vou esquecer de prestar atenção se está tudo alinhadinho. Não vou esquecer de prestar
            atenção se está tudo alinhado. Não vou esquecer de prestar atenção.
          </p>
          <ButtonAccess />
        </div>
        {data.length > 0 && data.map((cases, indice) => <CardCase key={indice} cases={cases} />)}
      </div>
    </section>
  );
};
