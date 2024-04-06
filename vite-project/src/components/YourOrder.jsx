import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

function YourOrder({ className }) {
    const [cartData, setCartData] = useState([]);
    useEffect(() => {
        // Fetch cart items from the server
        const fetchCartItems = async () => {
            try {
                const response = await axios.get('http://localhost:9000'); // Use Axios to make the GET request
                const data = response.data; // Access response data directly
                console.log("Cart Data:", data); // Log cart data to console
                setCartData(data);
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };
    
        fetchCartItems();
    }, []);
    
    console.log("Cart Data:", cartData); // Log cart data after it's set
    
    // Calculate subtotal for each product
    const productsWithSubtotal = cartData.map(item => {
        const price = parseFloat(item.productId.price);
        const quantity = parseInt(item.quantity);
        const subtotal = price * quantity;
        console.log("Price:", price, "Quantity:", quantity, "Subtotal:", subtotal); // Log price, quantity, and subtotal
        return { ...item, subtotal };
    });
    
    console.log("ProductsWithSubtotal:", productsWithSubtotal); // Log products with subtotal
    
    // Calculate cart subtotal
    const cartSubtotal = productsWithSubtotal.reduce((acc, item) => acc + item.subtotal, 0);
    console.log("Cart Subtotal:", cartSubtotal);
    return (
        <div className={`${className} w-full border border-gray-300 justify-center items-center py-10 text-[#6A6A6A]`}>
            {/* Product section */}
            <div className='w-full flex justify-center'>
                <div className='w-full flex justify-between'>
                    <div className='w-1/2 flex justify-center'>
                        <p className='font-semibold'>Product</p>
                    </div>
                    <div className='w-1/2 flex justify-center'>
                        <p className='font-semibold'>Price</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <div className='w-[90%] py-[1px] bg-black' />
            </div>
            <div className='w-full flex flex-col justify-center items-center'>
                {productsWithSubtotal.map((item, index) => (
                    <div key={index} className='w-full flex justify-center'>
                        <div className='w-full flex justify-between py-2'>
                            <div className='w-1/2 flex justify-center'>
                                <p>{item.productId.name}</p>
                            </div>
                            <div className='w-1/2 flex justify-center'>
                                <p>£{item.productId.price.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full flex justify-between py-2 border-b-[1px] border-gray-300'>
                <p className='mr-6 font-bold'>Cart Subtotal:</p>
                <p className='mr-6 font-bold'>£{cartSubtotal.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default YourOrder;
