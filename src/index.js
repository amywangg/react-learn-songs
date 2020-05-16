import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';


// Redux store houses the reducers which communicates with the provider
// Provider communicates with App.js providing Store data
// PROVIDER - created by react-redux
ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
