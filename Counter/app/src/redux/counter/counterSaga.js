import { takeEvery, call, put, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';

function* incrementAsync() {
    yield call(delay, 1000);
    yield put({type: 'INCREMENT'});
    yield call(delay, 1000);
    yield put({type: 'DECREMENT'});
}

export default function* counterSaga() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}