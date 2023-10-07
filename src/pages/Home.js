import React, { useState, useEffect } from 'react'
import CardProduct from './../components/CardProduct';
import { getAllProducts } from '../utils/database';


const Home = () => {

    const  [database, setDatabase] =  useState([])
        useEffect (()=>{
            setDatabase(getAllProducts())
        },[])  



    return (
        <div className='w-full h-screen bg-[#333] flex gap-4 flex-wrap p-4'>

            {
                database.map((producto) => {

                
                    return <CardProduct id={producto.id} key={producto.id} nombre={producto.nombre} precio={producto.precio} imagen={producto.imagen} />
                    
                })

            }
        </div>
    )
}

export default Home