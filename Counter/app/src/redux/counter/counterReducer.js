import { handleActions } from 'redux-actions';

const counterReducer = handleActions({
    INCREMENT: (state) => state + 1,
    DECREMENT: (state) => state - 1,
    INCREMENT_IF_ODD: (state) => state % 2 !== 0 ? state + 1 : state,
}, 0);

export default counterReducer;