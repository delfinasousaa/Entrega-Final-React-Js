import './ItemDetail.css';
import Counter from '../Counter/Counter';
import { useState, useContext } from 'react'; 
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { toast } from 'react-toastify';

const ItemDetail = ({ id, nombre, precio, img, description, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCart } = useContext(CartContext);
  const manejadorCantidad = (cantidad) => {  
    setAgregarCantidad(cantidad);
    console.log("Producto agregado: " + cantidad);

    const item= {nombre, precio, id}
    agregarAlCart (item, cantidad);
    toast.success('Producto agregado al carrito', {position: "bottom-right", autoClose: 1000, closeOnClick: true, theme: "dark"});
  }

  return (
    <div className='card'>
      <h1 className='title'>{nombre}</h1>
      <h2 className='price'>${precio}</h2>
      <img className='img' src={img} alt={nombre} />
      <p className='id'>ID: {id}</p>
      <p className='description'>{description}</p>

      {
        agregarCantidad > 0 ? (
          <Link to='/cart'>Terminar compra</Link>
        ) : (
          <Counter inicial={1} stock={stock} onAdd={manejadorCantidad} />
        )
      }
    </div>
  );
};

export default ItemDetail;
