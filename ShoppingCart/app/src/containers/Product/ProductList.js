import React, { Component } from 'react';
import { connect } from 'react-redux';

import cartActions from '../../redux/cart/cartActions';
import ProductItem from './components/ProductItem';

@connect(
    state => ({
        products: state.productReducer
    }),
    {
        addToCart: cartActions.addToCart
    }
)
export default class productList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { products, addToCart } = this.props;
        return (
            <div>
                ProductList
                {products.map(product =>
                    <ProductItem
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    />
                )}
            </div>
        )
    }
}