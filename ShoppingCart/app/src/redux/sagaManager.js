import productSaga from './product/productSaga';

function* sagas() {
    yield [
        ...productSaga
    ]
}

const rootSaga = [sagas];

export default {
    startSagas(sagaMiddleware) {
        rootSaga.forEach(saga=>sagaMiddleware.run(saga))
    }
}