import { handleActions } from 'redux-actions';

const productReducer = handleActions({
    RECEIVE_PRODUCTS: (state, { payload }) => [...state, ...payload]
}, []);

export function getProducts(state) {
    return state.productReducer.map(product => ({
        ...product,
        quantity: product.inventory - (state.cartReducer[product.id] || 0)
    }))
}

export default productReducer;