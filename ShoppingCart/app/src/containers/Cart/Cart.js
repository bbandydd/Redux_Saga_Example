import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCartProducts, getTotal } from '../../redux/cart/cartReducer';
import CartItem from './components/CartItem';
import cartActions from '../../redux/cart/cartActions';

@connect(
    state => ({
        products: getCartProducts(state),
        total: getTotal(state)
    }),
    { removeFromCart: cartActions.removeFromCart }
)
export default class Cart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { products, total, removeFromCart } = this.props;

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
            </div>
        )
    }
}