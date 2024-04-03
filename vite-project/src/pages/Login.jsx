import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

function LoginForm() {
  return (
    <Layout>
    <div className="container mx-auto w-full  ">
      <h3 className="text-center  text-2xl  py-4  font-semibold">Sign In To Your Account</h3>
      <div className="flex justify-center mb-2">
        <div className="w-full lg:w-1/2 xl:w-1/3 border rounded-lg p-5 bg-[#EFF2F1] ">
          <form action="/action_page.php ">
            <div className="mb-3 mt-3">
              <label htmlFor="email">Email:</label>
              <input type="email" className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400" id="email" placeholder="Enter email" name="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="pwd">Password:</label>
              <input type="password" className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400" id="pwd" placeholder="Enter password" name="pswd" required />
            </div>
            <div className="mb-3">
              <input type="checkbox" className="form-checkbox" id="remember" name="remember" />
              <label htmlFor="remember" className="ml-2">Remember me</label>
            </div>
            <button type="submit" className="block w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
            <div className="text-center mt-4">
              {/* <a href="" className="block text-blue-500 hover:text-blue-700">Forgotten your password?</a> */}
             <Link to={"/Register"}> <p className="block mt-2 text-blue-500 hover:text-blue-700">New here? Register</p></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default LoginForm;
