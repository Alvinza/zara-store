import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import { useReducer } from './useReducer';
import rootReducer from '../reducers';

export default combineReducers ({
    cart: rootReducer,
    user: useReducer,
});