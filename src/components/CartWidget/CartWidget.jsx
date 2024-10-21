import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <div className="cart-container"> 
      <Link to='/cart'>
        <img className='carrito' src="/images/shoppingcart.png" alt="Carrito de compras" />
      </Link>
      {
        cantidadTotal > 0 && <strong className='strong-number'>{cantidadTotal}</strong>
      }
    </div>
  );
}

export default CartWidget;
