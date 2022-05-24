import React from 'react';
import { Button } from '../../Ui';
import './styles.scss';

export const Contact = () => {
  return (
    <section className="container--responsive contact">
      <div className="contact__title">Não fique parado, fale conosco</div>
      <form method="post" action="" className="form">
        <input className="form__input-content" type="text" required placeholder="Seu nome"></input>
        <input className="form__input-content" type="email" required placeholder="Seu e-mail" />
        <select className="form__input-content" name="" id="">
          texte
        </select>
        <textarea
          className="form__input-content form__input-content--height"
          type="text"
          placeholder="Fale um pouco sobre o seu negócio"
          required
        />
        <div className="form__term">
          <input type="checkbox" name="" id="" />
          <p className="form__term__description">
            Declaro que conheço a Política de Privacidade e autorizo a utilização das minhas informações pelo SP Labs
          </p>
        </div>
        <Button>enviar</Button>
      </form>
    </section>
  );
};
