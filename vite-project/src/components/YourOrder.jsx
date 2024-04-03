import  { useState } from 'react';

function YourOrder({ className }) {
    const data = [
        { id: 1, Products: "Top Up T-Shirt x 1", Total: "£250.00" },
        { id: 2, Products: "Top Up T-Shirt x 1", Total: "£100.00" },
        { id: 2, Products: "Top Up T-Shirt x 1", Total: "£100.00" },
    ];

    // Calculate subtotal for each product
    const productsWithSubtotal = data.map(item => {
        const quantity = parseInt(item.Products.match(/\d+/)[0]); // Extract quantity from the product name
        const price = parseFloat(item.Total.replace('£', ''));
        const subtotal = quantity * price;
        return { ...item, Subtotal: subtotal };
    });

    // Calculate cart subtotal
    const cartSubtotal = productsWithSubtotal.reduce((acc, item) => acc + item.Subtotal, 0);

    // Calculate order total (same as cart subtotal for this example)
    const orderTotal = cartSubtotal;

    const [showDirectBankTransfer, setShowDirectBankTransfer] = useState(false);
    const [showChequePayment, setShowChequePayment] = useState(false);
    const [showPaypal, setShowPaypal] = useState(false);

    // Function to toggle visibility of additional payment information for Direct Bank Transfer
    const toggleDirectBankTransfer = () => {
        setShowDirectBankTransfer(!showDirectBankTransfer);
    };

    // Function to toggle visibility of additional payment information for Cheque Payment
    const toggleChequePayment = () => {
        setShowChequePayment(!showChequePayment);
    };

    // Function to toggle visibility of additional payment information for Paypal
    const togglePaypal = () => {
        setShowPaypal(!showPaypal);
    };

    return (
        <div className={`${className} w-full border border-gray-300 justify-center items-center py-10 text-[#6A6A6A]`}>
            {/* Product section */}
            <div className='w-full flex justify-center'>
                <div className='w-full flex justify-between'>
                    <div className='w-1/2 flex justify-center'>
                        <p className='font-semibold'>Product</p>
                    </div>
                    <div className='w-1/2 flex justify-center'>
                        <p className='font-semibold'>Subtotal</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <div className='w-[90%] py-[1px] bg-black' />
            </div>
            <div className='w-full flex flex-col justify-center items-center'>
                {productsWithSubtotal.map((item) => (
                    <>
                    <div key={item.id} className='w-full flex justify-center'>
                        <div className='w-full flex justify-between py-2  '>
                            <div className='w-1/2 flex justify-center'>
                                <p>{item.Products}</p>
                            </div>
                            <div className='w-1/2 flex justify-center'>
                                <p>£{item.Subtotal.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[90%]  border-b-[1px] border-gray-300'/>
                    </> ))}
            </div>
            <div className='w-full flex flex-col justify-center items-center px-20'>
                <div className='w-full flex justify-between py-2 border-b-[1px] border-gray-300 '>
                    <p>Cart Subtotal:</p>
                    <p className='mr-6'>£{cartSubtotal.toFixed(2)}</p>
                </div>
                <div className='w-full flex justify-between py-2 border-b-[1px] border-gray-300'>
                    <p className='mr-6 font-bold'>Order Total:</p>
                    <p className='mr-6 font-bold'>£{orderTotal.toFixed(2)}</p>
                </div>
            </div>


            <div className=' w-full flex justify-center items-center'>
            <div className='w-[90%] ' >
            {/* Direct Bank Transfer section */}
            <div className='w-full flex flex-col justify-center items-start border border-gray-300 px-10 mt-4 py-3'>
                <div className='' onClick={toggleDirectBankTransfer}>
                    <p className='font-semibold text-lg cursor-pointer underline hover:no-underline'>Direct Bank Transfer</p>
                </div>
                {showDirectBankTransfer && (
                    <div className=''>
                        <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                    </div>
                )}
            </div>

            {/* Cheque Payment section */}
            <div className='w-full flex flex-col justify-center items-start border border-gray-300 px-10 mt-4 py-3'>
                <div className='' onClick={toggleChequePayment}>
                    <p className='font-semibold text-lg cursor-pointer underline hover:no-underline'>Cheque Payment</p>
                </div>
                {showChequePayment && (
                    <div className=''>
                        <p>Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                    </div>
                )}
            </div>

            {/* PayPal section */}
            <div className='w-full flex flex-col justify-center items-start border border-gray-300 px-10 mt-4 py-3'>
                <div className='' onClick={togglePaypal}>
                    <p className='font-semibold text-lg cursor-pointer underline hover:no-underline'>PayPal</p>
                </div>
                {showPaypal && (
                    <div className=''>
                        <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                    </div>
                )}
            </div>
            <button className='font-bold text-lg !bg-[#222222] text-white px-9 mt-10 rounded-3xl py-1'><p className=''>Place Order</p></button>
</div>
</div>
        </div>
        
    );
}

export default YourOrder;
