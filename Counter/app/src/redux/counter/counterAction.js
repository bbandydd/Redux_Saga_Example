import { createAction } from 'redux-actions';

const counterAction = {
    increment: createAction('INCREMENT'),
    decrement: createAction('DECREMENT'),
    incrementIfOdd: createAction('INCREMENT_IF_ODD'),
    incrementAsync: createAction('INCREMENT_ASYNC'),
}

export default counterAction;