import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import { getCharacters } from './redux/actions'

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

const store = createStore(reducers, persistedState, applyMiddleware(thunk))

store.dispatch(getCharacters())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));


serviceWorker.unregister();
