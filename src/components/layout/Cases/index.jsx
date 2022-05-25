import React from 'react';
import { Slogan } from '../../Slogan';
import './styles.scss';
import { CardCase } from '../../CardCase';
import { useAxios } from '../../../hooks/useAxios';

export const Cases = () => {
  const { data: cases, loading } = useAxios('/cases');

  return (
    <section className="container--responsive cases-section">
      <Slogan />
      {loading && <p>Carregando...</p>}
      <div className="cases-section__cards-container .cards-container">
        {cases?.map((solution, index) => (
          <CardCase key={index} solution={solution} />
        ))}
      </div>
    </section>
  );
};
