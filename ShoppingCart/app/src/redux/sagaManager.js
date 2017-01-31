import productSaga from './product/productSaga';
import checkoutSaga from './checkout/checkoutSaga';

function* sagas() {
    yield [
        ...productSaga,
        ...checkoutSaga
    ]
}

const rootSaga = [sagas];

export default {
    startSagas(sagaMiddleware) {
        rootSaga.forEach(saga=>sagaMiddleware.run(saga))
    }
}