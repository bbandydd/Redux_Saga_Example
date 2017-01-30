import { createAction } from 'redux-actions';

const productActions = {
    receiveProducts: createAction('RECEIVE_PRODUCTS'),
};

export default productActions;