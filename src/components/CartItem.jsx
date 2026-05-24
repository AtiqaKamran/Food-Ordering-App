import { useCart } from '../context/CartContext';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  
  return (
    <div className="flex items-center gap-4 p-4 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
      <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
      <div className="flex-1">
        <h3 className="font-bold text-gray-800 dark:text-white">{item.name}</h3>
        <p className="text-orange-500 font-semibold">${item.price}</p>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition">
          <FaMinus size={12} />
        </button>
        <span className="w-8 text-center font-semibold text-gray-800 dark:text-white">{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition">
          <FaPlus size={12} />
        </button>
        <button onClick={() => removeFromCart(item.id)} className="text-red-500 ml-2 hover:text-red-600 transition">
          <FaTrash size={16} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;