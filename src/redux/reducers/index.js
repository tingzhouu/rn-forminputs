import { combineReducers } from 'redux';

const initialStateShows = {
  shows: [],
};

const initialStateForm = {
  form: null,
};

const showList = (state = initialStateShows, action) => {
  switch (action.type) {
    case 'ADD_SHOW':
      return {
        ...state,
        shows: [...state.shows, action.payload],
      };
    default:
      return state;
  }
};

const form = (state = initialStateForm, action) => {
  switch (action.type) {
    case 'GET_FORM':
      return {
        ...state,
        form: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  showList,
  form,
});
