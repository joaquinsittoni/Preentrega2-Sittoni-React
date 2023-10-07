import React, { useEffect, useState } from 'react';
// import database from '../utils/database';
import { Link, useParams } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import ItemCount from '../components/ItemCount/ItemCount.js';
import { getOneProduct } from '../utils/database.js';


const Detalle = () => {
  const params = useParams();
  const [producto, setProducto] = useState({});
  useEffect(() => {
    
    setProducto(getOneProduct(params.id));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex gap-4 h-[50vh] p-4 w-1/2 border rounded-lg shadow-lg">
        <img
          className="w-1/2 h-full object-cover rounded-l-lg"
          src={producto.imagen}
          alt={producto.nombre}
        />
        <div>
          <div className="flex flex-col gap-4">
            <h1 className="title is-2 has-text-weight-bold">Detalle de {producto.nombre}</h1>
            <p className="subtitle is-4">
              Precio: <span className="has-text-weight-light">${producto.precio}</span>
            </p>
          </div>
          <div className="flex gap-4">
          <ItemCount stock={10} onAdd={(quantity) => console.log('Cantidad agregada' , quantity)} />
            <Link to="/">
              <button className="button is-danger is-rounded is-fullwidth has-text-weight-bold">
                Volver
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
