import { handleActions } from 'redux-actions';

const cartReducer = handleActions({
    ADD_TO_CART: (state, { payload }) => {debugger;return state}
}, []);

export default cartReducer;