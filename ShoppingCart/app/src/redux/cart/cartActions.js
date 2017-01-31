import { createAction } from 'redux-actions';
import * as types from '../constants';

const cartActions = {
    addToCart: createAction(types.ADD_TO_CART),
    removeFromCart: createAction(types.REMOVE_FROM_CART),
};

export default cartActions;