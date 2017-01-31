import { createAction } from 'redux-actions';
import * as types from '../constants';

const checkoutActions = {
    checkout: createAction(types.CHECKOUT_REQUEST),
    checkoutSuccess: createAction(types.CHECKOUT_SUCCESS),
    checkoutFailure: createAction(types.CHECKOUT_FAILURE),
};

export default checkoutActions;