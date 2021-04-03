import React from 'react';
import ReactDOM from 'react-dom';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import fruitsReducer from './store/reducers/fruits';
import vegetablesReducer from './store/reducers/vegetables';
import ordersReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    fruitsReducer: fruitsReducer,
    vegetablesReducer: vegetablesReducer,
    ordersReducer: ordersReducer,
    auth: authReducer
});



const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);


ReactDOM.render( app, document.getElementById('root'));
