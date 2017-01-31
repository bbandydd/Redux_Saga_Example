import React, { Component } from 'react';
import Product from '../../../components/Product';

export default class CartItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { price, quantity, title, onRemove } = this.props;

        return (
            <div>
                <Product
                    price={price}
                    quantity={quantity}
                    title={title}
                    action={
                    <button onClick={onRemove}>
                        {' X '}
                    </button>
                }/>
            </div>
        )
    }
}