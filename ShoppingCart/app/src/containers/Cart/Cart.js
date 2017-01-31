import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCartProducts, getTotal } from '../../redux/cart/cartReducer';
import CartItem from './components/CartItem';
import cartActions from '../../redux/cart/cartActions';
import checkoutActions from '../../redux/checkout/checkoutActions';

@connect(
    state => ({
        products: getCartProducts(state),
        total: getTotal(state),
        checkoutPending: state.checkoutReducer.checkoutPending,
        error: state.checkoutReducer.error
    }),
    { removeFromCart: cartActions.removeFromCart, checkout: checkoutActions.checkout }
)
export default class Cart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { products, total, error, checkoutPending, removeFromCart, checkout } = this.props;

        return (
            <div>
                <h3>Your Cart</h3>
                <p>Total: &#36;{total}</p>
                <div>
                    {!products.length 
                        ? <em>Please add some products to cart.</em>
                        : products.map(product => 
                            <CartItem
                                title={product.item.title}
                                price={product.item.price}
                                quantity={product.quantity}
                                key={product.item.id}
                                onRemove={() => removeFromCart(product.item.id)}
                            />
                    )}
                </div>
                <button 
                    onClick={() => checkout()}
                    disabled={!checkoutPending ? '' : 'disabled' }
                >
                    Checkout
                </button>
                <div style={{color: 'red'}}>{error}</div>
            </div>
        )
    }
}