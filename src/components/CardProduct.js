import React from 'react'
import { Link } from 'react-router-dom';



const CardProduct = (props) => {

    const { nombre, precio, imagen, id } = props

    return (
        <div className='w-1/5 h-96 border-4 border-white rounded-lg bg-red-200 p-2'>
            <Link to={'/product/' + id}>
                <img src={imagen} alt="" className='w-full h-[80%] object-contain' />
            </Link>
            <h2 className='text-lg font-semibold'>{nombre}</h2>
            <p>Precio: <strong>{precio}</strong></p>
        </div>
    )
}

export default CardProduct