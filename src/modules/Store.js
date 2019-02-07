import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import reducer from './Reducer';

const configureStore = (initialState) => {
    const store = createStore(reducer, initialState, applyMiddleware(logger));
    return store;
};

export default configureStore;