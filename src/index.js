import React from 'react';
import ReactDOM from 'react-dom';
import { reducer } from './reducer/reducer';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';
import './index.scss';


/**
 * Initial state
 */

let initialState = {
    totalResults: null,
    dataSearch: null,
    pageSearch: 1,
    data: null,
    isLoading: false,
    error: null,
    typeSearch: "movie"
};

/**
 * Redux Devtools
 */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

/**
 * Redux store
 */

let store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));


/**
 * Render
 */

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));