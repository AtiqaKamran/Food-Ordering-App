import { useNavigate } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const RestaurantCard = ({ restaurant }) => {
  const navigate = useNavigate();
  
  return (
    <div 
      onClick={() => navigate(`/restaurant/${restaurant.id}`)} 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-48">
        <img 
          src={restaurant.image} 
          alt={restaurant.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 px-2 py-1 rounded-lg shadow-md">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500 text-sm" />
            <span className="font-bold text-sm">{restaurant.rating}</span>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1 line-clamp-1">
          {restaurant.name}
        </h3>
        <p className="text-orange-500 text-sm mb-2 flex items-center gap-1">
          <FaMapMarkerAlt size={12} /> {restaurant.cuisine}
        </p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1">
            <FaStar className="text-yellow-500 text-xs" /> {restaurant.rating} (500+ reviews)
          </span>
          <span className="text-orange-500 font-semibold text-sm group-hover:translate-x-1 transition">
            Order Now →
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;