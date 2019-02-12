import { createStore, applyMiddleware, } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const enhancer = composeWithDevTools((applyMiddleware(...middleware)));

export  const store = createStore(reducer, enhancer);

sagaMiddleware.run(rootSaga)
