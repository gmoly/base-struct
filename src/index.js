import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import BaseStructService from './services/base-struct-service';
import { BaseStructServiceProvider } from './components/base-struct-context';

import store from './store';

const baseStructService = new BaseStructService();

ReactDom.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BaseStructServiceProvider value={baseStructService}>
        <Router>
          <App />
        </Router>
      </BaseStructServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
