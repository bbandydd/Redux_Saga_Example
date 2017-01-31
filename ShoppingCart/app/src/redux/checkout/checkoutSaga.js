import { delay } from 'redux-saga';
import { take, put, call, fork, select, takeEvery } from 'redux-saga/effects';
import checkoutActions from './checkoutActions';
import { getCart } from './checkoutReducer';
import { api } from '../../services';

export function* checkout() {
    try{
        const cart = yield select(getCart);
        yield call(api.buyProducts, cart);
        yield put(checkoutActions.checkoutSuccess(cart))
    } catch(err) {
        yield put(checkoutActions.checkoutFailure(err));
    }
}

export function* watchGetProducts() {
    while(true) {
        yield take('CHECKOUT_REQUEST');
        yield call(checkout);
    }
}

export default [
    fork(watchGetProducts),
]