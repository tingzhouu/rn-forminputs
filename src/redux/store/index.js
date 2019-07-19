import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import Reactotron from '../../../reactotronconfig';
import rootReducer from '../reducers/index';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    Reactotron.createEnhancer(),
  )
);

export default store;
