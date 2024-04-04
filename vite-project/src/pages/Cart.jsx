// import React, { useState, useEffect } from 'react';
// import Layout from '../components/Layout';
// import HomeBanner from "../components/HomeBannar";
// import axios from 'axios';

// function ShoppingCart() {
  
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: "Product 1", price: 49.00, quantity: 1 },
//     { id: 2, name: "Product 2", price: 49.00, quantity: 1 }
//   ]);

//   const [subtotal, setSubtotal] = useState(0);
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     let subtotalAmount = 0;
//     cartItems.forEach(item => {
//       subtotalAmount += item.price * item.quantity;
//     });
//     setSubtotal(subtotalAmount);
//     // You might have additional logic for taxes, discounts, shipping, etc., to calculate total
//     setTotal(subtotalAmount);
//   }, [cartItems]);

//   const updateQuantity = (id, newQuantity) => {
//     setCartItems(prevItems =>
//       prevItems.map(item =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   const removeItem = (id) => {
//     setCartItems(prevItems =>
//       prevItems.filter(item => item.id !== id)
//     );
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:9000");
//         console.log("data", response.data);
//         // setApiData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error.response.message);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:9000/product");
//         console.log("data", response.data);
//         setApiData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);
//   return (
//     <Layout>
//       <>
//        <HomeBanner
//         title="Cart"
//         className=""
//       />
//       <div className="main_co-section before-footer-section bg-gray-100">
//         <div className="container mx-auto py-8">
//           <div className="mb-5">
//             <form className="max-w-full">
//               <div className="site-blocks-table">
//                 <table className="table w-full">
//                   <thead>
//                     <tr>
//                       <th className="text-center">Image</th>
//                       <th className="text-center">Product</th>
//                       <th className="text-center">Price</th>
//                       <th className="text-center">Quantity</th>
//                       <th className="text-center">Total</th>
//                       <th className="text-center">Remove</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {cartItems.map(item => (
//                       <tr key={item.id}>
//                         <td className="text-center">
//                           <img src={`/featured/bowl-2.png`} alt="Image" className="w-24 h-24 object-cover mx-auto" />
//                         </td>
//                         <td className="text-center">
//                           <h2 className="h5 text-black">{item.name}</h2>
//                         </td>
//                         <td className="text-center">&pound;{item.price.toFixed(2)}</td>
//                         <td className="text-center">
//                           <div className="flex justify-center items-center space-x-2">
//                             <button className="btn btn-outline-black decrease" type="button" onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}>&minus;</button>
//                             <input type="text" className="form-input text-center w-12" value={item.quantity} readOnly />
//                             <button className="btn btn-outline-black increase" type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)}> + </button>
//                           </div>
//                         </td>
//                         <td className="text-center"> &pound;{(item.price * item.quantity).toFixed(2)}</td>
//                         <td className="text-center"><button className="btn btn-black btn-sm" onClick={() => removeItem(item.id)}>X</button></td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </form>
//           </div>

//           {/* Checkout section */}
//           <div className="md:flex md:justify-between">
//             <div className="mb-5 md:w-[40%] md:mb-0">
//               {/* Continue shopping and Apply coupon */}
//               <div className="flex flex-wrap items-center">
//                 <div className="w-full md:w-6/12 mb-3 md:mb-0">
//                   <label className="text-black text-lg mb-1" htmlFor="coupon">Coupon</label>
//                   <p className="text-black text-sm mb-3">Enter your coupon code if you have one.</p>
//                   <input type="text" className="form-input py-4 px-4 rounded-md w-full" id="coupon" placeholder="Coupon Code" />
//                 </div>
//                 <div className="w-full py-4 justify-end ">
//                   <button className="bg-black text-white py-2 px-4 rounded-full">Apply Coupon</button>
//                 </div>
//               </div>
//             </div>
//             <div className="md:w-[40%] md:pl-5">
//               {/* Cart totals and Proceed to checkout */}
//               <div className="flex justify-end">
//                 <div className="w-full md:w-9/12">
//                   <div className="flex py-1 border-b border-black mb-5">
//                     <h3 className="text-black text-lg uppercase">Cart Totals</h3>
//                   </div>
//                   <div className="flex mb-3">
//                     <div className="w-6/12">
//                       <span className="text-black">Subtotal</span>
//                     </div>
//                     <div className="w-6/12 text-right">
//                       <strong className="text-black">&pound;{subtotal.toFixed(2)}</strong>
//                     </div>
//                   </div>
//                   <div className="flex mb-5">
//                     <div className="w-6/12">
//                       <span className="text-black">Total</span>
//                     </div>
//                     <div className="w-6/12 text-right">
//                       <strong className="text-black">&pound;{total.toFixed(2)}</strong>
//                     </div>
//                   </div>
//                   <div className="flex justify-end">
//                     <button className="bg-black text-white py-2 px-4 rounded-full w-full" onClick={() => window.location='checkout.html'}>Proceed To Checkout</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       </>
//     </Layout>
//   );
// }

// export default ShoppingCart;



import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import HomeBanner from "../components/HomeBannar";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ShoppingCart() {

  
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [productID,setProductID]=useState([{
    _id:"",
    productId:""

  }])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9000");
        console.log("data", response.data);
         response.data.map((item)=>{
          setProductID({
            _id:item?._id,
            productId:item?.productId

          })
         })
        // setApiData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.response.message);
      }
    };

    fetchData();
    console.log("all the data",productID)
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/product");
        const apiProducts = response.data; // Assuming the API response contains an array of products
        const cartItemsFromApi = apiProducts.map(product => ({
          id: product.productId, // Assuming the product ID is named 'productId' in the API response
          name: product.name,
          price: product.price,
          quantity: 1 // Default quantity
        }));
        setCartItems(cartItemsFromApi);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let subtotalAmount = 0;
    cartItems.forEach(item => {
      subtotalAmount += item.price * item.quantity;
    });
    setSubtotal(subtotalAmount);
    // You might have additional logic for taxes, discounts, shipping, etc., to calculate total
    setTotal(subtotalAmount);
  }, [cartItems]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.id !== id)
    );
  };


  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/Checkout');
  
  };

  return (
    <Layout>
      <>
       <HomeBanner
        title="Cart"
        className=""
      />
      <div className="main_co-section before-footer-section bg-gray-100">
        <div className="container mx-auto py-8">
          <div className="mb-5">
            <form className="max-w-full">
              <div className="site-blocks-table">
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
                        <td className="text-center">
                          <img src={`/featured/bowl-2.png`} alt="Image" className="w-24 h-24 object-cover mx-auto" />
                        </td>
                        <td className="text-center">
                          <h2 className="h5 text-black">{item.name}</h2>
                        </td>
                        <td className="text-center">&pound;{item.price.toFixed(2)}</td>
                        <td className="text-center">
                          <div className="flex justify-center items-center space-x-2">
                            <button className="btn btn-outline-black decrease" type="button" onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}>&minus;</button>
                            <input type="text" className="form-input text-center w-12" value={item.quantity} readOnly />
                            <button className="btn btn-outline-black increase" type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)}> + </button>
                          </div>
                        </td>
                        <td className="text-center"> &pound;{(item.price * item.quantity).toFixed(2)}</td>
                        <td className="text-center"><button className="btn btn-black btn-sm" onClick={() => removeItem(item.id)}>X</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </form>
          </div>

          {/* Checkout section */}
          <div className="md:flex md:justify-between">
            <div className="mb-5 md:w-[40%] md:mb-0">
              {/* Continue shopping and Apply coupon */}
              <div className="flex flex-wrap items-center">
                <div className="w-full md:w-6/12 mb-3 md:mb-0">
                  <label className="text-black text-lg mb-1" htmlFor="coupon">Coupon</label>
                  <p className="text-black text-sm mb-3">Enter your coupon code if you have one.</p>
                  <input type="text" className="form-input py-4 px-4 rounded-md w-full" id="coupon" placeholder="Coupon Code" />
                </div>
                <div className="w-full py-4 justify-end ">
                  <button className="bg-black text-white py-2 px-4 rounded-full">Apply Coupon</button>
                </div>
              </div>
            </div>
            <div className="md:w-[40%] md:pl-5">
              {/* Cart totals and Proceed to checkout */}
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
                    <button className="bg-black text-white py-2 px-4 rounded-full w-full" onClick={handleCheckout}>Proceed To Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    </Layout>
  );
}

export default ShoppingCart;

