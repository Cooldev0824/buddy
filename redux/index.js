import { combineReducers } from 'redux';
import messageReducer from './reducers/messageReducer'

const rootReducer = combineReducers({
    message: messageReducer,
});

export default rootReducer;

//