import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import reducers from '../reducers/main';

const store = createStore(
    reducers,
    applyMiddleware(createLogger())
);

export default store;