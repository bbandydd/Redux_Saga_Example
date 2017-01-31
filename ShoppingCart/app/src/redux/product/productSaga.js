import { take, put, call, fork, select, takeEvery } from 'redux-saga/effects';
import productActions from './productActions';
import { api } from '../../services';

export function* getAllProducts() {
    const products = yield call(api.getProducts);
    yield put(productActions.receiveProducts(products));
}

export default [
    fork(getAllProducts),
]
