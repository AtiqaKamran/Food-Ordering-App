import { useCart } from '../context/CartContext';
import { FaPlus } from 'react-icons/fa';

const FoodItemCard = ({ item }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex gap-5 transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-700">
      <img src={item.image} alt={item.name} className="w-28 h-28 rounded-xl object-cover" />
      <div className="flex-1">
        <h3 className="font-bold text-xl text-gray-800 dark:text-white">{item.name}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{item.description}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-orange-600 font-bold text-2xl">${item.price}</span>
          <button 
            onClick={() => addToCart(item)} 
            className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 flex items-center gap-2"
          >
            <FaPlus /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItemCard;