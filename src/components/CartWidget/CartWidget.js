import React from 'react';
import cart from './assets/cart.svg';

const CartWidget = () => {
    return (
        <div className="columns is-vcentered">
            <div className="column">
                <img src={cart} alt="cart-widget" width="32" height="32" />
            </div>
            <div className="column">
                <span className="tag is-primary is-medium">0</span>
            </div>
        </div>
    );
}

export default CartWidget;
