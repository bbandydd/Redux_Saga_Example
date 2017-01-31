import { createAction } from 'redux-actions';

const checkoutActions = {
    checkout: createAction('CHECKOUT_REQUEST'),
    checkoutSuccess: createAction('CHECKOUT_SUCCESS'),
    checkoutFailure: createAction('CHECKOUT_FAILURE'),
};

export default checkoutActions;