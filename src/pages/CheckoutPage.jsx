import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    phone: ''
  });
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PK').format(price);
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subtotal = getTotalPrice();
    const deliveryFee = 299;
    const totalAmount = subtotal + deliveryFee;
    
    const order = {
      customerName: formData.fullName,
      customerEmail: formData.email,
      deliveryAddress: `${formData.address}, ${formData.city}`,
      itemsCount: cartItems.length,
      totalAmount: totalAmount,
      orderNumber: 'FD' + Math.floor(Math.random() * 1000000),
      phoneNumber: formData.phone,
      orderDate: new Date().toLocaleString()
    };
    
    setOrderDetails(order);
    setOrderPlaced(true);
    clearCart();
  };
  
  if (cartItems.length === 0 && !orderPlaced) {
    navigate('/cart');
    return null;
  }
  
  if (orderPlaced && orderDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
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
              
              <div className="p-6">
                <div className="text-center mb-6">
                  <p className="text-gray-500 dark:text-gray-400">Hello,</p>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{orderDetails.customerName}</h2>
                </div>
                
                <div className="bg-orange-50 dark:bg-gray-700 rounded-lg p-4 mb-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-600 dark:text-green-400 font-semibold">Order Confirmed</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    🚚 Your order will be delivered in <span className="font-bold text-orange-500">30-40 minutes</span>
                  </p>
                </div>
                
                <div className="border-t border-b border-gray-200 dark:border-gray-700 py-4 mb-6">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Delivery Details:</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-400">
                    <p>📍 <strong>Address:</strong> {orderDetails.deliveryAddress}</p>
                    <p>📞 <strong>Phone:</strong> {orderDetails.phoneNumber}</p>
                    <p>📧 <strong>Email:</strong> {orderDetails.customerEmail}</p>
                    <p>📦 <strong>Items:</strong> {orderDetails.itemsCount} items</p>
                  </div>
                </div>
                
                <div className="mb-6 text-center">
                  <p className="text-gray-600 dark:text-gray-400">Total Amount</p>
                  <p className="text-3xl font-bold text-orange-500">₨ {formatPrice(orderDetails.totalAmount)}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Including delivery fee ₨ 299</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={() => window.location.href = '/'} className="flex-1 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
                    Back to Home
                  </button>
                  <button onClick={() => window.location.href = '/restaurants'} className="flex-1 border-2 border-orange-500 text-orange-500 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition">
                    Order Again
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-4 text-center text-sm text-gray-500 dark:text-gray-400">
                <p>📧 Confirmation sent to {orderDetails.customerEmail}</p>
                <p>📞 Support: +92 123 4567890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">Checkout</h1>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12">Complete your order details below</p>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6 text-orange-500">Delivery Information</h2>
                
                <div className="space-y-5">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Full Name *</label>
                    <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Atiqa Kamran" />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Email Address *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="atiqa@example.com" />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Delivery Address *</label>
                    <textarea name="address" required value={formData.address} onChange={handleChange} rows="3" className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="123 G block, Johar Town" />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">City *</label>
                    <input type="text" name="city" required value={formData.city} onChange={handleChange} className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Lahore" />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Phone Number *</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="+92 123 4567890" />
                  </div>
                </div>
                
                <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition mt-8 text-lg">
                  Place Order
                </button>
              </form>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sticky top-20">
                <h2 className="text-xl font-bold mb-4 border-b pb-2 text-gray-800 dark:text-white">Your Order</h2>
                
                <div className="space-y-2 mb-4 max-h-60 overflow-auto">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between text-sm py-1">
                      <span className="text-gray-600 dark:text-gray-400">{item.quantity}x {item.name}</span>
                      <span className="font-semibold text-gray-800 dark:text-white">₨ {formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-3 space-y-2 dark:border-gray-700">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Subtotal:</span>
                    <span className="text-gray-800 dark:text-white">₨ {formatPrice(getTotalPrice())}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Delivery Fee:</span>
                    <span className="text-gray-800 dark:text-white">₨ 299</span>
                  </div>
                  <div className="border-t pt-2 mt-2 dark:border-gray-700">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-gray-800 dark:text-white">Total:</span>
                      <span className="text-xl font-bold text-orange-500">₨ {formatPrice(getTotalPrice() + 299)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;