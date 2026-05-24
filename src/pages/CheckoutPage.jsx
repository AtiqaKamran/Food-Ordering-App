import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    phone: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show order confirmation
    alert(`✅ ORDER CONFIRMED!\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n🍔 Customer: ${formData.fullName}\n📧 Email: ${formData.email}\n📍 Address: ${formData.address}\n🏙️ City: ${formData.city}\n📞 Phone: ${formData.phone}\n━━━━━━━━━━━━━━━━━━━━━━━━\n💰 Total Amount: $${(getTotalPrice() + 2.99).toFixed(2)}\n━━━━━━━━━━━━━━━━━━━━━━━━\n🚚 Your order will be delivered in 30-40 minutes!\n\nThank you for ordering with FoodieHub! 🎉`);
    
    clearCart();
    navigate('/');
  };
  
  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">Checkout</h1>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12">Complete your order details below</p>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Delivery Form */}
            <div className="lg:w-2/3">
              <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8 transition-colors duration-300">
                <h2 className="text-2xl font-bold mb-6 text-orange-500">Delivery Information</h2>
                
                <div className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
                      placeholder="Atiqa Kamran"
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
                      placeholder="atiqa246@gmail.com"
                    />
                  </div>
                  
                  {/* Delivery Address */}
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Delivery Address *</label>
                    <textarea
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
                      rows="3"
                      placeholder="123 G block, Johar Town"
                    />
                  </div>
                  
                  {/* City */}
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
                      placeholder="Lahore"
                    />
                  </div>
                  
                  {/* Phone Number */}
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
                      placeholder="92 123 4567"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition mt-8 text-lg"
                >
                  Place Order
                </button>
              </form>
            </div>
            
            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sticky top-20 transition-colors duration-300">
                <h2 className="text-xl font-bold mb-4 border-b pb-2 text-gray-800 dark:text-white border-gray-200 dark:border-gray-700">Your Order</h2>
                
                <div className="space-y-2 mb-4 max-h-60 overflow-auto">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between text-sm py-1">
                      <span className="text-gray-600 dark:text-gray-400">{item.quantity}x {item.name}</span>
                      <span className="font-semibold text-gray-800 dark:text-white">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-3 space-y-2 dark:border-gray-700">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Subtotal:</span>
                    <span className="text-gray-800 dark:text-white">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Delivery Fee:</span>
                    <span className="text-gray-800 dark:text-white">$2.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Tax:</span>
                    <span className="text-gray-800 dark:text-white">$0.00</span>
                  </div>
                  <div className="border-t pt-2 mt-2 dark:border-gray-700">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-gray-800 dark:text-white">Total:</span>
                      <span className="text-xl font-bold text-orange-500">${(getTotalPrice() + 2.99).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-center text-sm text-gray-500 dark:text-gray-400">
                  🚚 Free delivery on orders over $50
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