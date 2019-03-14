import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import itemsReducer from './reducers/itemsReducer';

const reducers = combineReducers({
    itemsReducer
})
const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));


