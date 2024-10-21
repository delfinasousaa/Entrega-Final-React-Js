import { createContext, useState } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0,
});

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    console.log("Carrito actual:", carrito);

    const agregarAlCart = (item, cantidad) => {
        console.log(item);
        const productoExistente = carrito.find((elemento) => elemento.id === item.id);

        if (!productoExistente) {
            setCarrito(prev => [...prev, { ...item, cantidad }]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + item.precio * cantidad);
        } else {
            const cartActualizado = carrito.map(elemento => {
                if (elemento.id === item.id) {
                    return { ...elemento, cantidad: elemento.cantidad + cantidad };
                } else {
                    return elemento;
                }
            });
            setCarrito(cartActualizado);
            setTotal(prev => prev + (item.precio * cantidad));
            setCantidadTotal(prev => prev + cantidad);
        }
    };

    const eliminarElemento = (id) => {
        const elementoEliminado = carrito.find(elemento => elemento.id === id);
        const cartActualizado = carrito.filter(elemento => elemento.id !== id);

        setCarrito(cartActualizado);
        setTotal(prev => prev - elementoEliminado.precio * elementoEliminado.cantidad);
        setCantidadTotal(prev => prev - elementoEliminado.cantidad);
    };

    const vaciarCart = (confirmar = true) => {
        if (confirmar) {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "btn btn-success",
                    cancelButton: "btn btn-danger"
                },
                buttonsStyling: false
            });
            swalWithBootstrapButtons.fire({
                title: "¿Estás seguro?",
                text: "No podrás revertir esto!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Sí, estoy seguro",
                cancelButtonText: "No, cancelar",
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire({
                        title: "¡Eliminados!",
                        text: "Todos los productos han sido eliminados.",
                        icon: "success"
                    });

                    setCarrito([]);
                    setTotal(0);
                    setCantidadTotal(0);
                }
            });
        } else {
            setCarrito([]);
            setTotal(0);
            setCantidadTotal(0);
        }
    };

    return (
        <CartContext.Provider value={{ carrito, total, cantidadTotal, agregarAlCart, eliminarElemento, vaciarCart }}>
            {children}
        </CartContext.Provider>
    );
};
