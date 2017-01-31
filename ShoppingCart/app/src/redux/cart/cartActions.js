import { createAction } from 'redux-actions';

const cartActions = {
    addToCart: createAction('ADD_TO_CART'),
    removeFromCart: createAction('REMOVE_FROM_CART')
};

export default cartActions;