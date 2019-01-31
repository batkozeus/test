import { createStore, applyMiddleware, } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const middleware = [thunk];

const enhancer = (applyMiddleware(...middleware));

export  const store = createStore(reducer, enhancer);