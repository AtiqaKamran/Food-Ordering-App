import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const OrderSuccessPage = () => {
  const location = useLocation();
  const [orderDetails, setOrderDetails] = useState(null);
  
  useEffect(() => {
    // Get order details from navigation state or localStorage
    if (location.state) {
      setOrderDetails(location.state);
    } else {
      const savedOrder = localStorage.getItem('lastOrder');
      if (savedOrder) {
        setOrderDetails(JSON.parse(savedOrder));
      }
    }
  }, [location]);
  
  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">No order found</h2>
          <Link to="/" className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg inline-block">Go Home</Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Success Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            {/* Success Header */}
            <div className="bg-gradient-to-r from-green-500 to-teal-500 p-8 text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Order Confirmed! 🎉</h1>
              <p className="text-green-100">Your order has been placed successfully</p>
              <p className="text-green-200 text-sm mt-2">Order #{orderDetails.orderNumber}</p>
            </div>
            
            {/* Order Details */}
            <div className="p-6">
              {/* Customer Greeting */}
              <div className="text-center mb-6">
                <p className="text-gray-500 dark:text-gray-400">Hello,</p>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{orderDetails.customerName}</h2>
              </div>
              
              {/* Delivery Status */}
              <div className="bg-orange-50 dark:bg-gray-700 rounded-lg p-4 mb-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-600 dark:text-green-400 font-semibold">Order Confirmed</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  🚚 Your order will be delivered in <span className="font-bold text-orange-500">30-40 minutes</span>
                </p>
              </div>
              
              {/* Delivery Details */}
              <div className="border-t border-b border-gray-200 dark:border-gray-700 py-4 mb-6">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Delivery Details:</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <p>📍 {orderDetails.deliveryAddress}</p>
                  <p>📞 {orderDetails.phoneNumber}</p>
                  <p>📧 {orderDetails.customerEmail}</p>
                </div>
              </div>
              
              {/* Total Amount */}
              <div className="mb-6 text-center">
                <p className="text-gray-600 dark:text-gray-400">Total Amount</p>
                <p className="text-3xl font-bold text-orange-500">${orderDetails.totalAmount.toFixed(2)}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Including delivery fee</p>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/" className="flex-1 bg-orange-500 text-white py-3 rounded-lg font-semibold text-center hover:bg-orange-600 transition">
                  Back to Home
                </Link>
                <Link to="/restaurants" className="flex-1 border-2 border-orange-500 text-orange-500 py-3 rounded-lg font-semibold text-center hover:bg-orange-500 hover:text-white transition">
                  Order Again
                </Link>
              </div>
            </div>
            
            {/* Footer */}
            <div className="bg-gray-50 dark:bg-gray-700 p-4 text-center text-sm text-gray-500 dark:text-gray-400">
              <p>📧 Confirmation sent to {orderDetails.customerEmail}</p>
              <p>📞 Support: +1 234 567 890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;