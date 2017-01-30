import { handleActions } from 'redux-actions';

const productReducer = handleActions({
    RECEIVE_PRODUCTS: (state, { payload }) => [...state, ...payload]
}, []);

export default productReducer;