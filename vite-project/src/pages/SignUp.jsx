import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SignUp() {
  let navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log("handle submit is hit")
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9000/signup", {
        name,
        email,
        password
      });
      console.log(response.data.message,"response");
      
      toast.success(response.data.message)

      navigate("/login")
      
     
    } catch (error) {
      console.error('Error:', error);
      toast.error(error.response.data.message);
      // Handle error states (display error message to the user, etc.)
    }
  };

  return (
    <Layout>
    <div className="container mx-auto p-5">
      <h3 className="text-center py-4 text-2xl font-semibold">Register Your Account</h3>
      <div className="flex justify-center mb-2">
        <div className="w-full lg:w-1/2 border rounded-lg p-5 bg-[#EFF2F1]">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mt-3">
              <label htmlFor="name">Name:</label>
              <input type="text" className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400" id="name" placeholder="Enter name" name="name" value={name} onChange={handleChange} required />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="email">Email:</label>
              <input type="email" className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400" id="email" placeholder="Enter email" name="email" value={email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password:</label>
              <input type="password" className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400" id="password" placeholder="Enter password" name="password" value={password} onChange={handleChange} required />
            </div>
            <button type="submit" className="block w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={handleSubmit}>SignuUp</button>
            <div className="text-center mt-3">
              <Link to={"/login"}><p className="block text-blue-500 hover:text-blue-700">Already have an account? Login</p></Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
    
    </Layout>
  );
}

export default SignUp;
