import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';



const CardProduct = (props) => {

    const { nombre, precio, imagen, id } = props

    return (
        <div class="cellCard">
            <Link to={'/product/' + id}>
                <img src={imagen} alt="Producto" />
                <div class="cardText">
                    <p class="title is-4">{nombre}</p>
                    <p class="subtitle is-6">${precio}</p>
                </div>
            </Link>
        </div>
    )
}

export default CardProduct

