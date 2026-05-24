import { useState } from 'react';
import { restaurants } from '../data/mockData';
import RestaurantCard from '../components/RestaurantCard';

const RestaurantsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="bg-gradient-to-r from-amber-800 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Our Restaurants</h1>
          <p className="text-lg">Discover the best dining experiences near you</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="🔍 Search restaurants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-full px-6 py-3 focus:outline-none focus:border-orange-500 transition"
          />
        </div>
        
        <div className="mb-6">
          <p className="text-gray-500 dark:text-gray-400">Found {filteredRestaurants.length} restaurants</p>
        </div>
        
        {filteredRestaurants.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">No restaurants found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRestaurants.map(restaurant => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantsPage;