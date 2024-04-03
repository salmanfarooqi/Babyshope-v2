


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginForm from './pages/Login';
// import RegisterForm from './components/Register';
import ShoppingCart from './pages/Cart';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart'
import SignUp from './pages/SignUp'
import Shop from './pages/Shop';
import Blogs from './pages/Blogs';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route  path='/login' element={<LoginForm/>} />
        <Route path='/Register' element={<SignUp/>} />
        <Route path='/Shop' element={<Shop/>} />
        <Route path='/Blogs' element={<Blogs/>} />
        
      
      </Routes>
    </div>
  );
};

export default App;
