import 'core-js';
import 'regenerator-runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import reducers from './reducers';
import Routes from './Routes';
import AxiosInterceptor from './axios-interceptor';


const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(reducers, state, applyMiddleware(thunk));

AxiosInterceptor.setupInterceptors();

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            {renderRoutes(Routes)}
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);