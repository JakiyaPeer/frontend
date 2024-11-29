import React, { useState } from 'react';
import axios from 'axios';

const Payment = () => {
  const [amount, setAmount] = useState(0);

  const handlePayment = async () => {
    try {
      const response = await axios.post('/api/payment/checkout', { amount });
      window.location.href = response.data.paymentUrl; // Redirect to payment gateway
    } catch (error) {
      console.error(error);
      alert('Payment failed.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Make a Payment</h1>
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />
        <button onClick={handlePayment} className="w-full bg-blue-500 text-white py-2 rounded">
          Pay ₹{amount}
        </button>
      </div>
    </div>
  );
};

export default Payment;
