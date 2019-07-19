import { ADD_SHOW } from '../constants/action-types';

export const addShow = show => {
  return {
    type: ADD_SHOW,
    payload: show,
  };
};
