import { combineReducers } from 'redux';

const initialStateShows = {
  shows: [],
};

const initialStateForm = {
  isGettingForm: false,
  form: null,
  getFormError: null,
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
    case 'IS_GETTING_FORM':
      return {
        ...state,
        isGettingForm: true,
        
      }
    case 'GET_FORM_SUCCESS':
      return {
        ...state,
        form: action.payload,
        isGettingForm: false
      };
    case 'GET_FORM_ERROR':
      return {
        ...state,
        getFormError: action.payload,
        isGettingForm: false
      };
    
    default:
      return state;
  }
};

export default combineReducers({
  showList,
  form,
});
