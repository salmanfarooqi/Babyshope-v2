



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import HomeBanner from "../components/HomeBannar";
import { Link, useNavigate } from 'react-router-dom';
import {toast,ToastContainer} from 'react-toastify'

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [reload,setReload]=useState(false)
  const [itemsData1,setitemsData1]=useState([{}
  
  ])
  const navigate = useNavigate();



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:9000/");
       
        const products = response.data; // Assuming the API response contains an array of products
        setitemsData1(response.data)
        // Fetch userId from localStorage
        const userIdFromLocalStorage = localStorage.getItem('userId');
        
        // Map the products to cart items
        const cartItemsFromApi = products.map(product => ({
          id: product._id,
          name: product.productId.name,
          price: product.productId.price,
          quantity: product.quantity || 1,
          image: product.productId.imageUrl,
          userId: product.userId // Assuming userId is available in the API response
        }));
  
        // Filter cart items based on userId
        const filteredCartItems = cartItemsFromApi.filter(item => item.userId === userIdFromLocalStorage);
        
        setCartItems(filteredCartItems);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchProducts();
  }, [reload]);
  


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:9000/product");
       
        const products = response.data; // Assuming the API response contains an array of products
        setitemsData1(response.data)
        // Fetch userId from localStorage
        const userIdFromLocalStorage = localStorage.getItem('userId');
        
        // Map the products to cart items
        const cartItemsFromApi = products.map(product => ({
          id: product._id,
          name: product.productId.name,
          price: product.productId.price,
          quantity: product.quantity || 1,
          image: product.productId.imageUrl,
          userId: product.userId // Assuming userId is available in the API response
        }));
  
        // Filter cart items based on userId
        const filteredCartItems = cartItemsFromApi.filter(item => item.userId === userIdFromLocalStorage);
        
        setCartItems(filteredCartItems);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchProducts();
  }, [reload]);
  
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:9000/");
  //       const products = response.data;
  //       const cartItemsFromApi = products.map(product => ({
  //         id: product._id,
  //         name: product.productId.name,
  //         price: product.productId.price,
  //         quantity: product.quantity || 1,
  //         image: product.productId.imageUrl
  //       }));
  //       setCartItems(cartItemsFromApi);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, [reload]);


  let handleDelete=async(id,e)=>{
    e.preventDefault();
    try {
      let deleteItem=await axios.post("http://localhost:9000/deleteCartItems",{
        cartItemId:id

      })

      setReload(!reload)
      
    } catch (error) {
        console.log("erro",error)
    }
  }
  useEffect(() => {
    let subtotalAmount = 0;
    cartItems.forEach(item => {
      subtotalAmount += item.price * item.quantity;
    });
    setSubtotal(subtotalAmount);
    setTotal(subtotalAmount);
  }, [cartItems]);

  const updateQuantity = async (id, newQuantity) => {
    try {
      await axios.post("http://localhost:9000/updateCartQuantity", {
        cartItemId: id,
        quantity: newQuantity
      });
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };



  const fetchProduct = async (id) => {
    try {
      await axios.post("http://localhost:9000/deleteCartItems", {
        cartItemId: id
      });
      setCartItems(prevItems =>
        prevItems.filter(item => item.id !== id)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleCheckout = () => {
    navigate('/Checkout');
  };


  return (
    <Layout>
      <>
        {/* <HomeBanner
          title="Cart"
          className=" h-[300px] text-black "
        /> */}
        <div className="main_co-section before-footer-section bg-gray-100">
          <div className="container mx-auto py-5 sm:py-8">
            <div className="mb-5 ">
              <form className="max-w-full">
                <div className="site-blocks-table  ">
                  <table className="table w-full">
                    <thead>
                      <tr>
                        <th className="text-center">Image</th>
                        <th className="text-center">Product</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Quantity</th>
                        <th className="text-center">Total</th>
                        <th className="text-center">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map(item => (
                        <tr key={item.id}>
                          <td className="text-center ">
                            <img src={item.image} alt="Image" className="w-16 sm:w-24 h-16 sm:h-24 !rounded-full sm:rounded-none object-cover mx-auto" />
                          </td>
                          <td className="text-center">
                            <h2 className="h5 text-black">{item.name}</h2>
                          </td>
                          <td className="text-center">&pound;{item.price}</td>
                          <td className="text-center">
                            <div className="flex justify-center items-center space-x-2">
                              <button className="btn btn-outline-black decrease" type="button" onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}>&minus;</button>
                              <input type="text" className="form-input text-center w-10 sm:w-12" value={item.quantity} readOnly />
                              <button className="btn btn-outline-black increase" type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)}> + </button>
                            </div>
                          </td>
                          <td className="text-center"> &pound;{(item.price * item.quantity)}</td>
                          <td className="text-center" onClick={(e) => handleDelete(item.id,e)}><button className="">X</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table> 
                   
                </div>
              </form>
            </div>
            <div className="md:flex md:justify-between">
              <div className="md:w-[40%] md:mb-0">
                <div className="flex flex-wrap items-center">
                  <div className="w-full md:w-6/12 mb-3 md:mb-0">
                    <label className="text-black text-lg mb-1" htmlFor="coupon">Coupon</label>
                    <p className="text-black text-sm mb-3">Enter your coupon code if you have one.</p>
                    <input type="text" className="form-input py-4 px-4 rounded-md w-full" id="coupon" placeholder="Coupon Code" />
                  </div>
                  <div className="w-full py-4 justify-end ">
                    <button className="bg-[#6A6A6A] hover:bg-black text-white py-2 px-4 rounded-md">Apply Coupon</button>
                  </div>
                </div>
              </div>
              <div className="md:w-[40%] md:pl-5 px-5 sm:px-0">
                <div className="flex justify-end">
                  <div className="w-full md:w-9/12">
                    <div className="flex py-1 border-b border-black mb-5">
                      <h3 className="text-black text-lg uppercase">Cart Totals</h3>
                    </div>
                    <div className="flex mb-3">
                      <div className="w-6/12">
                        <span className="text-black">Subtotal</span>
                      </div>
                      <div className="w-6/12 text-right">
                        <strong className="text-black">&pound;{subtotal.toFixed(2)}</strong>
                      </div>
                    </div>
                    <div className="flex mb-5">
                      <div className="w-6/12">
                        <span className="text-black">Total</span>
                      </div>
                      <div className="w-6/12 text-right">
                        <strong className="text-black">&pound;{total.toFixed(2)}</strong>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button className="bg-[#6A6A6A] hover:bg-black text-white py-2 px-4 rounded-md w-full" onClick={handleCheckout}>Proceed To Checkout</button>
                      </div>
                    {/* <div className="flex justify-center md:justify-end">
                      <button className="bg-black text-white py-2 px-2 md:px-4 rounded-full w-[80] md:w-full" onClick={handleCheckout}>Proceed To Checkout</button>
                    </div> */}

              
                  </div>
                </div>
              
              </div>
            
            </div>
           
          </div>

      
          <ToastContainer/>

        </div>
     
      </>
     
    </Layout>
  );
}

export default ShoppingCart;

