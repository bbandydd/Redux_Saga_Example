import { handleActions } from 'redux-actions';
import * as types from '../constants';

const initialState = {
    checkoutPending: false,
    error: null
};

const checkoutReducer = handleActions({
    [types.CHECKOUT_REQUEST]: (state) => ({
        checkoutPending: true,
        error: null
    }),
    [types.CHECKOUT_SUCCESS]: (state) => initialState,
    [types.CHECKOUT_FAILURE]: (state, { payload }) => ({
        checkoutPending: false,
        error: payload
    })
}, initialState);

export function getCart(state) {
    return state.cartReducer;
}

export default checkoutReducer;