import { createElement } from 'react';
import {createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import root from './reducer/reducers';
import { createLogicMiddleware } from "redux-logic";
// const middleware =[thunk];
import rootService from './services/rootService';

const logicMiddleware = createLogicMiddleware(rootService, {});
// Middlewares: applyMiddleware() tells createStore() how to handle middleware
const middleware = applyMiddleware(logicMiddleware);

// Create enhancer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(middleware);


const store = createStore(
    root,enhancer
)

export default store;