import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from '@/redux';

// Create the Redux store with thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
