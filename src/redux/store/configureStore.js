import { createStore, combineReducers } from 'redux';
import darkModeReducer from '../reducers/darkModeReducer';

const rootReducer = combineReducers({
  isDarkMode: darkModeReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;