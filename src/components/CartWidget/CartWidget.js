import React, { useContext, useState } from 'react';
import cartImg from './assets/cart.svg';
import {CartContext} from '../context/CartContext';
import {Link } from "react-router-dom";

const CartWidget = () => {
const {cart} = useContext (CartContext) 
const totalQuantity = cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
    return (
        <div className="columns is-vcentered">
            <div className="column">
                <Link to={"/cart"}>
                <img src={cartImg} alt="cart-widget" width="32" height="32" />
                </Link>

            
            </div>
            <div className="column">
                <span className="tag is-primary is-medium">{totalQuantity}</span>
            </div>
        </div>
    );
}

export default CartWidget;
