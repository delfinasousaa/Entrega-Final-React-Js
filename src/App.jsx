import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'; 
import './App.css';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './components/Checkout/Checkout';

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} /> 
          <Route path='*' element={
              <div>
                <h1>404: Página no encontrada</h1>
                <p>Lo sentimos, la página que buscas no existe.</p>
                <Link to='/'>Volver al inicio</Link>
              </div>
            } 
          />
        </Routes>
      </CartProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
