import React, { Component } from 'react';
import Product from '../../../components/Product';

export default class ProductItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { product, addToCart } = this.props;
        const addToCartAction = (
            <button
                onClick={() => this.props.addToCart(product.id)}
                disabled={product.quantity > 0 ? '' : 'disabled'}>
                {product.quantity > 0 ? 'Add to cart' : 'Sold Out'}
            </button>
        )

        return (
            <div style={{ marginBottom: 20 }}>
                <Product
                    title={product.title}
                    price={product.price}
                    quantity={product.quantity}
                    action={addToCartAction} 
                />
            </div>
        )
    }
}