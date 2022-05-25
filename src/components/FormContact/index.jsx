import React from 'react';
import { useDispatch } from 'react-redux';

import { api } from '../../services/api';
import { openModal } from '../../store/action/action';
import { Button, Checkbox, Select } from '../Ui';

import './styles.scss';

export const FormContact = () => {
  const dispatch = useDispatch();

  const options = ['Tecnológico', 'Administrativo', 'Comercial'];

  const submitForm = (name) => {
    api
      .post('/contact', {
        name: name,
      })
      .then((response) => dispatch(openModal(response.data)))
      .catch((err) => console.log(err));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const message = {
      name: event.target.elements[0].value,
      email: event.target.elements[1].value,
      select: event.target.elements[2].value,
      description: event.target.elements[3].value,
      checkbox: event.target.elements[4].checked,
    };

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
        <p></p>
      </div>
      <Button type="submit">enviar</Button>
    </form>
  );
};
