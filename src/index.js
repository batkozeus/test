import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './pages/App';
import  {store} from './redux/store';

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);