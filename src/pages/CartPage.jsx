import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { FaShoppingCart, FaTrashAlt, FaHome, FaArrowRight } from 'react-icons/fa';

const CartPage = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  
  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-20">
        <div className="container mx-auto px-4 text-center">
          <FaShoppingCart className="text-6xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-4">Your cart is empty</h2>
          <p className="text-gray-500 dark:text-gray-500 mb-8">Looks like you haven't added any items yet</p>
          <Link to="/restaurants" className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition inline-block">Browse Restaurants</Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Your Cart 🛒</h1>
        
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          <div className="lg:w-2/3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              {cartItems.map(item => <CartItem key={item.id} item={item} />)}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
              <button onClick={clearCart} className="flex items-center gap-2 px-6 py-3 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition">
                <FaTrashAlt /> Clear Cart
              </button>
              <Link to="/" className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition">
                <FaHome /> Back to Home
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sticky top-20">
              <h2 className="text-xl font-bold mb-4 border-b pb-2 text-gray-800 dark:text-white">Order Summary</h2>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between"><span className="text-gray-600 dark:text-gray-400">Subtotal:</span><span className="font-semibold dark:text-white">${getTotalPrice().toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-gray-600 dark:text-gray-400">Delivery Fee:</span><span className="font-semibold dark:text-white">$2.99</span></div>
                <div className="border-t pt-3 dark:border-gray-700"><div className="flex justify-between"><span className="text-lg font-bold dark:text-white">Total:</span><span className="text-xl font-bold text-orange-500">${(getTotalPrice() + 2.99).toFixed(2)}</span></div></div>
              </div>
              <Link to="/checkout"><button className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2">Proceed to Checkout <FaArrowRight /></button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;