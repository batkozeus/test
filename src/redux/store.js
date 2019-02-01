import { createStore, applyMiddleware, } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import reducer from './reducer';

const middleware = [thunk];

const enhancer = composeWithDevTools((applyMiddleware(...middleware)));

export  const store = createStore(reducer, enhancer);