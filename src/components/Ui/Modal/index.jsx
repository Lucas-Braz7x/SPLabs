import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../store/action/action';

import './styles.scss';
import close from '../../../assets/image/close.svg';

export const Modal = () => {
  const { modalOpen, modalContent } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    const onEsc = (event) => {
      if (event.keyCode === 27) dispatch(closeModal());
    };
    window.addEventListener('keydown', onEsc);

    /* Desmontagem do componente */
    return () => {
      window.removeEventListener('keydown', onEsc);
    };
  });

  if (!modalOpen) return null;

  const onOverlayClick = () => {
    dispatch(closeModal());
  };

  const onDialogClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={'modal-container'} onClick={onOverlayClick}>
      <div className="modal-container__box" onClick={onDialogClick}>
        <div className="modal-container__box__head">
          <img
            onClick={() => dispatch(closeModal())}
            className="modal-container__box__close"
            src={close}
            alt="Fechar modal"
          />
        </div>
        <span className="modal-container__box__content">{modalContent}</span>
      </div>
    </div>
  );
};
