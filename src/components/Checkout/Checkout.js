import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext"
import { addDoc, collection, documentId, getDocs, Timestamp, query, where, writeBatch } from "firebase/firestore";
import { db } from "../../firebase/config";
import CheckoutForm from "../CheckoutForm/CheckoutForm"

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, getTotal, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);
        try {
            const total = getTotal();
            const order = {
                buyer: { name, phone, email },
                items: cart,
                total,
                date: Timestamp.fromDate(new Date())
            };
           // console.log(cart)
            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(prod => prod.id);
            const productsRef = collection(db, 'productos');
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId('productos'), 'in', ids)));
            const { docs } = productsAddedFromFirestore;
            console.log (docs)
            docs.forEach(doc => {
                const productData = doc.data();
                const stockDb = productData.stock;
                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const productQuantity = productAddedToCart?.quantity;

                console.log (productAddedToCart)

                if (stockDb >= productQuantity) {
                    batch.update(doc.ref, { stock: stockDb - productQuantity }, true);
                } else {
                    outOfStock.push({ id: doc.id, ...productData });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, order);
                setOrderId(orderAdded.id);
                clearCart();
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    

    if (loading) {
        return (
            <div className="container">
                <h1 className="title">Se está generando su orden...</h1>
            </div>
        );
    }

    if (orderId) {
        return (
            <div className="container">
                <h1 className="title">El id de su orden es: {orderId}</h1>
            </div>
        );
    }

    return (
        <div className="container">
            <h1 className="title">Completa tus datos para finalizar la compra.</h1>
            <div className="columns">
                <div className="column is-half">
                    <div className="box">
                        <CheckoutForm onConfirm={createOrder} />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Checkout;