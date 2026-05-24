import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const RestaurantCard = ({ restaurant }) => {
  const navigate = useNavigate();
  
  return (
    <div 
      onClick={() => navigate(`/restaurant/${restaurant.id}`)} 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
    >
      <div className="relative overflow-hidden h-52">
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute top-3 right-3 bg-white dark:bg-gray-700 px-2 py-1 rounded-full text-sm font-semibold shadow-md">
          ⭐ {restaurant.rating}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{restaurant.name}</h3>
        <p className="text-orange-500 text-sm mb-2">{restaurant.cuisine}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 dark:text-gray-400 text-sm">🚚 {restaurant.deliveryTime}</span>
          <span className="text-orange-500 font-semibold">Order →</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;