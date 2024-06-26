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
import ContactForm from './pages/ContactUs';
import ProtectRoute from './components/ProtectRoute';
import Checkout from './pages/Checkout';
import ThankYouPage from './pages/ThankYour';
import ProductDetails from './pages/ProductDetails';


const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path='/cart' element={<ProtectRoute component={Cart} />} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/ProductDetails/:id' element={<ProductDetails/>} />
        <Route  path='/login' element={<LoginForm/>} />
        <Route path='/Register' element={<SignUp/>} />
        <Route path='/Shop' element={< Shop />} />
        <Route path='/Blogs' element={<Blogs/>} />
        <Route path='/contact' element={<ProtectRoute component={ContactForm} />} />
        <Route path='/Checkout' element={<Checkout/>} />
        <Route path='/ThankYou' element={<ThankYouPage/>} />
        
      
      </Routes>
    </div>
  );
};

export default App;
