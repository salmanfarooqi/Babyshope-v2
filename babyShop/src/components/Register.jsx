import React from 'react';
import { Link } from 'react-router-dom';

function RegisterForm() {
  return (
    <div className="container mx-auto p-5">
      <h3 className="text-center my-2 text-lg font-semibold">Register Your Account</h3>
      <div className="flex justify-center mb-2">
        <div className="w-full lg:w-1/2 border rounded-lg p-5">
          <form action="/action_page.php">
            <div className="mb-3 mt-3">
              <label htmlFor="f_name">First Name:</label>
              <input type="text" className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400" id="f_name" placeholder="Enter first name" name="f_name" required />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="l_name">Last Name:</label>
              <input type="text" className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400" id="l_name" placeholder="Enter last name" name="l_name" required />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="email">Email:</label>
              <input type="email" className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400" id="email" placeholder="Enter email" name="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="pwd">Password:</label>
              <input type="password" className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400" id="pwd" placeholder="Enter password" name="pswd" required />
            </div>
            <div className="mb-3">
              <label htmlFor="c_pwd">Confirm Password:</label>
              <input type="password" className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400" id="c_pwd" placeholder="Confirm password" name="c_pswd" required />
            </div>
            <button type="submit" className="block w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Register</button>
            <div className="text-center mt-3">
            <Link to={"/login"}><p className="block text-blue-500 hover:text-blue-700">Already have an account? Login</p>
                </Link>  
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
