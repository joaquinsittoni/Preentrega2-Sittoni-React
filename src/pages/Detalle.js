import React, { useEffect, useState } from 'react';
// import database from '../utils/database';
import { Link, useParams } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import ItemCount from '../components/ItemCount/ItemCount.js';
import { getOneProduct } from '../utils/database.js';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import '../App.css';



const Detalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  useEffect(() => {
    getData()

    /*setProducto(getOneProduct(params.id));*/
  }, []);
  const getData = async () => {
    const docSnap = await getDoc(doc(db, "productos", id));
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setProducto({ ...docSnap.data(), id: docSnap.id })
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }


  }

  return (
    <div className="container">
      <div className="cellDetail">
        <img
          className="w-1/2 h-full object-cover rounded-l-lg"
          src={producto.imagen}
          alt={producto.nombre}
        />
        <div className="">
          <h1 className="title is-2 has-text-weight-bold">Detalle de {producto.nombre}</h1>
          <p className="subtitle is-4">
            Precio: <span className="has-text-weight-light">${producto.precio}</span>
          </p>
          <div className="flex gap-4">
            <ItemCount producto={producto} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
          </div>
            <Link to="/">
              <button className="button is-danger is-rounded is-fullwidth has-text-weight-bold">
                Volver
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
