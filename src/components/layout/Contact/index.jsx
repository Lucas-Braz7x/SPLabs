import React from 'react';
import { FormContact } from '../../FormContact';
import './styles.scss';

export const Contact = () => {
  return (
    <section className="container--responsive contact">
      <div className="contact__title">Não fique parado, fale conosco</div>
      <FormContact />
    </section>
  );
};
