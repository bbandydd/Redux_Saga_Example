import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import cartReducer from '../redux/cart/cartReducer';
import productReducer from '../redux/product/productReducer';
import sagaManager from '../redux/sagaManager';

const Reducers = combineReducers({
    productReducer,
    cartReducer
});

const sagaMiddleware = createSagaMiddleware();

const enhancers = compose(
    applyMiddleware(sagaMiddleware), 
    window.devToolsExtension ? window.devToolsExtension() : undefined
);

const store = createStore(Reducers, enhancers);
sagaManager.startSagas(sagaMiddleware);

export default store;