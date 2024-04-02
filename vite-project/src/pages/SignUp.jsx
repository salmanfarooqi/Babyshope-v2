import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
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
      const response = await axios.post('/Register', {
        name,
        email,
        password
      });
      console.log(response.data.message);
     
    } catch (error) {
      console.error('Error:', error);
      // Handle error states (display error message to the user, etc.)
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h3 className="text-center my-2 text-lg font-semibold">Register Your Account</h3>
      <div className="flex justify-center mb-2">
        <div className="w-full lg:w-1/2 border rounded-lg p-5">
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
            <button type="submit" className="block w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={handleSubmit}>submit</button>
            <div className="text-center mt-3">
              <Link to={"/login"}><p className="block text-blue-500 hover:text-blue-700">Already have an account? Login</p></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;