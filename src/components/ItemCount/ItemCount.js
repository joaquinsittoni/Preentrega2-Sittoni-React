import { useState } from "react";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
const [quantity, setQuantity] = useState(initial);

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

return (
    <div className="box">
    <div className="field has-addons">
        <p className="control">
        <button className="button" onClick={decrement}>
            -
        </button>
        </p>
        <p className="control">
        <input
            className="input"
            type="text"
            value={quantity}
            readOnly
        />
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
            onClick={() => onAdd(quantity)}
            disabled={!stock}
        >
            Agregar al carrito
        </button>
        </p>
    </div>
    </div>
);
};

export default ItemCount;
