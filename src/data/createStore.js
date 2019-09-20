import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';
import { has, set } from 'object-path';
import createReducer from './createReducer';
import sagas from './rootSaga';

let store;

export default () => {
    const reducer = createReducer();

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const middleware = [];

    const sagaMiddleware = createSagaMiddleware();
    middleware.push(sagaMiddleware);
    middleware.push(thunkMiddleware);

    store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));

    sagaMiddleware.run(sagas);

    return store;
};
