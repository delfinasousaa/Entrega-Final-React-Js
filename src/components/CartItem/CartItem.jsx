import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartItem.css';

const CartItem = ({ item, cantidad }) => {
    const { eliminarElemento } = useContext(CartContext);

    if (!item) {
        return <p>Producto no encontrado</p>;
    }

    const precioValido = !isNaN(item.precio) && item.precio > 0 ? item.precio : 0;

    return (
        <div className="cart-item">
            <div className="left-side">
                <h3 className="title-cartitem">{item.nombre}</h3>
                <p className="quantity-cartitem">Cantidad: {cantidad}</p>
            </div>
            <div className="right-side">
                <p className="price-cartitem">Precio: ${precioValido}</p>
                <button onClick={() => eliminarElemento(item.id)} className="btn-cartitem">Eliminar</button>
            </div>
        </div>
    );
};

export default CartItem;
