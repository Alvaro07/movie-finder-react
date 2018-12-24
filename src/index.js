import React from 'react';
import ReactDOM from 'react-dom';
import { reducer } from './reducer/reducer';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

import App from './components/App/App';
import './index.scss';


/**
 * Initial state
 */

let initialState = {
    dataSearch: null,
    data: null,
    isLoading: false,
    error: null
};

/**
 * Redux store
 */

let store = createStore(reducer, initialState, applyMiddleware(thunk));

/**
 * Render
 */

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));