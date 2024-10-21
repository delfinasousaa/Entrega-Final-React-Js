import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/config';
import { collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2'; 
import './Checkout.css';

const Checkout = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [emailConfirmacion, setEmailConfirmacion] = useState('');
    const [error, setError] = useState('');

    const { carrito, total, vaciarCart } = useContext(CartContext);

    const manejadorForm = (e) => {
        e.preventDefault();

        if (!email || !nombre || !apellido || !telefono || !emailConfirmacion) {
            setError('Todos los campos son obligatorios');
            return;
        }

        if (email !== emailConfirmacion) {
            setError('Los emails no coinciden');
            return;
        }

        const orden = {
            items: carrito.map(item => ({
                id: item.id,
                nombre: item.nombre,
                precio: item.precio,
                cantidad: item.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            email,
            telefono
        };

        addDoc(collection(db, 'ordenes'), orden)
            .then(docRef => {
                vaciarCart(false);
                setApellido('');
                setNombre('');
                setEmail('');
                setTelefono('');
                setEmailConfirmacion('');


                Swal.fire({
                    icon: 'success',
                    title: '¡Compra exitosa!',
                    text: `Gracias por tu compra. Tu número de orden es ${docRef.id}`,
                    confirmButtonText: 'Aceptar'
                });
            })
            .catch(error => {
                console.log(error);
                setError('Error al generar la orden de compra');
            });
    };

    return (
<div className="checkout-container">
    <h2>Checkout</h2>
    <form onSubmit={manejadorForm}>
        {carrito.map(item => (
            <div key={item.id} className="cart-item">
                <p>{item.nombre}</p>
                <p>{item.precio} x {item.cantidad}</p>
                <p>${item.precio * item.cantidad}</p>
            </div>
        ))}

        <div>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
            <label htmlFor="apellido">Apellido</label>
            <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
            <label htmlFor="emailConfirmacion">Confirmar Email</label>
            <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
        </div>
        <div>
            <label htmlFor="telefono">Teléfono</label>
            <input type="number" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className='btn-buy'>Comprar</button>
    </form>
</div>

    );
};

export default Checkout;
