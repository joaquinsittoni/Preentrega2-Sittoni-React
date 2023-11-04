import React, { useState, useEffect } from 'react'
import CardProduct from './../components/CardProduct';
import { getAllProducts } from '../utils/database';
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import '../App.css';


const Home = () => {

    const [database, setDatabase] = useState([])
    useEffect(() => {

        getData();

    }, [])

    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const productos = []
        querySnapshot.forEach((doc) => {
            productos.push({ ...doc.data(), id: doc.id })
            console.log("productos", doc.data())

        });
        setDatabase(productos)
        console.log(productos)
    }


    return (
        <div className='container'>
                {
                    database.sort((a,b)=> a.nombre>b.nombre? 1 : a.nombre<b.nombre? -1 : 0).map((producto, index) => {
                        console.log(producto)
                        return <CardProduct id={producto.id} key={index} nombre={producto.nombre} precio={producto.precio} imagen={producto.imagen} />
                    })
                }
        </div>
    )
}

export default Home