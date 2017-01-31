import React, { Component } from 'react';
import ProductList from './Product/ProductList';
import Cart from './Cart/Cart';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Shopping Cart</h2>
                <hr />
                <ProductList />
                <hr />
                <Cart />
            </div>
        )
    }
}