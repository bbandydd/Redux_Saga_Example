import { handleActions } from 'redux-actions';

const initialState = {
    checkoutPending: false,
    error: null
};

const checkoutReducer = handleActions({
    CHECKOUT_REQUEST: (state) => ({
        checkoutPending: true,
        error: null
    }),
    CHECKOUT_SUCCESS: (state) => initialState,
    CHECKOUT_FAILURE: (state, { payload }) => ({
        checkoutPending: false,
        error: payload
    })
}, initialState);

export function getCart(state) {
    return state.cartReducer;
}

export default checkoutReducer;