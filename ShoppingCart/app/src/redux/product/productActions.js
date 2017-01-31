import { createAction } from 'redux-actions';
import * as types from '../constants';

const productActions = {
    receiveProducts: createAction(types.RECEIVE_PRODUCTS),
};

export default productActions;