import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Cart from './Pages/Cart';
import { CartProvider } from './Components/useContext';
import OrderHistory from './Pages/OrderHistory';
import CategoryPage from './Pages/CategoryPage';
const App = () => {
  return (
    <CartProvider>
      <Routes>
      <Route path='/categoripage' element={<CategoryPage/>}/>
      <Route path='/orderhistory' element={<OrderHistory/>}/>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </CartProvider>
    
  );
};

export default App;
