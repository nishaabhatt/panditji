// components/RazorpayPayment.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { loadScript } from '../utils/scriptLoader'; // Create this utility function

const RazorpayPayment = () => {
  const [rzp, setRzp] = useState(null);
  const router = useRouter();
  const { subtotal } = router.query;



  const initializeRazorpay = () => {
    const options = {
      key: 'rzp_live_dH5uJahwN29gWd',
      amount: parseInt(subtotal) * 100,
      currency: 'INR',
      name: 'Pandit Ji',
      description: 'Product description',
      
      handler: function (response) {
        console.log('Payment ID:', response.razorpay_payment_id);
        console.log('Signature:', response.razorpay_signature);
        // Handle payment success, e.g., update order status
      },
      prefill: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '1234567890',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#FFC926', // Specify your desired color here
      },
    };

    const rzpInstance = new window.Razorpay(options);
    setRzp(rzpInstance);
  };

  useEffect(() => {
    const loadRazorpayScript = async () => {
      await loadScript('https://checkout.razorpay.com/v1/checkout.js');
      initializeRazorpay();
    };

    loadRazorpayScript();

    return () => {
      // Cleanup code, if needed
    };
  },[initializeRazorpay]);


  const handlePayment = () => {
    rzp.open();
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default RazorpayPayment;




