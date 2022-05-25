import { OPEN_MODAL, CLOSE_MODAL } from './actionTypes';

export const openModal = (response) => {
  return { type: OPEN_MODAL, modalOpen: true, response: response };
};

export const closeModal = () => {
  return { type: CLOSE_MODAL, modalOpen: false, response: '' };
};
