import React from 'react';
import ReactDOM from 'react-dom';
import { reducer } from './reducer/reducer';
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from './components/App/App';
import './index.scss';


/**
 * Initial state
 */

let initialState = {};

/**
 * Redux store
 */

let store = createStore(reducer, initialState);

/**
 * Render
 */

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));