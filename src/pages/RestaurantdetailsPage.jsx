import { useParams, useNavigate } from 'react-router-dom';
import { restaurants, foodItems } from '../data/mockData';
import FoodItemCard from '../components/FoodItemCard';
import { FaStar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const RestaurantDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const restaurant = restaurants.find(r => r.id === parseInt(id));
  const menuItems = foodItems.filter(item => item.restaurantId === parseInt(id));
  
  if (!restaurant) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Restaurant not found</h2>
        <button onClick={() => navigate('/restaurants')} className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg">Go Back</button>
      </div>
    );
  }
  
  return (
    <div>
      <div className="bg-white dark:bg-gray-900 shadow-sm border-b dark:border-gray-700">
        <div className="container mx-auto px-4 py-3">
          <button onClick={() => navigate('/restaurants')} className="text-orange-500 hover:text-orange-600 transition flex items-center gap-2">
            ← Back to Restaurants
          </button>
        </div>
      </div>
      
      <div className="relative h-80 bg-gray-800">
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{restaurant.name}</h1>
            <p className="text-xl mb-4">{restaurant.cuisine} Cuisine</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2 bg-black/30 px-4 py-1 rounded-full">
                <FaStar className="text-yellow-400" /> <span>{restaurant.rating} (500+ reviews)</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-4 py-1 rounded-full">
                <FaClock /> <span>{restaurant.deliveryTime}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-4 py-1 rounded-full">
                <FaMapMarkerAlt /> <span>Free Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Our Menu</h2>
          <div className="space-y-4">
            {menuItems.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400 py-8">No menu items available.</p>
            ) : (
              menuItems.map(item => <FoodItemCard key={item.id} item={item} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailsPage;