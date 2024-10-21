import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = () => {
    const { carrito, vaciarCart, total, cantidadTotal } = useContext(CartContext);
    
    if (cantidadTotal === 0) {
        return (
            <>
                <h2 className="empty-cart">Tu carrito de compras está vacío...</h2>
                <Link to='/' className="link-inicio">Ir a comprar</Link>
            </>
        );
    }

    return (
        <div>
            {carrito.map(item => (
                <CartItem 
                    key={item.id} 
                    item={item} 
                    cantidad={item.cantidad}
                />
            ))}

            <h3 className="total-cart">Total: ${total}</h3>
            <h3 className="total-cantidad">Cantidad total: {cantidadTotal}</h3>
            <div className="cart-buttons">
                <button onClick={() => vaciarCart()} className="btn-empty-cart">Vaciar carrito</button>
                <Link to='/checkout' className="btn-end-cart">Terminar compra</Link>
            </div>
        </div>
    );
}

export default Cart;
