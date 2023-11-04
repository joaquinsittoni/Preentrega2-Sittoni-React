import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../../App.css'

function Cart({ }) {
  // Calcula la cantidad total en el carrito sumando la cantidad de cada producto
  const { cart, removeFromCart } = useContext(CartContext)
  const totalQuantity = cart.reduce((accumulator, item) => accumulator + item.quantity, 0);

  return (
    totalQuantity > 0 ? <div className='container2'>
      <h2>Carrito de compras</h2>
      <div class="table-responsive">
        <table class="table table-primary w-full">
          <thead>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(p => (
              <tr>
                <td>{p.nombre}</td>
                <td>{p.quantity}</td>
                <td><button onClick={() => removeFromCart(p)}>Eliminar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to={'/checkout'}>
        <button className='button is-danger is-rounded is-fullwidth has-text-weight-bold'>Checkout</button>
      </Link>

    </div>
      : <div className='container'>
        <h2 style={{fontSize:'35px',fontWeight:'bolder'}}>No hay elementos en el carrito</h2>
      </div>
  );
}

export default Cart;
