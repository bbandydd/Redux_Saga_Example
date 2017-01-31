import _products from './products';

const TIMEOUT = 1000;
const MAX_CHECKOUT = 2;

export const api = {
    getProducts() {
        return new Promise(resolve => {
            setTimeout(() => resolve(_products), TIMEOUT);
        })
    },
    buyProducts(cart) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Object.keys(cart).length <= MAX_CHECKOUT)
                    resolve(cart);
                else
                    reject(`You can buy ${MAX_CHECKOUT} items at maximum in a checkout`);
            }, TIMEOUT);
        })
    }
}