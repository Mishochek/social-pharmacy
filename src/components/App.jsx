import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './ui/NavBar';
import LoginForm from './auth/LoginForm';
import RegisterForm from './auth/RegForm';

export default function App({ user}) {
  return (
    <>
    <NavBar user={user}/>
    <Routes>
    <Route path='/login' element={<LoginForm />} />
    <Route path='/registration' element={<RegisterForm />} />
    </Routes>
    </>
  );
}
