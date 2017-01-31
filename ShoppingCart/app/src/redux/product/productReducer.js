import { handleActions } from 'redux-actions';
import * as types from '../constants';

const productReducer = handleActions({
    [types.RECEIVE_PRODUCTS]: (state, { payload }) => [...state, ...payload]
}, []);

export function getProducts(state) {
    return state.productReducer.map(product => ({
        ...product,
        quantity: product.inventory - (state.cartReducer[product.id] || 0)
    }))
}

export default productReducer;