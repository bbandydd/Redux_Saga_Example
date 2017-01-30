import React, { Component } from 'react';

export default class ProductItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { product, addToCart } = this.props;
        const { id, title, price, quantity, inventory} = product;

        return (
            <div style={{ marginBottom: 20 }}>
                {title} - &#36;{price} {quantity ? `x ${quantity}` : null}
                {' '}
                <button
                    onClick={() => addToCart(id)}
                    disabled={inventory > 0 ? '' : 'disabled'}>
                    {inventory > 0 ? 'Add to cart' : 'Sold Out'}
                </button>
            </div>
        )
    }
}