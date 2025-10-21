import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Cart from './Pages/Cart';
import { CartProvider } from './Components/useContext';
import OrderHistory from './Pages/OrderHistory';
import CategoryPage from './Pages/CategoryPage';
import AddressForm from './Components/AddressForm';
import OrderPlace from './Pages/OrderPlace';
import Singin from './Pages/Signin';
import Login from './Pages/Login';
import MyOrders from './Components/MyOrders';
const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<Singin/>}/>
        <Route path='/orderplace' element={<OrderPlace/>}/>
        <Route path='/addressform' element={<AddressForm/>}/>
        <Route path='/categoripage' element={<CategoryPage/>}/>
        <Route path='/orderhistory' element={<OrderHistory/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
    </Routes>
    </CartProvider>
  );
};

export default App;
