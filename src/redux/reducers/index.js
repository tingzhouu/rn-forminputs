import { combineReducers } from 'redux';

const initialState = {
  shows: [],
};

const showList = (state = initialState, action) => {
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

export default combineReducers({
  showList
});
