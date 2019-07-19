import { createStore } from 'redux';
import Reactotron from '../../../reactotronconfig';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer, Reactotron.createEnhancer());

export default store;
