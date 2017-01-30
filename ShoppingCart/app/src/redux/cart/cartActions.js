import { createAction } from 'redux-actions';

const cartActions = {
    addToCart: createAction('ADD_TO_CART'),
};

export default cartActions;