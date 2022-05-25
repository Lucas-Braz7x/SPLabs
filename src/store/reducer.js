import { OPEN_MODAL, CLOSE_MODAL } from './action/actionTypes';
const INITIAL_STATE = {
  modalOpen: false,
  modalContent: 'inicio',
};

export const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { modalOpen: true, modalContent: action.response };
    case CLOSE_MODAL:
      return { ...state, modalOpen: false };
    default:
      return state;
  }
};
