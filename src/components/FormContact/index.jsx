import React from 'react';
import { submitForm } from '../../services/api';
import { Button, Checkbox, Select } from '../Ui';
import './styles.scss';

export const FormContact = () => {
  const options = ['Tecnológico', 'Administrativo', 'Comercial'];
  const handleSubmit = (event) => {
    event.preventDefault();

    const message = {
      name: event.target.elements[0].value,
      email: event.target.elements[1].value,
      select: event.target.elements[2].value,
      description: event.target.elements[3].value,
      checkbox: event.target.elements[4].checked,
    };

    console.log(message);
    if (message.checkbox && message.select.length > 0) {
      submitForm(message.name);
    }
  };

  return (
    <form method="post" action="" onSubmit={(e) => handleSubmit(e)} className="form">
      <input className="form__input-content" type="text" required placeholder="Seu nome"></input>
      <input className="form__input-content" type="email" required placeholder="Seu e-mail" />
      <Select classElement="form__input-content" optionsSelect={options} />
      <textarea
        className="form__input-content form__input-content--height"
        type="text"
        placeholder="Fale um pouco sobre o seu negócio"
        required
      />
      <div className="form__term">
        <Checkbox />
        <p className="form__term__description">
          Declaro que conheço a Política de Privacidade e autorizo a utilização das minhas informações pelo SP Labs
        </p>
      </div>
      <Button type="submit">enviar</Button>
    </form>
  );
};
