import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './ui/NavBar';
import LoginForm from './auth/LoginForm';
import RegisterForm from './auth/RegForm';
import Home from './pages/Home';
import CartPage from './pages/CartPage';

export default function App({ user, meds, cartItems }) {
  return (
    <>
      <NavBar user={user} />
      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/registration' element={<RegisterForm />} />
        <Route path='/home' element={<Home meds={meds} />} />
        <Route path='/cart' element={<CartPage cartItems={cartItems} meds={meds} />} />
      </Routes>
    </>
  );
}
