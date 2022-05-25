import React from 'react';
import './styles.scss';
import { Button } from '../../Ui';
export const HeroSection = () => {
  return (
    <section className="container--responsive hero-section">
      <div className="hero-section__bg"></div>
      <div className="hero-section__hero">
        <h1 className="hero__title">
          imagine, crie, implemente e <span className="hero__title--font-style">evolua</span>
        </h1>
        <span className="hero__subtitle">Porque não basta resolver apenas os conflitos do mundo do direito.</span>
        <Button size={'button--size-mini'}>inicie a sua jornada</Button>
      </div>
    </section>
  );
};
