import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from 'redux-logger';
import itemsReducer from './reducers/itemsReducer';
import thunk from "redux-thunk";


const reducers = combineReducers({
    itemsReducer
})
const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));


