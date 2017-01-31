import { handleActions } from 'redux-actions';

const cartReducer = handleActions({
    ADD_TO_CART: (state, { payload }) => ({...state, [payload]: (state[payload] || 0) + 1}),
    REMOVE_FROM_CART: (state, { payload }) => {
        const qty = (state[payload] || 0) - 1;
        const copy = {...state};
        if (qty > 0) copy[payload] = qty;
        else delete copy[payload];
        return copy;
    }
}, {});

export function getCartProducts(state) {
    return Object.keys(state.cartReducer).map(id=>({
        item: state.productReducer.filter(p => p.id ==id)[0],
        quantity: state.cartReducer[id]
    }));
}

export function getTotal(state) {
    return state.productReducer.reduce((price, product) => 
        price += product.price * (state.cartReducer[product.id] || 0)
    , 0);
}

export default cartReducer;