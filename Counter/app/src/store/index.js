import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import counterReducer from '../redux/counter/counterReducer';
import counterSaga from '../redux/counter/counterSaga';

const Reducers = combineReducers({
    counterReducer
});

const sagaMiddleware = createSagaMiddleware();

const enhancers = compose(
    applyMiddleware(sagaMiddleware), 
    window.devToolsExtension ? window.devToolsExtension() : undefined
);

const store = createStore(Reducers, enhancers);
sagaMiddleware.run(counterSaga);

export default store;