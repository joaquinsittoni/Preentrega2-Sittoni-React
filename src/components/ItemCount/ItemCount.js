import React, { useState, useContext } from "react";
import  {CartContext}  from "../context/CartContext";



const ItemCount = ({ stock = 0, onAdd, producto = null, }) => {
  const  cartContext = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  console.log(cartContext)

  function increment() {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function addToCart() {
    if (quantity > 0) {
      onAdd(quantity);
      cartContext.addItem(producto, quantity)
      setAlertMessage(`Se agregaron ${quantity} producto(s) al carrito.`);
      setShowAlert(true);
    }
  }

  function finalizePurchase() {
    cartContext.clearCart()
    setAlertMessage("Compra finalizada. Gracias por su compra.");

    setShowAlert(true);
  }

  return (
    <div className="box">
      {showAlert && (
        <div className="notification is-success">
          {alertMessage}
          <button className="delete" onClick={() => setShowAlert(false)}></button>
        </div>
      )}

      <div className="field has-addons">
        <p className="control">
          <button className="button" onClick={decrement}>
            -
          </button>
        </p>
        <p className="control">
          <input className="input" type="text" value={quantity} readOnly />
        </p>
        <p className="control">
          <button className="button" onClick={increment}>
            +
          </button>
        </p>
      </div>
      <div className="field">
        <p className="control">
          <button
            className="button is-primary"
            onClick={addToCart}
            disabled={!stock}
          >
            Agregar al carrito
          </button>
        </p>
      </div>
      <div className="field">
        <p className="control">
          <button className="button is-danger" onClick={finalizePurchase}>
            Finalizar compra y limpiar carrito
          </button>
        </p>

        <p> El Apple iPhone llega este año con un chasis fabricado en titanio que reemplaza al acero inoxidable y estrena puerto USB-C que reemplaza al puerto Lightning.
          El iPhone 15 Pro tiene una pantalla OLED LTPO de 6.1 pulgadas y una cámara triple en su posterior, con un sensor principal de 48MP, y un par de sensores de 12MP que funcionan como telefoto y ultrawide.
          La cámara frontal es de 12MP e incopora OIS y sensores para Face ID. La batería del iPhone 15 Pro se puede cargar al 50% en 30 minutos, es resistente al polvo y agua.
          Los iPhone tienen parlantes stereo y está impulsado por el nuevo procesador Apple A17 Pro de seis núcleos.</p>
      </div>
    </div>
  );
};

export default ItemCount;
